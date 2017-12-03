import React from "react";
import './Buttons.css';

const SaveKey = props =>

    <i onClick={props.save} className= {props.hoverClass + " fa fa-floppy-o pull-right"}></i>

export default SaveKey;