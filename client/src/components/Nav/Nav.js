import React, { Component } from "react";
import API from "../Utils/API";
import './Nav.css';
import { Link } from "react-router-dom";

class Nav extends Component {

  state = {
    currentUser: {}
  };

  componentDidMount() {
    this.checkUser();
  };

  checkUser = () => {
    API.getUser()
      .then(res => this.setState({ currentUser: res.data }))
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
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">GuitarKey</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
              {!this.loggedInCheck()//if user is not logged in, show login & register button in nav, else show logout button
                ?
                <div>
                  <ul className="nav navbar-nav navbar-right">
                    <li> <a data-toggle="modal" data-target="#registerModal">Register</a></li>
                    <li> <a data-toggle="modal" data-target="#loginModal">Login</a></li>
                  </ul>
                </div>
                :
                <div>
                  <ul className="nav navbar-nav navbar-right">
                  <li><a>Profile</a></li>
                    <li><a id="logoutBtn">Logout</a></li>
                  </ul>
                </div>
              }
        </div>
      </div>
    </nav>
  </div>

      );
  }
}

export default Nav;
