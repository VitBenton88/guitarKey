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
               {Music.musicalKeys.map(key =>
                  <div key={key} className="col-md-4">
                      <div className="panel panel-default">
                          <div className="panel-heading">Key of {key} <button data-selected="false" type="button" className="btn btn-basic keyAddBtn">Add</button></div>
                          <div className="panel-body">{Music.chordFinder({key}).join(", ")}</div>
                      </div>
                  </div>
                )}
             </div>
          </div>
    }

  </div>

export default KeyFinder;