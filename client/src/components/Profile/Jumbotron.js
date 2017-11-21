import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () =>
<div>

    <div className="container">
        <div className="jumbotron">
            <h1>Welcome to your profile page!</h1>
            <p>Below are your saved keys!</p>
            <p>If you do not have any saved keys, try exploring ...</p>
            <p>
                <Link className="btn btn-lg btn-success" to="/explore" role="button">Explore</Link>
            </p>
        </div>
    </div>

</div>

export default Jumbotron;