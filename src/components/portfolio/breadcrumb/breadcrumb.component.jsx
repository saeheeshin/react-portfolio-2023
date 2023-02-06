import "./breadcrumb.styles.scss";
import { Link } from "react-router-dom";

const Breadcrumb = ({ className, title }) => {
  return (
    <div className={`breadcrumb ${className}`}>
      <Link to="/portfolio">Portfolio</Link>
      <span className="material-symbols-rounded">arrow_right</span>
      <strong>{title}</strong>
    </div>
  );
};

export default Breadcrumb;
