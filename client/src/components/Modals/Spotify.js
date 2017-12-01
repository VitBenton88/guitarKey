import React, { Component } from "react";
import API from "../Utils/API";
import './Modals.css';

class SpotifyModal extends Component {

  state = {
  	key: "",
  	artist: "",
    songs: [],
    audioFeatures: []
  };

  componentDidMount() {
    this.setState({ key: this.props.currentKey});
  };

  handleInputChange = event => {//capture what's being typed in the artist search field
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  	event.preventDefault();
  	if (this.state.artist.length == ""){
  		alert("No artist entered!");
  	} else {
	    API.spotifyArtist(this.state.artist)
	    .then(res => {
	    	this.setState({ songs: res.data.tracks });
	    	let songIds = res.data.tracks.map(track => track.id);
	    	this.getAudioFeatures(songIds);
		});
	}
  };

  getAudioFeatures = songIds => {
    API.spotifyAudioFeatures(songIds)
    .then(res => {
    	console.log(res);
	});
  }

  render() {
    return (
	<div>

		<div id="spotifyModal" className="modal fade in" role="dialog">
		  <div className="modal-dialog">

		    <div className="modal-content">
		      <div className="modal-header">
		        <button onClick={this.props.close} type="button" className="close" data-dismiss="modal">&times;</button>
		        <h2 className="modal-title">Artist Search</h2>
		        <h4 className="spotifyFooterTitle">Powered by: <img className="spotifyLogo" src="./img/Spotify/Spotify_Logo_RGB_Green.png" alt="Spotify Logo" /> </h4>
		      </div>
			      <div className="modal-body">
			      	<form>
					  <div className="form-group">
					    <label htmlFor="artist">Artist</label>
					    <input placeholder="Artist's Name ..." onChange={this.handleInputChange} name="artist" type="text" className="form-control" id="artist" />
					  </div>
					  <button onClick={this.handleFormSubmit} className="btn btn-default">Search</button>
					</form>
			      </div>
			      {this.state.songs.length === 0
			      	?
			      	<div className="container">
			      		<p className="spotifyModalText"><em>Find an artist's songs in the key of {this.state.key}</em></p>
			      	</div>
			      	:
			      	<div className="container">
			      	{this.state.songs.map(song =>
			            <div key={song.id}>
			              
			              <p>{song.name}</p>
			                    
			            </div>
			          )}
			      	</div>
			      }
		      <div className="modal-footer">
		        <button onClick={this.props.close} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>

		  </div>
		</div>

	</div>
    );
  }
}

export default SpotifyModal;