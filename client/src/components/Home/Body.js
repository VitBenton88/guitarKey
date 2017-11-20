import React, { Component } from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import API from "../Utils/API";

class Body extends Component {

  state = {
    currentUser: {}
  };

  componentDidMount() {
    this.checkUser();
  };

  checkUser = () => {
    API.getUser()
      // .then(res => this.setState({ currentUser: res.data }))
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
            <div className="container">
                <div className="jumbotron">
                    <h1>The Guitar Key</h1>
                    <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                    <p>To see the difference between static and fixed top navbars, just scroll.</p>
                    <p>
                        <a className="btn btn-lg btn-success" href="/about" role="button">Learn More</a>
                    </p>
                </div>
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