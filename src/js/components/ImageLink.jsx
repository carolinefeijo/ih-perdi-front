import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ImageLink = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <a href={props.href} target="_blank" rel="noreferrer">
        <img
          className={
            "h-[6em] p-[1.5em] transition duration-300 " + props.className
          }
          src={props.src}
          alt={props.alt ?? t(props.alt)}
        />
      </a>
    </>
  );
};

ImageLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

ImageLink.defaultProps = {
  href: "#",
  className: "",
  src: "https://via.placeholder.com/150",
  alt: "placeholder",
};

export default ImageLink;
