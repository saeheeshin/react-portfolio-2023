import "./brands.styles.scss";
import { Fragment } from "react"; // Fragment is you do not want wrapping div
import { BrandData } from "../../../content/site.data";

const Brands = () => {
  return (
    <Fragment>
      {BrandData.map(({ id, title, sector }) => {
        return (
          <div
            key={id}
            className={`grid__mobile--3 grid__desktop--3 brand-item brand-item__${title.toLowerCase()}`}
          >
            <div className="content">
              <div className="front">
                <img
                  src={`/assets/logos/logo__brands--${title.toLowerCase()}.svg`}
                  alt={title}
                />
              </div>
              <div className="back">
                <article>
                  <h3>{title}</h3>
                  <p>{sector}</p>
                </article>
              </div>
            </div>
            <img
              className="empty"
              src="/assets/logos/logo__brands--blank.svg"
              alt=""
            />
          </div>
        );
      })}
    </Fragment>
  );
};

export default Brands;
