import "./resume-item.styles.scss";
import parse from "html-react-parser";

const ResumeItem = ({ details: { id, title, content } }) => {
  return (
    <article
      key={id}
      className={`resume__item resume__item--${title.toLowerCase()}`}
    >
      <div className="grid__mobile--6 grid__desktop--3 resume__logo">
        <img
          src={`/assets/logos/logo__resume--${title}.svg`}
          alt={`Resume Logo : ${title}`}
        />
      </div>
      <div className="grid__mobile--6 grid__desktop--9 resume__content">
        {parse(content)}
      </div>
    </article>
  );
};

export default ResumeItem;
