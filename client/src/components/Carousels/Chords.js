import React from "react";
import Music from "../Utils/Music";
import './Carousel.css';

const ChordCarousel = props =>

	<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
	    <div className="carousel-inner">

	        {Music.chordFinder({key: props.expandedKey}).map((chord, ind) =>
	        	ind === 0
	        	?
			        <div key={chord} className="item active">
			        	<h3>{chord} Chord</h3>
			            <img className="carImg" src={"./img/" + chord + ".gif"} alt={chord + " Chord Diagram"}/>
			        </div>
		        :
			        <div key={chord} className="item">
			       		<h3>{chord} Chord</h3>
			            <img className="carImg" src={"./img/" + chord + ".gif"} alt={chord + " Chord Diagram"}/>
			        </div>
	        )}

	    </div>
	    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
		    <span className="glyphicon glyphicon-chevron-left"></span>
		    <span className="sr-only">Previous</span>
		  </a>
	    <a className="right carousel-control" href="#myCarousel" data-slide="next">
		    <span className="glyphicon glyphicon-chevron-right"></span>
		    <span className="sr-only">Next</span>
		  </a>
	</div>

export default ChordCarousel;