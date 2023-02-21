import "./section.styles.scss";

const Section = ({ className, sectionName, children }) => {
  return (
    <section
      className={`section ${
        sectionName === undefined ? "" : `section__${sectionName}`
      } ${className === undefined ? "" : className}`}
    >
      {children}
    </section>
  );
};

// use <div className="content__page-width"></div> to align content to center and re-establish grid layout
const SectionFullWidth = ({ className, sectionName, children }) => {
  return (
    <section
      className={`section-full-width ${
        sectionName === undefined ? "" : `section__${sectionName}`
      } ${className === undefined ? "" : className}`}
    >
      {children}
    </section>
  );
};

const SubPageHero = ({ className, children }) => {
  return (
    <section
      className={`subpage-hero ${className === undefined ? "" : className}`}
    >
      <div className="subpage-hero__content">{children}</div>
    </section>
  );
};

export { Section, SectionFullWidth, SubPageHero };
