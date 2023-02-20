import "./subpage-hero.styles.scss";

const SubPageHero = ({ className, children }) => {
  return (
    <section
      className={`subpage-hero ${className === undefined ? "" : className}`}
    >
      <div className="subpage-hero__content">{children}</div>
    </section>
  );
};

export default SubPageHero;
