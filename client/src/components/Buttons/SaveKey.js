import React from "react";
import './Buttons.css';
import '../FontAwesome/css/font-awesome.css';

const SaveKey = props =>

  <div>
      <a onClick={props.save} className="btn btn-success saveBtn">
        <i className="icon-save icon-large"></i> Save</a>
  </div>

export default SaveKey;
