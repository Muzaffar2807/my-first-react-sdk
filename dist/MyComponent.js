"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MyComponent = function MyComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, text));
};
MyComponent.propTypes = {
  text: _propTypes["default"].string.isRequired
};
var _default = exports["default"] = MyComponent;
