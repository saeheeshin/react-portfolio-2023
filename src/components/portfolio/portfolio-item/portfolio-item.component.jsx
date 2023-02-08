import "./portfolio-item.styles.scss";
import { Link } from "react-router-dom";
import Picture from "../../global/picture/picture.component";

const PortfolioItem = ({ details: { title, icon, category, content } }) => {
  const pagePath = title.replace(" ", "-").toLowerCase();
  return (
    <div
      className={`grid__mobile--6 grid__desktop--4 grid__tablet-sm-only--6 portfolio-item portfolio-item__${pagePath}`}
    >
      <Link to={`/portfolio/${pagePath}`} />

      <div className="portfolio-item__content">
        <Picture
          details={{
            className: "portfolio-item__thumbnail",
            mobileImagePath: `/assets/images/portfolio-thumbnail/portfolio__mobile--${pagePath}.png`,
            desktopImagePath: `/assets/images/portfolio-thumbnail/portfolio__desktop--${pagePath}.png`,
            altTag: `Portfolio : ${title}`,
          }}
        />
      </div>

      <div className="portfolio-item__heading">
        <h3>{title}</h3>
        <p>
          <span className="material-symbols-rounded">{icon}</span> {category}
        </p>
      </div>

      <div className="portfolio-item__hover">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
