import React, { Component } from "react";
import API from "./Utils/API";
import Music from "./Utils/Music";
import Nav from "./Nav/Nav";
import Body from "./Profile/Body";
import ChordsModal from "./Modals/Chords";
import SpotifyModal from "./Modals/Spotify";
import SignInAlert from "./Alerts/SignInAlert";

class Profile extends Component {

  state = {
    currentUser: {unchecked:true},
    keys: [],
    chordsExpanded: false,
    spotifyExpanded: false
  };

  componentDidMount() {
    this.checkUser();
    this.setState({ keys: Music.chordsWithKeys.slice()});
  };

  checkUser = () => {
    API.getUser()
      .then(res => {
         if (res.data === false){
          console.log("No user logged in");
          this.setState({ currentUser: {unchecked:false}});
         } else {
          this.setState({ currentUser: res.data })
          console.log(`User logged in: ${this.state.currentUser.email}`);
          }
       })
      .catch(err => console.log(err));
  };

  logout = () => {
    console.log("Logout process started ...")
    API.userLogout()
      .then(res => {
         if (res.data === true){
              this.setState({ currentUser: {unchecked:false}})
              console.log("Logout process completed!")
              alert("Logout Successful!");
         } else {
            alert("Could Not Logout");
          }
       })
      .catch(err => console.log(err));
  };

  deleteKey = key => {
    API.deleteKey({key})
    .then(res => {
      if(res){
        this.checkUser();//if key was deleted, checkuser and re-render page showing new saved keys
      } else{
        alert("Key Not Deleted, Error");
      }
  });
 };

  expandKey = key => {
    let keys = this.state.keys;
    
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].note === key.key) {
        keys[i].expanded = true
      } else {
        keys[i].expanded = false
      }
    }
    this.setState({ keys: keys });
 };

  returnExpanded = () => {
    const keys = this.state.keys;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].expanded) {
        return keys[i].note
      }
    }
 };

  openChordsModal = (key) => {
    this.expandKey(key);
    this.setState({ chordsExpanded: true});
  };

 closeChordsModal = () => {
    this.setState({ chordsExpanded: false});
  };

 expandSpotify = (key) => {
    this.expandKey(key);
    this.setState({ spotifyExpanded: true});
  };

 closeSpotify = () => {
    this.setState({ spotifyExpanded: false});
  };

  render() {
    const key = this.returnExpanded();
    return (
			<div>
				<Nav
					user={this.state.currentUser}
          onClick={this.logout}
				/>
        {!this.state.currentUser._id
          ?
            <SignInAlert />
          :
  				<Body
            user={this.state.currentUser}
            delete={this.deleteKey}
            expand={this.expandKey}
            expandedChords={this.openChordsModal}
            expandedSpotify={this.expandSpotify}
          />
        }
        { this.state.chordsExpanded
          ?
          <ChordsModal
            close={this.closeChordsModal}
            currentKey={key}
            />
          :
          null
        }
        { this.state.spotifyExpanded
          ?
          <SpotifyModal
          close={this.closeSpotify}
          currentKey={key}
          />
          :
          null
        }
			</div>
    );
  }
}
export default Profile;