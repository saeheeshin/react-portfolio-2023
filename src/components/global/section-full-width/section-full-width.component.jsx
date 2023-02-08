import "./section-full-width.styles.scss";

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

export default SectionFullWidth;
