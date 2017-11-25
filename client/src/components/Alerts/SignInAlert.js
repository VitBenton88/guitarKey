import React from "react";
import LoginModal from "../Modals/Login";
import RegisterModal from "../Modals/Register";

const Jumbotron = () =>
<div>

    <div className="container">
        <div className="jumbotron">
            <h1>Hey! You're not signed in!</h1>
            <p>Sign in to view this page</p>
        </div>
    </div>


    <LoginModal/>
    <RegisterModal/>


</div>

export default Jumbotron;