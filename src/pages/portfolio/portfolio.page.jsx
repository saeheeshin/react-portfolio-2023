import "./portfolio.styles.scss";
import { Fragment } from "react"; // Fragment is you do not want wrapping div
import Section from "../../components/global/section/section.component";
import PortfolioItem from "../../components/portfolio/portfolio-item/portfolio-item.component";
import { PorfolioUxData, PortfolioFrontEndData } from "../../content/site.data";

const PagePortfolio = () => {
  return (
    <Fragment>
      <Section sectionName="portfolio-page__ux">
        <h2 className="grid__mobile--6 grid__desktop--12">UX Case Study</h2>
        {PorfolioUxData.map((detail) => {
          return <PortfolioItem key={detail.id} details={detail} />;
        })}
      </Section>

      <Section sectionName="portfolio-page__front-end">
        <h2 className="grid__mobile--6 grid__desktop--12">
          Front End Development
        </h2>
        {PortfolioFrontEndData.map((detail) => {
          return <PortfolioItem key={detail.id} details={detail} />;
        })}
      </Section>
    </Fragment>
  );
};

export default PagePortfolio;
