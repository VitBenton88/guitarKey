import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../Utils/API";

class Nav extends Component {

  state = {
    currentUser: {}
  };

  componentDidMount() {
    this.checkUser();
  }

  checkUser = () => {
    API.getUser()
      .then(res => this.setState({ currentUser: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
// <!-- Static navbar -->
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
          <a className="navbar-brand" href="#">GuitarKey</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <li><a id="registerExpand">Register</a></li>
              <li><a id="loginExpand">Login</a></li>
              <li><a href="/logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

      );
  }
}

export default Nav;
