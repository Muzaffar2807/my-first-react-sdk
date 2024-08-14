import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./MyComponent.css";
import reactToWebComponent from "react-to-webcomponent";
import { defineCustomElements } from "@webcomponents/custom-elements";

// The original React component
const MyComponent = ({ text }) => (
  <div className="main-container">
    <h1 className="text-color">{text}</h1>
  </div>
);

MyComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
 
const MyWebComponent = reactToWebComponent(MyComponent, React, ReactDOM);
 
customElements.define("my-web-component", MyWebComponent);
 
defineCustomElements(window);
