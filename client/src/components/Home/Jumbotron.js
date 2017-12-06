import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () =>
<div>

    <div className="container">
        <div className="jumbotron">
            <h1>The Guitar Key</h1>
            <p>With little to no focus on music theory, The Guitar Key will drive users to learn how to play songs and how to play in key.</p>
            <p>Most guitar playing is improvisation and self-taught. The basic philosophy behind The Guitar Key parallels conventional learning methods and should better assist with guitar playing development.</p>
            <p>
                <Link className="btn btn-lg btn-success" to="/about" role="button">Learn More</Link>
            </p>
        </div>
    </div>

</div>

export default Jumbotron;