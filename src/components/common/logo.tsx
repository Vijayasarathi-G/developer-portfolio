import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../public/logo.png';

import "./styles/logo.css";

// @ts-ignore
const Logo = ({ width, link }) => {

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={logo} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
