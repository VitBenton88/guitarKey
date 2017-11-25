	const guitarChords = ["C","Dm","Em","F","G","Am","D","F#m","A","Bm","B","C#m","D#m","G#m"];
	const chordsWithKeys = [
		{		
			note: "C",
			chords: ["C","Dm","Em","F","G","Am","Bdim"]
		},
		{
			note: "D",
			chords: ["D","Em","F#m","G","A","Bm","C#dim"]
		},
		{
			note: "E",
			chords: ["E","F#m","G#m","A","B","C#m","D#dim"]
		},
		{
			note: "F",
			chords: ["F","Gm","Am","Bsharp","C","Dm","Edim"]
		},
		{
			note: "G",
			chords: ["G","Am","Bm","C","D","Em","F#dim"]
		},
		{
			note: "A",
			chords: ["A","Bm","C#m","D","E","F#m","G#dim"]
		},
		{
			note: "B",
			chords: ["B","C#m","D#m","E","F#","G#m","A#dim"]
		}
	];

export default {

	guitarChords,

	chordsWithKeys,

	chordFinder: (key) => {//http://www.guitaristsource.com/lessons/chords/keys/
		for (let i = 0; i < chordsWithKeys.length; i++) {
			if (key.key === chordsWithKeys[i].note){//when the key is passed through in profile/body, it's a property "key" of the "key" object
				return chordsWithKeys[i].chords
			}
		}
	},

	keyOptions: guitarChords.map((chord)=>{ return {chord, selected:false}})//creates array of objects each with a chord and selected property, for the state on explore/keyFinder

};