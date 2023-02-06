import "./section.styles.scss";

const Section = ({ className, sectionName, children }) => {
  return (
    <section
      className={`section section__${sectionName} ${
        className === undefined ? "" : className
      }
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
