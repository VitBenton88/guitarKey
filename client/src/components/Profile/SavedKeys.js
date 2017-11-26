import React from "react";
import Music from "../Utils/Music";
import ExpandBtn from "../Buttons/ExpandKey";
import DelKeyBtn from "../Buttons/DeleteKey";
import './Profile.css';

const SavedKeys = props =>

  <div>
      <div className="container">
        <div className="row">
         {props.keys.map(key =>
            <div key={key} id={key} data-expanded="false" className="col-md-4 col-sm-4 col-xs-6">
                <div className="panel panel-default">
                    <div className="panel-heading"><h2 className="panel-title">Key of {key}
                    <DelKeyBtn
                      delete={()=>props.delete({key})}
                    />
                    <ExpandBtn
                      expand={()=>props.expand({key})}
                     />
                    </h2></div>
                    <div className="panel-body">{Music.chordFinder({key}).join(", ")}</div>
                </div>
            </div>
          )}
       </div>
    </div>
  </div>

export default SavedKeys;