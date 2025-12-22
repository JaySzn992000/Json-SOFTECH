import React from "react";
import "./TechnologieSlider.css";

import JavaScriptLogo from "./Slider/JavaScript.png";
import ReactLogo from "./Slider/React.jsLogo.png";
import CssLogo from "./Slider/CSSLogo.jpg";
import HtmlLogo from "./Slider/HTMLLogo.png";
import SqlLogo from "./Slider/SqlLogo.jpg";

const techs = [
  { name: "React.js", img: ReactLogo },
  { name: "JavaScript", img: JavaScriptLogo },
  { name: "HTML", img: HtmlLogo },
  { name: "CSS", img: CssLogo },
  { name: "SQL", img: SqlLogo },
];

const TechnologieSlider = () => {
  
  return (
    <div className="tech-slider">
      <h2>Technologies We Use</h2>
      <div className="slider-track">
        {[...techs, ...techs].map((tech, index) => (
          <div className="slide" key={index}>
            <img src={tech.img} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologieSlider;
