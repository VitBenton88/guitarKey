import React, { Component } from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import API from "../Utils/API";
import Jumbotron from "./Jumbotron";

class Body extends Component {

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
            console.log("No user signed in")
          } else {
            this.setState({ currentUser: res.data })
          }
        })
      .catch(err => console.log(err));
  };

  loggedInCheck = () => {
    if (this.state.currentUser._id) {
      return true
    } else {
      return false
    };
  };

  render() {
    return (
        <div>
            <div>
              <Jumbotron />
            </div>
        
          {!this.loggedInCheck() ?  //if user is not logged in, insert LoginModal and Register Modal
                <div>
                    <LoginModal/>
                    <RegisterModal/>
                </div>
                :
                null
          }

        </div>
      );
  }
}

export default Body;