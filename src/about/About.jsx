import React from "react";
import me from "./me.png";
import "./About.css";

function About() {
	return (
		<div className="about">
			<div data-aos="fade-right">
				<img src={me} alt="my_pic" className="about__mypic" />
			</div>
			<div className="about__content" data-aos="fade-left">
				<p>
					Hi, I am <span>Parv Sharma</span> ~ a{" "}
					<span>Competitive Programmer</span> and a{" "}
					<span>Full Stack Javascript Web Developer</span>. I -:
					<br />- Build awesome websites mainly using{" "}
					<span> MERN stack </span> along with variouos technologies.
					<br />- Am always willing to contribute towards the{" "}
					<span>team success</span> with all my heart and soul.
					<br />- Have a knack of always{" "}
					<span>learning, growing and helping others</span>.
				</p>
			</div>
		</div>
	);
}
export default About;
