import React from "react";
import "./marquee.css";

const Marquee = () => {
  const content = [
    "Code",
    "Create",
    "Build",
    "Innovate"
  ];

  return (
    <div className="marquee marquee--hover-pause">
      <ul className="marquee__content">
        {content.map((item, index) => (
          <li key={`content1-${index}`}>{item}</li>
        ))}
      </ul>
      <ul className="marquee__content" aria-hidden="true">
        {content.map((item, index) => (
          <li key={`content2-${index}`}>{item}</li>
        ))}
      </ul>
      <ul className="marquee__content" aria-hidden="true">
        {content.map((item, index) => (
          <li key={`content3-${index}`}>{item}</li>
        ))}
      </ul>
      <ul className="marquee__content" aria-hidden="true">
        {content.map((item, index) => (
          <li key={`content4-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
