import React from "react";
import PropTypes from "prop-types";
import "./MyComponent.css"

const MyComponent = ({ text }) => (
  <div className="main-container">
    <h1 className="text-color">{text}</h1>
  </div>
);

MyComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MyComponent;
