import "./cineplus.styles.scss";
import { Fragment } from "react"; // Fragment is you do not want wrapping div

import {
  SubPageHero,
  Section,
} from "../../../components/global/section/section.component";
import { Anchor } from "../../../components/global/button/button.component";
import Breadcrumb from "../../../components/portfolio/breadcrumb/breadcrumb.component";

const PageCineplus = () => {
  return (
    <Fragment>
      <SubPageHero className="subpage-hero__portfolio-item">
        <div className="grid__mobile--0 grid__desktop--4"></div>

        <div className="grid__mobile--6 grid__desktop--8">
          <hgroup>
            <h4>UX Design</h4>
            <h1>Cineplus Mobile App</h1>
          </hgroup>
          <Anchor
            details={{
              buttonType: "bordered--primary",
              icon: "link",
              link: "",
              target: "_blank",
              rel: "noreferrer",
            }}
          >
            Go to Case Study
          </Anchor>
        </div>
      </SubPageHero>

      <Section sectionName="breadcrumb">
        <Breadcrumb>Cineplus</Breadcrumb>
      </Section>

      <Section sectionName="project-details">
        <article className="grid__mobile--6 grid__desktop--6">
          <h2>Product</h2>
          <p>
            Cineplus is a movie theater dedicated for trendy young movie lovers
            with modern and rotating classic movies for their client to select
            from. With amazing prices and large surround sound, they are
            passionate about delivering the best quality movie experience.
          </p>
        </article>

        <article className="grid__mobile--6 grid__desktop--6">
          <h2>My Responsibilities</h2>
          <ul className="list__no-space">
            <li>Create competitive audit and persona</li>
            <li>Sketch storyboard and wireframe</li>
            <li>
              Outline and conduct usability studies and produce research report
            </li>
            <li>Iterate on design based on usability studies</li>
            <li>Create Lo-Fi and Hi-Fi wireframes and prototype</li>
            <li>Generate presentation for stakeholders</li>
          </ul>
        </article>
      </Section>

      <Section sectionName="project-details">
        <article className="grid__mobile--6 grid__desktop--6">
          <h2>The Problem</h2>
          <p>
            Clients wants less time purchasing ticket and make less mistakes
            when group of people are buying the same ticket
          </p>
        </article>

        <article className="grid__mobile--6 grid__desktop--6">
          <h2>The Goal</h2>
          <p>
            A faster way to select and purchase movie tickets and send a link
            that will lets others purchase the same ticket without going through
            the all the steps.
          </p>
        </article>
      </Section>
    </Fragment>
  );
};

export default PageCineplus;
