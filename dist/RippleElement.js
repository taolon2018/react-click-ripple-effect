"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./RippleElement.css");

const RippleElement = _ref => {
  let {
    children
  } = _ref;

  function createRipple(event) {
    const container = event.currentTarget;
    const ripple = container.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    const circle = document.createElement("span");
    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;
    circle.style.left = "".concat(event.clientX - container.offsetLeft - radius, "px");
    circle.style.top = "".concat(event.clientY - container.offsetTop - radius, "px");
    circle.style.width = circle.style.height = "".concat(diameter, "px");
    circle.classList.add("ripple");
    container.appendChild(circle);
  }

  return /*#__PURE__*/React.createElement("div", {
    onClick: createRipple,
    className: "container"
  }, children);
};

var _default = RippleElement;
exports.default = _default;