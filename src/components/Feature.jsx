import React from "react";
import "./styles/feature.scss";

const Feature = ({ title, text }) => (
  <div className="feature__container">
    <div className="feature__title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="feature__text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
