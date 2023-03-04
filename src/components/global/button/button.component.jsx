import "./button.styles.scss";
import { Link } from "react-router-dom";

const Button = ({ details: { id, buttonType, link, icon }, children }) => {
  return (
    <Link
      {...(id === undefined ? "" : { id: id })}
      className={`btn btn__${buttonType}`}
      to={link}
    >
      <strong>
        {icon && <span className="material-symbols-rounded">{icon}</span>}
        {children}
      </strong>
    </Link>
  );
};

const Anchor = ({
  details: { id, buttonType, link, icon, rel, target },
  children,
}) => {
  return (
    <a
      className={`btn btn__${buttonType}`}
      href={link}
      {...(id === undefined ? "" : { id: id })}
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
