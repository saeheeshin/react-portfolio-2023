import "./what-i-do.styles.scss";

const WhatIDo = ({ details: { title } }) => {
  const imageFileName = title.replace(" ", "-").toLowerCase();
  return (
    <div
      className={`grid__mobile--3 grid__desktop--3 what-i-do what-i-do__${imageFileName}`}
    >
      <div className="content">
        <img
          src={`/assets/logos/logo__what-i-do--${imageFileName}.svg`}
          alt={title}
        />
        <h3>{title}</h3>
      </div>
      <img
        className="empty"
        src="/assets/logos/logo__brands--blank.svg"
        alt=""
      />
    </div>
  );
};

export default WhatIDo;
