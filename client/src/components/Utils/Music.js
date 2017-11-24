import React from "react";
import axios from "axios";

	const musicalKeys = ["C","D","E","F","G","A","B"];

	const guitarChords = ["C","Dm","Em","F","G","Am","D","F#m","A","Bm","B","C#m","D#m","G#m"];

	const chordsInKeys = {
		C: ["C","Dm","Em","F","G","Am","Bdim"],
		D: ["D","Em","F#m","G","A","Bm","C#dim"],
		E: ["E","F#m","G#m","A","B","C#m","D#dim"],
		F: ["F","Gm","Am","Bsharp","C","Dm","Edim"],
		G: ["G","Am","Bm","C","D","Em","F#dim"],
		A: ["A","Bm","C#m","D","E","F#m","G#dim"],
		B: ["B","C#m","D#m","E","F#","G#m","A#dim"]
	}

export default {

	musicalKeys,

	guitarChords,

	chordsInKeys,

	chordFinder: (key) => {//http://www.guitaristsource.com/lessons/chords/keys/
		switch(key.key) {
		    case "C":
		        return chordsInKeys.C;
		        break;
		    case "D":
		        return chordsInKeys.D;
		        break;
		    case "E":
		        return chordsInKeys.E;
		        break;
		    case "F":
		        return chordsInKeys.F;
		        break;
		    case "G":
		        return chordsInKeys.G;
		        break;
		    case "A":
		        return chordsInKeys.A;
		        break;
		    case "B":;
		        return chordsInKeys.B;
		        break;
		    default: 
        		return "No chords found";
		}
	},

	keyOptions: guitarChords.map((chord)=>{ return {chord: chord, selected:false}})

};