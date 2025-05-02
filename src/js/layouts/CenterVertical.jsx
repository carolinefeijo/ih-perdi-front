import PropTypes from "prop-types";

const CenterVertical = () => {
  return (
    <div
      className={
        "bg-[#bd7f7f] flex flex-col justify-center items-center h-screen"
      }
    >
      <div className={" flex flex-col"}>Ih Perdi</div>
      <div className={" flex flex-col"}>introducao</div>
      <div className={" flex flex-col"}>search</div>
      <div className={" flex flex-col"}>tabela</div>
    </div>
  );
};

CenterVertical.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CenterVertical;
