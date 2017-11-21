import React from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import Music from "../Utils/Music";
import './KeyFinder.css';

const KeyFinder = props =>

  <div>
  
    {!props.user._id //if _id doesn't exist AKA user is not logged in, insert LoginModal and Register Modal
        ?
          <div>
              <LoginModal/>
              <RegisterModal/>
          </div>
          :
          <div className="container">
              <div className="row">
               {Music.guitarChords.map(chord =>
                  <div key={chord} className="col-md-2 col-sm-2 col-xs-2">
                      <div className="panel panel-default chordPanel">
                          <div className="panel-body">{chord}</div>
                      </div>
                  </div>
                )}
             </div>
          </div>
    }

  </div>

export default KeyFinder;