import React, { Component } from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import Music from "../Utils/Music";
import ChordForm from './ChordForm';
import Results from './Results';
import API from "../Utils/API";
import './KeyFinder.css';

class KeyFinder extends Component {

    state = {
        guitarChords: [],
        selected: 0,
        results: []
    };

    componentDidMount() {
        this.setState({ guitarChords: Music.keyOptions.slice() }); //generate array or objects that contain chord and selected property
    };

    chordSelecter = (index) => {
        index = parseInt(index); //make sure the index is not a string
        this.state.guitarChords[index].selected = !this.state.guitarChords[index].selected; //equate inverse of current value for select/deseselt functionality
        this.setState(this.state);
        console.log("Selecting: " + this.state.guitarChords[index].chord);
        this.selectedCount();
        this.resultsGen(); //on each chord click, generate array of results.
    };

    selectedCount = () => { //count how many chords are selected

        const chordsArr = this.state.guitarChords;
        let count = 0;

        for (let i = 0; i < chordsArr.length; i++) {
            if (chordsArr[i].selected === true) {
                count++;
            }
        }
        this.setState({ selected: count });
    };

    resultsGen = () => { //the actual matching engine. NOT ACCURATE, ONLY RETURNS CHORDS CONTAINED IN KEY, NOT BEST MATCH OF CHOSEN

        const chordsArr = this.state.guitarChords;
        const chordsWithKeys = Music.chordsWithKeys;
        let results = [];

        for (let j = 0; j < chordsWithKeys.length; j++) {
            let foundMatch = true;
            for (let n = 0; n < chordsArr.length; n++) {
                if (chordsArr[n].selected === true) {
                    if (!chordsWithKeys[j].chords.includes(chordsArr[n].chord)) {
                        foundMatch = false;
                        break;
                    }
                }
            }
            if (foundMatch) { results.push(chordsWithKeys[j]); }
        }
        results = Array.from(new Set(results)); //set results array to a new array sans dups
        this.setState({ results }); //set results prop in state to new array
    };

    resultsRender = () => {
        let selectedCount = this.state.selected;
        if (selectedCount >= 2) {
            return ( <
                Results results = { this.state.results } save = { this.saveKey } expand = { this.props.expandedChords }

                />
            )

        }

    };

    saveKey = key => {
        API.saveKey({ key })
            .then(res => {
                if (res) {
                    alert("Key Saved!");
                } else {
                    alert("Key Not Saved, Error");
                }
            });
    };

    render() {
        return ( <
            div >

            {!this.props.user._id //if _id doesn't exist AKA user is not logged in, insert LoginModal and Register Modal
                ?
                <
                div >
                <
                LoginModal / >
                <
                RegisterModal / >
                <
                /div> : <
                div >
                <
                ChordForm
                chords = { this.state.guitarChords }
                onClick = { this.chordSelecter }
                /> { this.resultsRender() } < /
                div >
            }

            <
            /div>

        );
    }
}

export default KeyFinder;