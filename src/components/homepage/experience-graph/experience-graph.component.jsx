import "./experience-graph.styles.scss";

const ExperienceGraph = ({ details: { title, imageSrc } }) => {
  return (
    <div className="experience-graph grid__mobile--6 grid__desktop--2 grid__tablet-sm-only--3">
      <h3>{title}</h3>
      <img src={`/assets/images/graph/${imageSrc}`} alt={title} />
    </div>
  );
};

export default ExperienceGraph;
