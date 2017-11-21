import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () =>
<div>

    <div className="container">
        <div className="jumbotron">
            <h1>The Guitar Key</h1>
            <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
            <p>To see the difference between static and fixed top navbars, just scroll.</p>
            <p>
                <Link className="btn btn-lg btn-success" to="/about" role="button">Learn More</Link>
            </p>
        </div>
    </div>

</div>

export default Jumbotron;