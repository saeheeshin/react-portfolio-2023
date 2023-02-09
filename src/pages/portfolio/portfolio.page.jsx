import "./portfolio.styles.scss";
import { useEffect, Fragment } from "react"; // Fragment is you do not want wrapping div
import Section from "../../components/global/section/section.component";
import SubPageHero from "../../components/global/subpage-hero/subpage-hero.component";

import PortfolioItem from "../../components/portfolio/portfolio-item/portfolio-item.component";
import {
  PageTitle,
  PorfolioUxData,
  PortfolioFrontEndData,
} from "../../content/site.data";

const PagePortfolio = () => {
  useEffect(() => {
    document.title = `${PageTitle.portfolio} | ${PageTitle.name}`;
  });

  return (
    <Fragment>
      <SubPageHero>
        <div className="grid__mobile--0 grid__desktop--4"></div>
        <h1 className="grid__mobile--6 grid__desktop--8">
          Beautiful Pixel Perfect{" "}
          <span className="brand__color--primary">Design and Clean Script</span>
        </h1>
      </SubPageHero>

      <Section sectionName="portfolio-page__ux">
        <h2 className="grid__mobile--6 grid__desktop--12">UX Case Study</h2>
        {PorfolioUxData.map((portfolio) => {
          return <PortfolioItem key={portfolio.id} details={portfolio} />;
        })}
      </Section>

      <Section sectionName="portfolio-page__front-end">
        <h2 className="grid__mobile--6 grid__desktop--12">
          Front End Development
        </h2>
        {PortfolioFrontEndData.map((portfolio) => {
          return <PortfolioItem key={portfolio.id} details={portfolio} />;
        })}
      </Section>
    </Fragment>
  );
};

export default PagePortfolio;
