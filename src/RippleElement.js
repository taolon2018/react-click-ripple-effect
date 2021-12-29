import "./RippleElement.css";

const RippleElement = ({ children }) => {
  function createRipple(event) {
    const container = event.currentTarget;
    const ripple = container.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    const circle = document.createElement("span");
    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;
    circle.style.left = `${event.clientX - container.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - container.offsetTop - radius}px`;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    container.appendChild(circle);
  }

  return (
    <div onClick={createRipple} className="container">
      {children}
    </div>
  );
};
export default RippleElement;
