import "./brands.styles.scss";

const Brands = ({ details: { title, sector } }) => {
  return (
    <div
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
};

export default Brands;
