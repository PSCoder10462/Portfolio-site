import React from "react";
import Card from "../card/Card";
import html_logo from "./html_logo.png";
import css_logo from "./css_logo.png";
import js_logo from "./js_logo.png";
import cpp_logo from "./cpp_logo.png";
import py_logo from "./py_logo.png";

const lang = [
  {
    pic: html_logo,
    head: "html 5",
  },
  {
    pic: css_logo,
    head: "css 3",
  },
  {
    pic: js_logo,
    head: "javascript",
  },
  {
    pic: cpp_logo,
    head: "c++ 14",
  },
  {
    pic: py_logo,
    head: "python 3.x",
  },
];

function Languages() {
  return (
    <div className="languages">
      <div className="container">
        {lang.map((l) => (
          <Card pic={l.pic} head={l.head} key={l.pic} />
        ))}
      </div>
    </div>
  );
}

export default Languages;
