import React from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import Jumbotron from "./Jumbotron";
import Music from "../Utils/Music";

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
              <div className="container">
                <div className="alert alert-warning">
                  <strong>Oh No!</strong> You have no saved keys.
                </div>
              </div>
            </div>
              :
              <div>
                <div className="container">
                  <div className="row">
                   {props.user.keys.map(key =>
                      <div key={key} className="col-md-4 col-sm-4 col-xs-6">
                          <div className="panel panel-danger">
                              <div className="panel-heading">Key of {key}</div>
                              <div className="panel-body">{Music.chordFinder({key}).join(", ")}</div>
                          </div>
                      </div>
                    )}
                 </div>
              </div>
            </div>
          }
    </div>

export default Body;