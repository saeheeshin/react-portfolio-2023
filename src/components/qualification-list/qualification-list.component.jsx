import "./qualification-list.styles.scss";

const QualificationList = ({ details: { icon, title, text } }) => {
  return (
    <div className="qualification-list grid__mobile--6 grid__desktop--3">
      <div className="qualification-list__icon">
        <span className="material-symbols-rounded">{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default QualificationList;
