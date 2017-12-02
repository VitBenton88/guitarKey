import React from "react";
import './Buttons.css';

const SpotifySong = props =>

    <a className="spotifySongLink" href={props.songLink} target="_blank">
  		<i className="spotifySong fa fa-external-link"></i>  Listen on Spotify</a>

export default SpotifySong;