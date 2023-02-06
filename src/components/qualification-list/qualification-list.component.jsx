import "./qualification-list.styles.scss";
import { Fragment } from "react"; // Fragment is you do not want wrapping div
import { QualificationData } from "../../content/global.data";

const QualificationList = () => {
  return (
    <Fragment>
      {QualificationData.map(({ id, icon, title, text }) => {
        return (
          <div
            key={id}
            className="qualification-list grid__mobile--6 grid__desktop--3"
          >
            <div className="qualification-list__icon">
              <span className="material-symbols-rounded">{icon}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default QualificationList;
