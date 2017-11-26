import React, { Component } from "react";
import API from "./Utils/API";
import Nav from "./Nav/Nav";
import Body from "./Profile/Body";
import SignInAlert from "./Alerts/SignInAlert";

class Profile extends Component {

  state = {
    currentUser: {unchecked:true}
  };

  componentDidMount() {
    this.checkUser();
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

  render() {
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
            onClick={this.deleteKey}
          />
        }
			</div>
    );
  }
}
export default Profile;