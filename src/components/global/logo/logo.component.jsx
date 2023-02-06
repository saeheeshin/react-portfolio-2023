import "./logo.styles.scss";
import { NavLink } from "react-router-dom";

const Logo = ({ logoType, logoLocation, logoHandler }) => {
  return (
    <NavLink
      className={`logo logo__type--${logoType} logo__location--${logoLocation}`}
      to="/"
      onClick={logoHandler}
    ></NavLink>
  );
};

export default Logo;
