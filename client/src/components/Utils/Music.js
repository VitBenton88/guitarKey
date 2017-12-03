	const guitarChords = ["C","Dm", "E","Em","F","G","Am","D","F#m","A","Bm","B","C#m","D#m","G#m"];
	const chordsWithKeys = [
		{		
			note: "C",
			chords: ["C","Dm","Em","F","G","Am","Bdim"],
			expanded: false,
			matchScore: 0
		},
		{
			note: "D",
			chords: ["D","Em","F#m","G","A","Bm","C#dim"],
			expanded: false,
			matchScore: 0
		},
		{
			note: "E",
			chords: ["E","F#m","G#m","A","B","C#m","D#dim"],
			expanded: false,
			matchScore: 0
		},
		{
			note: "F",
			chords: ["F","Gm","Am","B#","C","Dm","Edim"],
			expanded: false,
			matchScore: 0
		},
		{
			note: "G",
			chords: ["G","Am","Bm","C","D","Em","F#dim"],
			expanded: false,
			matchScore: 0
		},
		{
			note: "A",
			chords: ["A","Bm","C#m","D","E","F#m","G#dim"],
			expanded: false,
			matchScore: 0
		},
		{
			note: "B",
			chords: ["B","C#m","D#m","E","F#","G#m","A#dim"],
			expanded: false,
			matchScore: 0
		}
	];

export default {

	guitarChords,

	chordsWithKeys,

	pitchClass: ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],

	chordFinder: (key) => {//http://www.guitaristsource.com/lessons/chords/keys/
		for (let i = 0; i < chordsWithKeys.length; i++) {
			if (key.key === chordsWithKeys[i].note){//when the key is passed through in Profile/SavedKeys, it's a property "key" of the "key" object
				return chordsWithKeys[i].chords
			}
		}
	},

	keyOptions: guitarChords.map((chord)=>{ return {chord, selected:false, matchScore: 0}})//creates array of objects each with a chord and selected property, for the state on explore/keyFinder

};