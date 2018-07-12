import React from "react";
import Music from "../Utils/Music";
import ExpandBtn from "../Buttons/ExpandKey";
import SaveKeyBtn from "../Buttons/SaveKey";

const Results = props =>

  <div>
      <div className="container">
        <div className="row">
         {props.results.map(key => (
            <div key={key.note} className="col-xs-12 col-sm-6 col-md-4">
                <div className="panel panel-success">
                    <div className="panel-heading"><h2 className="panel-title">Key of {key.note}
                      <SaveKeyBtn
                       save={()=>props.save(key.note)}
                       hoverClass="resultsSaveBtn"
                      />
                      <ExpandBtn
                        hoverClass="exploreExpandBtn"
                        expand={()=>props.expand(key.note)}
                      />
                      </h2>
                    </div>
                    <div className="panel-body">{Music.chordFinder(key).join(", ")} </div>
                </div>
            </div>)
          )}
       </div>
    </div>
  </div>

export default Results;
