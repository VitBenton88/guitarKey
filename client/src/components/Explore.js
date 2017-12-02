import React, { Component } from "react";
import API from "./Utils/API";
import Music from "./Utils/Music";
import Nav from "./Nav/Nav";
import ChordsModal from "./Modals/Chords";
import KeyFinder from "./Explore/KeyFinder";
import SignInAlert from "./Alerts/SignInAlert";

class Explore extends Component {

  state = {
    currentUser: {unchecked:true},
    keys: [],
    chordsExpanded: false,
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

  render() {
    const key = this.returnExpanded();//set current key for chordsModal
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
  				<KeyFinder
            user={this.state.currentUser}
            expand={this.expandKey}
            expandedChords={this.openChordsModal}
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
			</div>
    );
  }
}
export default Explore;