import React from "react";
import './Buttons.css';

const SpotifySong = props =>

    <a className="spotifySongLink" href={props.songLink} target="_blank">
  		<i className="spotifySong fa fa-spotify fa-2x"></i>  Listen</a>

export default SpotifySong;