import React from "react";
import Music from "../Utils/Music";
import ExpandBtn from "../Buttons/ExpandKey";
import SaveKeyBtn from "../Buttons/SaveKey";

const Results = props =>

  <div>
      <div className="container">
        <div className="row">
         {props.results.map(key =>
            <div key={key} className="col-md-4 col-sm-4 col-xs-6">
                <div className="panel panel-success">
                    <div className="panel-heading"><h2 className="panel-title">Key of {key} 
                      <SaveKeyBtn
                       save={()=>props.save({key})}
                      />
                      <ExpandBtn
                        hoverClass="exploreExpandBtn"
                        expand={()=>props.expand({key})}
                      />
                      </h2>
                    </div>
                    <div className="panel-body">{Music.chordFinder({key}).join(", ")} </div>
                </div>
            </div>
          )}
       </div>
    </div>
  </div>

export default Results;