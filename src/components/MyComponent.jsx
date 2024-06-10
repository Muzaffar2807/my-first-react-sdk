import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
);

MyComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MyComponent;
