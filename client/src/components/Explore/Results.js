import React from "react";
import Music from "../Utils/Music";

const Results = props =>

  <div>
      <div className="container">
        <div className="row">
         {props.results.map(key =>
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

export default Results;