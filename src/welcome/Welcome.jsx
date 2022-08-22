import React from "react";
import "./Welcome.css";

function Welcome() {
	return (
		<div data-aos="fade-down" className="welcome">
			<div className="welcome__container">
				<h1>
					Hi, I am <br />
					<span id="name"> Parv Sharma </span>
					<br />
					Web Developer, Competitive Programmer
				</h1>
				<button> Resume </button>
			</div>
		</div>
	);
}

export default Welcome;
