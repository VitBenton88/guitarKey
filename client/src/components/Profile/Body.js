import React from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import Jumbotron from "./Jumbotron";

const Body = props =>

  <div>
      <div>
        <Jumbotron />
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