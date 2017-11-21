import React, { Component } from "react";
import API from "./Utils/API";
import Nav from "./Nav/Nav";
import Body from "./Profile/Body";
import SignInAlert from "./Profile/SignInAlert";

class Profile extends Component {

  state = {
    currentUser: {}
  };

  componentDidMount() {
    this.checkUser();
  };

  checkUser = () => {
    API.getUser()
      .then(res => {
         if (res.data === false){
         	console.log("No user logged in");
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
              this.setState({ currentUser: {}})
              console.log("Logout process completed!")
              alert("Logout Successful!");
         } else {
            alert("Could Not Logout");
          }
       })
      .catch(err => console.log(err));
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
          />
        }
			</div>
    );
  }
}
export default Profile;
