import "./what-i-do.styles.scss";
import { Fragment } from "react"; // Fragment is you do not want wrapping div
import { WhatIDoData } from "../../../content/site.data";

const WhatIDo = () => {
  return (
    <Fragment>
      {WhatIDoData.map(({ id, title }) => {
        const imageFileName = title.replace(" ", "-").toLowerCase();
        return (
          <div
            key={id}
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
      })}
    </Fragment>
  );
};

export default WhatIDo;
