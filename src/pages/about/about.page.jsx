import "./about.styles.scss";
import { useEffect, Fragment } from "react"; // Fragment is you do not want wrapping div
import Section from "../../components/global/section/section.component";
import SubPageHero from "../../components/global/subpage-hero/subpage-hero.component";

import Brands from "../../components/about-me/brands/brands.component";
import WhatIDo from "../../components/about-me/what-i-do/what-i-do.component";

import { PageTitle, BrandData, WhatIDoData } from "../../content/site.data";
import { pageChangeHandler } from "../../scripts/script";

const PageAbout = () => {
  useEffect(() => {
    pageChangeHandler(PageTitle.about, PageTitle.name);
  }, []);

  return (
    <Fragment>
      <SubPageHero>
        <div className="grid__mobile--0 grid__desktop--4"></div>
        <h1 className="grid__mobile--6 grid__desktop--8">
          A Strong Desire to{" "}
          <span className="brand__color--secondary">Design and Develop</span>
        </h1>
      </SubPageHero>

      <Section sectionName="about-page__about-me">
        <article className="grid__mobile--6 grid__desktop--8">
          <h2>About Me</h2>
          <p>
            I am an experienced <strong>Front End Developer</strong> with a
            passion for <strong>UX Design</strong> located in{" "}
            <strong>Toronto, Canada</strong>. I'm working as UX Designer and
            Front End Developer.
          </p>
          <p>
            You'll often find me occupied with diverse personal interests
            including Photography, Reading, Writing, Baking, Gaming, and all
            things Web!
          </p>
        </article>
      </Section>

      <Section sectionName="about-page__brands">
        <h2 className="grid__mobile--6 grid__desktop--12">
          Brands I Worked On
        </h2>
        {BrandData.map((brand) => {
          return <Brands key={brand.id} details={brand} />;
        })}
      </Section>

      <Section sectionName="about-page__what-i-do">
        <h2 className="grid__mobile--6 grid__desktop--12">What I Do</h2>
        {WhatIDoData.map((whatido) => {
          return <WhatIDo key={whatido.id} details={whatido} />;
        })}
      </Section>
    </Fragment>
  );
};

export default PageAbout;
