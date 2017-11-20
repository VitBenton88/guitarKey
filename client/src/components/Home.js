import React, { Component } from "react";
import API from "./Utils/API";
import Nav from "./Nav/Nav";
import Body from "./Home/Body";

class Home extends Component {

  state = {
    currentUser: {}
  };

  componentDidMount() {
    this.checkUser();
  };

  checkUser = () => {
    API.getUser()
      .then(res => this.setState({ currentUser: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
			<div>
				<Nav
					user={this.state.currentUser}
				/>
				<Body/>
			</div>
      );
  }
}
export default Home;

