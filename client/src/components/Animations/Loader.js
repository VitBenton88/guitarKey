import React from "react";
import './Animations.css';

const Loader = props =>
	<div className="loader">
		<i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
			<span className="sr-only">Loading...</span>
	</div>

export default Loader;