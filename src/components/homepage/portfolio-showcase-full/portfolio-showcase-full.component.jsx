import "./portfolio-showcase-full.styles.scss";
import { Link } from "react-router-dom";
import { Fragment } from "react"; // Fragment is you do not want wrapping div
import { PortfolioShowcaseData } from "../../../content/site.data";

const PortfolioShowcaseFull = () => {
  return (
    <Fragment>
      {PortfolioShowcaseData.map(({ id, title, text, imageSrc }) => {
        const pagePath = title.replace(" ", "-").toLowerCase();
        return (
          <Link
            key={id}
            to={`/portfolio/${pagePath}`}
            className="portfolio-showcase-full grid__desktop--4 grid__mobile--6"
          >
            <div className="content">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <img
              src={`/assets/images/portfolio-showcase/${imageSrc}`}
              alt={`Portfolio Showcase : ${title}`}
            />
          </Link>
        );
      })}
    </Fragment>
  );
};

export default PortfolioShowcaseFull;
