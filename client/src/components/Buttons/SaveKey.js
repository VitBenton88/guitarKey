import React from "react";
import './Buttons.css';

const SaveKey = props =>

  <div>
      <a onClick={props.save} className="btn btn-success saveBtn">
        <i className="fa fa-floppy-o"></i></a>
  </div>

export default SaveKey;