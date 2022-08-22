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
				<a
					href="https://docs.google.com/document/d/1VCCWKfNKj1mvoxuLTpNuSSbvqRJQIlTCHMd4aFlZm1E/edit?usp=sharing"
					target="_blank"
				>
					<button> Resume </button>
				</a>
			</div>
		</div>
	);
}

export default Welcome;
