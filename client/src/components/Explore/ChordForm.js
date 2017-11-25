import React from "react";

const ChordForm = props =>

  <div>
      <div className="container">
          <div className="row">
           {props.chords.map((chord, ind) =>
              <div key={ind} onClick={ () => props.onClick(ind) } className="col-md-2 col-sm-2 col-xs-4">
                  <div className="panel panel-default chordPanel">
                      <div className={chord.selected ? "panel-body selectedChord" : "panel-body"} >{chord.chord}</div>
                  </div>
              </div>
            )}
         </div>
      </div>
  </div>

export default ChordForm;
