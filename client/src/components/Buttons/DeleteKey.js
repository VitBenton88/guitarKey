import React from "react";
import './Buttons.css';

const DeleteKey = props =>

  <div>
      <a onClick={props.delete} className="btn btn-danger delBtn">
        <i className="fa fa-trash-o"></i></a>
  </div>

export default DeleteKey;
