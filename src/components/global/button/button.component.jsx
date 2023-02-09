import "./button.styles.scss";
import { Link } from "react-router-dom";

const Button = ({ details: { buttonType, link, icon }, children }) => {
  return (
    <Link className={`btn btn__${buttonType}`} to={link}>
      <strong>
        {icon && <span className="material-symbols-rounded">{icon}</span>}
        {children}
      </strong>
    </Link>
  );
};

const Anchor = ({
  details: { buttonType, link, icon, rel, target },
  children,
}) => {
  return (
    <a
      className={`btn btn__${buttonType}`}
      href={link}
      {...(target === undefined ? "" : { target: target })}
      {...(rel === undefined ? "" : { rel: rel })}
    >
      <strong>
        {icon && <span className="material-symbols-rounded">{icon}</span>}
        {children}
      </strong>
    </a>
  );
};

export { Button, Anchor };
