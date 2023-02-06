import "./button.styles.scss";
import { Link } from "react-router-dom";

const Button = ({ buttonType, link, children, icon }) => {
  return (
    <Link className={`btn btn__${buttonType}`} to={link}>
      <strong>
        {icon && <span className="material-symbols-rounded">{icon}</span>}
        {children}
      </strong>
    </Link>
  );
};

export default Button;
