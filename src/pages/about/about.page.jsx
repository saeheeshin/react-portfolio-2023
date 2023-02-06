import "./about.styles.scss";
import { Fragment } from "react"; // Fragment is you do not want wrapping div
import Section from "../../components/global/section/section.component";

import Brands from "../../components/about-me/brands/brands.component";
import WhatIDo from "../../components/about-me/what-i-do/what-i-do.component";

const PageAbout = () => {
  return (
    <Fragment>
      <Section sectionName="about-page__about-me">
        <article className="grid__mobile--6 grid__desktop--8">
          <h2>About Me</h2>
          <p>
            I am an experienced <strong>Front End Developer</strong> with a
            passion for <strong>UX Design</strong> located in{" "}
            <strong>Toronto, Canada</strong>. I'm currently looking for entry
            level UX Designer or Front End Developer position.
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
        <Brands />
      </Section>

      <Section sectionName="about-page__what-i-do">
        <h2 className="grid__mobile--6 grid__desktop--12">What I Do</h2>
        <WhatIDo />
      </Section>
    </Fragment>
  );
};

export default PageAbout;
