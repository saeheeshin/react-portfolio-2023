import "./experience-graph.styles.scss";
import { Fragment } from "react"; // Fragment is you do not want wrapping div
import { ExperienceGraphData } from "../../../content/site.data";

const ExperienceGraph = () => {
  return (
    <Fragment>
      {ExperienceGraphData.map(({ id, title, imageSrc }) => {
        return (
          <div
            key={id}
            className="experience-graph grid__mobile--6 grid__desktop--2 grid__tablet-sm-only--3"
          >
            <h3>{title}</h3>
            <img src={`/assets/images/graph/${imageSrc}`} alt={title} />
          </div>
        );
      })}
    </Fragment>
  );
};

export default ExperienceGraph;
