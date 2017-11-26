import React from "react";
import './Buttons.css';

const ExpandKey = props =>

    <i onClick={props.expand} className="fa fa-expand pull-right" data-target={props.keyTarget}></i>

export default ExpandKey;