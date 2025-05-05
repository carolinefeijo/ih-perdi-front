import PropTypes from "prop-types";

const ToggleButton = ({ isActive, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`w-10 h-6 flex items-center rounded-full px-1 transition-all duration-300 
      ${isActive ? "justify-end bg-gray-700" : "justify-start bg-gray-300"}`}
    >
      <div
        className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 
        ${isActive ? "rotate-180 bg-white" : "rotate-0 bg-white"}`}
      ></div>
    </button>
  );
};
ToggleButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ToggleButton;
