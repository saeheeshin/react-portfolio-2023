import "./portfolio-item.styles.scss";
import { Link } from "react-router-dom";
import { MediaQuery } from "../../../content/global.data";

const PortfolioItem = ({ details: { title, icon, category, content } }) => {
  const pagePath = title.replace(" ", "-").toLowerCase();
  return (
    <div
      className={`grid__mobile--6 grid__desktop--4 grid__tablet-sm-only--6 portfolio-item portfolio-item__${pagePath}`}
    >
      <Link to={`/portfolio/${pagePath}`} />
      <hgroup>
        <h3>{title}</h3>
        <h4>
          <span className="material-symbols-rounded">{icon}</span> {category}
        </h4>
      </hgroup>

      <div className="content">
        <div className="front">
          <picture>
            <source
              media={MediaQuery.desktop}
              src={`/assets/images/portfolio-thumbnail/portfolio__desktop--${pagePath}.png`}
            />
            <source
              media={MediaQuery.mobile}
              src={`/assets/images/portfolio-thumbnail/portfolio__mobile--${pagePath}.png`}
            />
            <img
              className="portfolio-item__thumbnail"
              src={`/assets/images/portfolio-thumbnail/portfolio__mobile--${pagePath}.png`}
              alt={`Portfolio : ${title}`}
            />
          </picture>
        </div>
        <div className="back">
          <article>
            <p>{content}</p>
          </article>
        </div>
      </div>

      <picture>
        <source
          media={MediaQuery.desktop}
          src="/assets/images/portfolio-thumbnail/portfolio__desktop--blank.svg"
        />
        <source
          media={MediaQuery.mobile}
          src="/assets/images/portfolio-thumbnail/portfolio__mobile--blank.svg"
        />
        <img
          className="portfolio-item--blank"
          src="/assets/images/portfolio-thumbnail/portfolio__mobile--blank.svg"
          alt=""
        />
      </picture>
    </div>
  );
};

export default PortfolioItem;
