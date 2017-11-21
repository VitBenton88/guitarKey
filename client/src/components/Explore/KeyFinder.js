import React from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import Music from "../Utils/Music";

const KeyFinder = props =>

  <div>
  
    {!props.user._id //if _id doesn't exist AKA user is not logged in, insert LoginModal and Register Modal
        ?
          <div>
              <LoginModal/>
              <RegisterModal/>
          </div>
          :
          Music.keyFinder()
    }

  </div>

export default KeyFinder;