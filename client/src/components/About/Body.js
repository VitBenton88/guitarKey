import React from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";

const Body = props =>

  <div>
      <div className="container">
         <h2>About The Guitar Key</h2>
          <p>With little to no focus on music theory, The Guitar Key will drive users to learn how to play songs and how to play in key.</p>
          <p>Most guitar playing is improvisation and self-taught. The basic philosophy behind The Guitar Key parallels conventional learning methods and should better assist with guitar playing development.</p>
          <h3>Technologies Used</h3>
          
          <ul>
            
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Express-Sessions</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Passport.JS</li>
            <li>Bcrytp</li>
            <li>Bootstrap</li>
            <li>Axios</li>
            <li>Spotify API</li>
            <li>“ultimate-guitar-scraper” node module</li>

          </ul>
      </div>
  
    {!props.user._id //if _id doesn't exist AKA user is not logged in, insert LoginModal and Register Modal
        ?
          <div>
              <LoginModal/>
              <RegisterModal/>
          </div>
          :
          null
    }

  </div>

export default Body;