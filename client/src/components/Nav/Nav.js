import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = props =>

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
              {!props.user._id //if _id does not exist IE user is not logged in, show login & register button in nav, else show logout button
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

export default Nav;
