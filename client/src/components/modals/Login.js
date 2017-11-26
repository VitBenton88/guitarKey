import React, { Component } from "react";
import API from "../Utils/API";

class LoginModal extends Component {

  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.userLogin(this.state)
    .then(res => {
	    this.confirmLogin()
	});
 };

 confirmLogin = () => {
 	alert("Successfully Logged In!");
 	window.location.reload();
 };

  render() {
    return (
		<div>

			<div id="loginModal" className="modal fade" role="dialog">
			  <div className="modal-dialog">

			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal">&times;</button>
			        <h4 className="modal-title">Login</h4>
			      </div>
			      <div className="modal-body">
					<form>
					  <div className="form-group">
					    <label htmlFor="email">Email address:</label>
					    <input
					    	type="email"
					    	name="email"
					    	onChange={this.handleInputChange}
					    	className="form-control"
					    	id="email" />
					  </div>
					  <div className="form-group">
					    <label htmlFor="pwd">Password:</label>
					    <input
					    	type="password"
					    	name="password"
					    	onChange={this.handleInputChange}
					    	className="form-control"
					    	id="pwd" />
					  </div>
					  <button
					  	type="submit"
					  	className="btn btn-default loginSubmit"
					  	onClick={this.handleFormSubmit}
					  >Login</button>
					</form>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			      </div>
			    </div>

			  </div>
			</div>

		</div>

    );
  }
}

export default LoginModal;