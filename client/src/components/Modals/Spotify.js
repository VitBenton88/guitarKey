import React from "react";
import './Modals.css';

const SpotifyModal = props =>

	<div>

		<div id="spotifyModal" className="modal fade in" role="dialog">
		  <div className="modal-dialog">

		    <div className="modal-content">
		      <div className="modal-header">
		        <button onClick={props.close} type="button" className="close" data-dismiss="modal">&times;</button>
		        <h4 className="modal-title">Spotify</h4>
		      </div>
			      <div className="modal-body">
			      	<img className="spotifyLogo" src="./img/Spotify/Spotify_Logo_RGB_Green.png" alt="Spotify Logo" />
			      </div>
		      <div className="modal-footer">
		        <button onClick={props.close} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>

		  </div>
		</div>

	</div>

export default SpotifyModal;