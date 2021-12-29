"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _RippleElement = _interopRequireDefault(require("./RippleElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_RippleElement.default, null, /*#__PURE__*/_react.default.createElement("div", {
  style: {
    backgroundColor: "black",
    height: "30px",
    width: "90px"
  }
}))), document.getElementById("root"));