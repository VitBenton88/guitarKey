import React from "react";
import axios from "axios";

	const musicalKeys = ["C","D","E","F","G","A","B"];

	const guitarChords = ["C","Dm","Em","F","G","Am","D","F#m","A","Bm","B","C#m","D#m","G#m"];

export default {

	musicalKeys,

	guitarChords,

	chordFinder: (key) => {//http://www.guitaristsource.com/lessons/chords/keys/
		let chords;
		switch(key.key) {
		    case "C":
		        chords = ["C","Dm","Em","F","G","Am","Bdim"];
		        return chords;
		        break;
		    case "D":
		        chords = ["D","Em","F#m","G","A","Bm","C#dim"];
		        return chords;
		        break;
		    case "E":
		        chords = ["E","F#m","G#m","A","B","C#m","D#dim"];
		        return chords;
		        break;
		    case "F":
		        chords = ["F","Gm","Am","Bsharp","C","Dm","Edim"];
		        return chords;
		        break;
		    case "G":
		        chords = ["G","Am","Bm","C","D","Em","F#dim"];
		        return chords;
		        break;
		    case "A":
		        chords = ["A","Bm","C#m","D","E","F#m","G#dim"];
		        return chords;
		        break;
		    case "B":
		        chords = ["B","C#m","D#m","E","F#","G#m","A#dim"];
		        return chords;
		        break;
		    default: 
        		return "No chords found";
		}
	},

	keyOptions: guitarChords.map((chord)=>{ return {chord: chord, selected:false}})

};