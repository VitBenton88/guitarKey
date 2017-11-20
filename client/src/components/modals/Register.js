import React from "react";

const RegisterModal = () =>
<div>

	<div id="registerModal" className="modal fade" role="dialog">
	  <div className="modal-dialog">

	    <div className="modal-content">
	      <div className="modal-header">
	        <button type="button" className="close" data-dismiss="modal">&times;</button>
	        <h4 className="modal-title">Register</h4>
	      </div>
	      <div className="modal-body">
			<form action="/register" method="post">
			  <div className="form-group">
			    <label htmlFor="email">Email address:</label>
			    <input type="email" name="email"  className="form-control" id="email" />
			  </div>
			  <div className="form-group">
			    <label htmlFor="pwd">Password:</label>
			    <input type="password" name="password" className="form-control" id="pwd" />
			  </div>
			  <button type="submit" className="btn btn-default">Create Account</button>
			</form>
	      </div>
	      <div className="modal-footer">
	        <button type="button" className="btn btn-default registerSubmit" data-dismiss="modal">Close</button>
	      </div>
	    </div>

	  </div>
	</div>

</div>

export default RegisterModal;