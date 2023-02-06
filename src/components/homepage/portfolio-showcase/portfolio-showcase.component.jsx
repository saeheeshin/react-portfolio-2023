import "./portfolio-showcase.styles.scss";
import { Link } from "react-router-dom";
import { Fragment } from "react"; // Fragment is you do not want wrapping div
import { PortfolioShowcaseData } from "../../../content/site.data";

const PortfolioShowcase = () => {
  return (
    <Fragment>
      {PortfolioShowcaseData.map(({ id, title }) => {
        const pagePath = title.replace(" ", "-").toLowerCase();
        return (
          <Link
            key={id}
            className={`grid__mobile--3 grid__desktop--3 portfolio-showcase portfolio-showcase__${pagePath}`}
            to={`/portfolio/${pagePath}`}
          >
            <span className="content">
              <span className="front">
                <img
                  src={`/assets/images/portfolio-showcase/portfolio-showcase--${pagePath}.png`}
                  alt={`Portfolio Showcase : ${title}`}
                />
              </span>
              <span className="back">
                <strong>{title}</strong>
              </span>
            </span>
            <img
              className="empty"
              src="/assets/images/portfolio-showcase/portfolio-showcase--blank.svg"
              alt=""
            />
          </Link>
        );
      })}
    </Fragment>
  );
};

export default PortfolioShowcase;
