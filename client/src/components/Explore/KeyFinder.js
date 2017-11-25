import React, { Component } from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import Music from "../Utils/Music";
import ChordForm from './ChordForm';
import Results from './Results';
import './KeyFinder.css';

class KeyFinder extends Component {

  state = {
    guitarChords: [],
    selected: 0,
    results: []
  };

  componentDidMount() {
    this.setState({ guitarChords: Music.keyOptions.slice()});//generate array or objects that contain chord and selected property
  };

  chordSelecter = (index) => {
      index = parseInt(index);//make sure the index is not a string
      this.state.guitarChords[index].selected = !this.state.guitarChords[index].selected;//equate inverse pof current value for select/deseselt functionality
      this.setState(this.state);
      console.log("Selecting: " + this.state.guitarChords[index].chord);
      this.selectedCount();
  };

  selectedCount = () => {//count how many chords are selected

    const chordsArr = this.state.guitarChords;
    let count = 0;

    for (let i = 0; i < chordsArr.length; i++) {
      if (chordsArr[i].selected === true){
        count++;
      }
    }
    this.setState({selected: count});
  };

  resultsGen = () => {
    const chordsArr = this.state.guitarChords;
    const results = [];

    console.log(chordsArr);

    // for (let i = 0; i < chordsArr.length; i++) {
    //   for (let j = i; j < Music.chordsWithKeys.length; j++) {
    //     for (let n = j; n < Music.chordsWithKeys[j].chords.length; n++) {
    //       if (chordsArr[i].selected === true && chordsArr[i].chord == Music.chordsWithKeys[j].chords[n]){
    //         console.log(chordsArr[i].chord);
    //         results.push(chordsArr[i].chord);
    //       }
    //     }
    //   }
    // }
    // this.setState({results});
    console.log(results)
  };

  resultsRender = () => {
    let selectedCount = this.state.selected;
    if (this.state.selected >= 2) {
      this.resultsGen();
      return (
        <Results
          results = {this.state.results}
         />
      )

    }

  };

  render() {
    return (
      <div>
      
        {!this.props.user._id //if _id doesn't exist AKA user is not logged in, insert LoginModal and Register Modal
            ?
              <div>
                  <LoginModal/>
                  <RegisterModal/>
              </div>
              :
              <div>
                <ChordForm
                  chords={this.state.guitarChords}
                  onClick={this.chordSelecter}
                 />
                 {this.resultsRender()}
              </div>
        }

      </div>

    );
  }
}

export default KeyFinder;