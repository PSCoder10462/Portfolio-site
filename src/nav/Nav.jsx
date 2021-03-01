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
        <div className="nav-brand" onClick={() => handleScroll(".welcome")}>
          parv
        </div>
        <ul className="nav-links">
          <li onClick={() => handleScroll(".services")}>services</li>
          <li onClick={() => handleScroll(".technologies")}>technologies</li>
          <li onClick={() => handleScroll(".projects")}>projects</li>
          <li onClick={() => handleScroll(".languages")}>languages</li>
          <li onClick={() => handleScroll(".about")}>about me</li>
          <li onClick={() => handleScroll(".getInTouch")}>get in touch</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
