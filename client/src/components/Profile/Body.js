import React from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import Jumbotron from "./Jumbotron";
import SavedKeys from "./SavedKeys";
import NoKeys from "../Alerts/NoKeys";

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

          { props.user.keys.length === 0 //if no keys are saved for user, display warning
            ?
            <div>
              <NoKeys />
            </div>
              :
              <div>
                <SavedKeys
                  keys = {props.user.keys}
                  delete={props.delete}
                  expand={props.expand}
                />
            </div>
          }
    </div>

export default Body;