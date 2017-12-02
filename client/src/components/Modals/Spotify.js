import React, { Component } from "react";
import API from "../Utils/API";
import Music from "../Utils/Music";
import SpotifyBtn from "../Buttons/SpotifySong";
import Loader from "../Animations/Loader";
import './Modals.css';

class SpotifyModal extends Component {

  state = {
  	key: "",
  	artist: "",
    songs: [],
    songsInKey : [],
    searched: false,
    searching: false
  };

  componentDidMount() {
    this.setState({ key: this.props.currentKey});
  };

  interpretKeyInt = int => {
  	return Music.pitchClass[int];
  };

  handleInputChange = event => {//capture what's being typed in the artist search field
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  	event.preventDefault();
  	if (this.state.artist.length === 0){
  		alert("No artist entered!");
  	} else {
  		this.setState({ searched: true, searching: true});//show loader when artist is searched
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
    	let audioFeatures = res.data.audio_features;
    	let songsInKey = [];
    	for (let i = 0; i < audioFeatures.length; i++) {

    		let keyToCheck = audioFeatures[i].key;
    		let currentKey = this.state.key;
    		if (this.interpretKeyInt(keyToCheck) === currentKey) {
    			songsInKey.push(audioFeatures[i].id);
    		}
    	}
    	this.setState({ songsInKey, searching: false });//hide loader and show results
	});
  };

  returnSongsInKey = () => {

  	return this.state.songs.map( (song, ind) => {

  		if (this.state.songsInKey.includes(song.id)) {
            return (<div className="songInKey" key={song.id}> <h4>{song.name} </h4> <SpotifyBtn songLink={song.external_urls.spotify} /> </div>);
  		}
  		else {
  			return null;
  		}
  	  }
  	);
  };

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

			      {!this.state.searched
			      	?
				      	<div className="container">
				      		<p className="spotifyModalText"><em>Find an artist's songs in the key of {this.state.key}</em></p>
				      	</div>
			      	:
			      		this.state.searching
			      		?
			      			<Loader />
			      		:

					      	this.state.songsInKey.length !== 0 //if there are matched songs, return those songs, if not, alert user
						      	
						      	?
							      	<div className="container">
								      	{this.returnSongsInKey()}
								    </div>
							    :
							      	<div className="container">
							      		<p className="spotifyModalText"><em>Sorry, no songs in the key of {this.state.key}</em></p>
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