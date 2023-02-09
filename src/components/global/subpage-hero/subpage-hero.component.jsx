import "./subpage-hero.styles.scss";

const SubPageHero = ({ children }) => {
  return (
    <section className="subpage-hero">
      <div className="subpage-hero__content">{children}</div>
    </section>
  );
};

export default SubPageHero;
