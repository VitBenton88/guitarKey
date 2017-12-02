import React from "react";
import './Buttons.css';

const ExpandKey = props =>

    <i onClick={props.expand} className={props.hoverClass + " fa fa-expand pull-right"}></i>

export default ExpandKey;