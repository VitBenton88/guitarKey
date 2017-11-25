import React, { Component } from "react";
import API from "./Utils/API";
import Nav from "./Nav/Nav";
import KeyFinder from "./Explore/KeyFinder";
import SignInAlert from "./Alerts/SignInAlert";

class Explore extends Component {

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

  // updateKeys = () => {
  //   console.log("Updating musical keys ...")
  //   API.userUpdate()
  //     .then(res => {
  //        if (res.data === true){
  //             this.setState({ currentUser: {}})
  //             console.log("Logout process completed!")
  //             alert("Logout Successful!");
  //        } else {
  //           alert("Could Not Logout");
  //         }
  //      })
  //     .catch(err => console.log(err));
  // };


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
  				<KeyFinder
            user={this.state.currentUser}
           />
        }
			</div>
    );
  }
}
export default Explore;

