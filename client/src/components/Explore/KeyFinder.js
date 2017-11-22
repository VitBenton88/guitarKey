import React, { Component } from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";
import Music from "../Utils/Music";
import './KeyFinder.css';

class KeyFinder extends Component {

  state = {
    guitarChords: []
  };

  componentDidMount() {
    this.setState({ guitarChords: Music.keyOptions.slice()});//generate array or objects that contain chord and selected property
  };

  chordSelecter = (index) => {
      index = parseInt(index);//make sure the index is not a string
      this.state.guitarChords[index].selected = !this.state.guitarChords[index].selected;//equate inverse pof current value for select/deseselt functionality
      this.setState(this.state);
      console.log("Selecting: " + this.state.guitarChords[index].chord)
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
              <div className="container">
                  <div className="row">
                   {this.state.guitarChords.map((chord, ind) =>
                      <div key={ind} onClick={ () => this.chordSelecter(ind) } className="col-md-2 col-sm-2 col-xs-4">
                          <div className="panel panel-default chordPanel">
                              <div className={chord.selected ? "panel-body selectedChord" : "panel-body"} >{chord.chord}</div>
                          </div>
                      </div>
                    )}
                 </div>
              </div>
        }

        <div className="container">
          <button type="button" className="btn btn-success">Submit</button>
        </div>
      </div>

    );
  }
}

export default KeyFinder;