import "./cineplus.styles.scss";
import { Fragment } from "react"; // Fragment is you do not want wrapping div

import SubPageHero from "../../../components/global/subpage-hero/subpage-hero.component";
import Section from "../../../components/global/section/section.component";
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
    </Fragment>
  );
};

export default PageCineplus;
