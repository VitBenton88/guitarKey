import React from "react";
import Music from "../Utils/Music";
import ExpandBtn from "../Buttons/ExpandKey";
import DelKeyBtn from "../Buttons/DeleteKey";
import SpotifyBtn from "../Buttons/SpotifyModal";
import './Profile.css';

const SavedKeys = props =>

  <div>
      <div className="container">
        <div className="row">
         {props.keys.map(key =>
            <div key={key} id={key} data-expanded="false" className="col-xs-12 col-sm-6 col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading"><h2 className="panel-title">Key of {key}
                    <DelKeyBtn
                      delete={()=>props.delete({key})}
                    />
                    <ExpandBtn
                      explore={false}
                      hoverClass="profileExpandBtn"
                      expand={()=>props.expandedChords({key})}
                     />
                    <SpotifyBtn
                      expandedSpotify={()=>props.expandedSpotify({key})}
                    />
                    </h2></div>
                    <div className="panel-body">{Music.chordFinder({note:key}).join(", ")}</div>
                </div>
            </div>
          )}
       </div>
    </div>
  </div>

export default SavedKeys;
