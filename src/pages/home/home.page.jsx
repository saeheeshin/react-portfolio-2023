import "./home.styles.scss";
import { Fragment } from "react"; // Fragment is you do not want wrapping div

import Section from "../../components/global/section/section.component";
import SectionFullWidth from "../../components/global/section-full-width/section-full-width.component";

import QualificationList from "../../components/qualification-list/qualification-list.component";
import ExperienceGraph from "../../components/homepage/experience-graph/experience-graph.component";
import PortfolioShowcaseFull from "../../components/homepage/portfolio-showcase-full/portfolio-showcase-full.component";

import {
  ExperienceGraphData,
  PortfolioShowcaseData,
} from "../../content/site.data";

const PageHome = () => {
  return (
    <Fragment>
      <Section sectionName="homepage__about-me">
        <h2 className="grid__mobile--6 grid__desktop--12">About Me</h2>
        <div className="homepage__area--about-me grid__mobile--6 grid__desktop--5 grid__tablet-sm-only--12">
          <article>
            <h4>Hi There!</h4>
            <p>
              I am an experienced <strong>Front End Developer</strong> with a
              passion for <strong>UX Design</strong> located in{" "}
              <strong>Toronto, Canada</strong>. I'm currently looking for entry
              level UX Designer or Front End Developer position.
            </p>
          </article>
        </div>
        <div className="grid__desktop--1"></div>
        {ExperienceGraphData.map((experience) => {
          return <ExperienceGraph key={experience.id} details={experience} />;
        })}
      </Section>

      <Section sectionName="homepage__qualifications">
        <h2 className="grid__mobile--6 grid__desktop--12">Qualifications</h2>
        <QualificationList />
      </Section>

      <SectionFullWidth sectionName="homepage__showcase" className="no-grap">
        <article className="grid__mobile--6 grid__desktop--12">
          <h2>Portfolio Showcase</h2>
          <p>
            Take a look at my recent work of <strong>UX Design</strong> and{" "}
            <strong>Front End Development</strong>.
          </p>
        </article>

        {PortfolioShowcaseData.map((portfolio) => {
          return (
            <PortfolioShowcaseFull key={portfolio.id} details={portfolio} />
          );
        })}
      </SectionFullWidth>
    </Fragment>
  );
};

export default PageHome;
