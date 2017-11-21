import React, { Component } from "react";
import API from "./Utils/API";
import Nav from "./Nav/Nav";
import Body from "./Home/Body";

class Home extends Component {

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
              window.location.reload();
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
				<Body/>
			</div>
    );
  }
}
export default Home;

