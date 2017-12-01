import React from "react";
import ChordCarousel from "../Carousels/Chords";
import './Modals.css';

const ChordsModal = props =>

    	<div>

			<div id="chordsModal" className="modal fade in" role="dialog">
			  <div className="modal-dialog">

			    <div className="modal-content">
			      <div className="modal-header">
			        <button onClick={props.close} type="button" className="close" data-dismiss="modal">&times;</button>
			        <h4 className="modal-title">Chords for the key of {props.currentKey}</h4>
			      </div>
				      <div className="modal-body">
				      	<ChordCarousel
				      		currentKey={props.currentKey}
				      	/>
				      </div>
			      <div className="modal-footer">
			        <button onClick={props.close} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			      </div>
			    </div>

			  </div>
			</div>

		</div>

export default ChordsModal;