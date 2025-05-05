import PropTypes from "prop-types";

const ToggleButton = ({ isActive, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`w-9 h-6 rounded-full flex items-center justify-${
        isActive ? "end" : "start"
      } bg-gray-300 transition-all`}
    >
      <div className="w-4 h-4 bg-white rounded-full shadow-md transition-all"></div>
    </button>
  );
};
ToggleButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ToggleButton;
