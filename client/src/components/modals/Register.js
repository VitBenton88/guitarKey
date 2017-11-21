import React, { Component } from "react";
import API from "../Utils/API";

class RegisterModal extends Component {

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
    API.userRegister(this.state)
    .then(res => {
    	if (res.data === true){
		    this.confirmRegister()
		} else {
			alert("Unable to Register New Account")
		}
	});
 };

 confirmRegister = () => {
 	alert("New Account Created!");
 	window.location.reload();
 };


  render() {
    return (
		<div>

			<div id="registerModal" className="modal fade" role="dialog">
			  <div className="modal-dialog">

			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal">&times;</button>
			        <h4 className="modal-title">Register</h4>
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
					  	className="btn btn-default registerSubmit"
					  	onClick={this.handleFormSubmit}
					  >Create Account</button>
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


export default RegisterModal;