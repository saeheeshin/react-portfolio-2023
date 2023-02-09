import "./home.styles.scss";
import { useEffect, Fragment } from "react"; // Fragment is you do not want wrapping div

import Section from "../../components/global/section/section.component";
import SectionFullWidth from "../../components/global/section-full-width/section-full-width.component";
import Carousel from "../../components/homepage/carousel/carousel.component";

import QualificationList from "../../components/qualification-list/qualification-list.component";
import ExperienceGraph from "../../components/homepage/experience-graph/experience-graph.component";
import PortfolioShowcaseFull from "../../components/homepage/portfolio-showcase-full/portfolio-showcase-full.component";

import {
  PageTitle,
  ExperienceGraphData,
  QualificationData,
  PortfolioShowcaseData,
} from "../../content/site.data";

const PageHome = () => {
  useEffect(() => {
    document.title = `${PageTitle.name} | ${PageTitle.home}`;
  });

  return (
    <Fragment>
      <Carousel />

      <Section sectionName="homepage__about-me">
        <h2 className="grid__mobile--6 grid__desktop--12">About Me</h2>
        <div className="homepage__area--about-me grid__mobile--6 grid__desktop--5 grid__tablet-sm-only--12">
          <article>
            <h4>Hi There!</h4>
            <p>
              I am an experienced <strong>Front End Developer</strong> with a
              passion for <strong>UX Design</strong> located in{" "}
              <strong>Toronto, Canada</strong>. I'm working as UX Designer and
              Front End Developer.
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
        {QualificationData.map((qualification) => {
          return (
            <QualificationList key={qualification.id} details={qualification} />
          );
        })}
      </Section>

      <SectionFullWidth sectionName="homepage__showcase" className="no-gap">
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
