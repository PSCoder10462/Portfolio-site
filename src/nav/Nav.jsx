import React, { useEffect } from "react";
import "./Nav.css";

function Nav() {
	useEffect(() => {
		const el = document.querySelector(".navbar");
		if (el) {
			let prevScrollpos = window.pageYOffset;
			window.onscroll = () => {
				const currentScrollPos = window.pageYOffset;
				if (prevScrollpos > currentScrollPos) {
					el.style.top = "0";
				} else {
					el.style.top = "-10vh";
				}
				prevScrollpos = currentScrollPos;
			};
		}
	}, []);

	const toggler = () => {
		const el = document.querySelector(".nav-links");
		el.classList.toggle("open");
	};

	const handleScroll = (classn) => {
		const element = document.querySelector(classn);
		const offset = 80;
		const bodyRect = document.body.getBoundingClientRect().top;
		const elementRect = element.getBoundingClientRect().top;
		const elementPosition = elementRect - bodyRect;
		const offsetPosition = elementPosition - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});

		const el = document.querySelector(".nav-links");
		el.classList.remove("open");
	};
	return (
		<div className="navbar">
			<nav>
				<div className="hamburger" onClick={toggler}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
				<div
					className="nav-brand"
					onClick={() => handleScroll(".welcome")}
				>
					ps
				</div>
				<ul className="nav-links">
					<li onClick={() => handleScroll(".about-scroll")}>about me</li>
					<li onClick={() => handleScroll(".projects-scroll")}>projects</li>
					<li onClick={() => handleScroll(".cp-scroll")}>CP Profiles</li>
					<li onClick={() => handleScroll(".tech-scroll")}>
						technologies
					</li>
					<li onClick={() => handleScroll(".lang-scroll")}>
						languages
					</li>
					<li onClick={() => handleScroll(".git-scroll")}>
						get in touch
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
