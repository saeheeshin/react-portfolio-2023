import "./breadcrumb.styles.scss";
import { Link } from "react-router-dom";

const Breadcrumb = ({ className, children }) => {
  return (
    <div className={`breadcrumb ${className}`}>
      <Link to="/portfolio">Portfolio</Link>
      <span className="material-symbols-rounded">arrow_right</span>
      <strong>{children}</strong>
    </div>
  );
};

export default Breadcrumb;
