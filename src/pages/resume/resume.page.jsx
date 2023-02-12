import "./resume.styles.scss";
import { useEffect, useState, Fragment } from "react"; // Fragment is you do not want wrapping div
import Section from "../../components/global/section/section.component";
import SubPageHero from "../../components/global/subpage-hero/subpage-hero.component";

import {
  PageTitle,
  ResumeDownloadData,
  ResumeExperienceData,
  ResumeEducationData,
  QualificationData,
} from "../../content/site.data";
import { pageChangeHandler } from "../../scripts/script";

import { Anchor } from "../../components/global/button/button.component";
import QualificationList from "../../components/qualification-list/qualification-list.component";
import Tab from "../../components/resume/tab/tab.component";
import ResumeItem from "../../components/resume/resume-item/resume-item.component";

const PageResume = () => {
  useEffect(() => {
    pageChangeHandler(PageTitle.resume, PageTitle.name);
  });

  const [resumeContent, setResumeContent] = useState(ResumeExperienceData);

  const tabChangeResume = () => {
    const tabExperienceTab = document.querySelector(".tab__experience");
    const tabEducationTab = document.querySelector(".tab__education");

    tabExperienceTab.classList.toggle("active");
    tabEducationTab.classList.toggle("active");

    setResumeContent(
      tabExperienceTab.classList.contains("active")
        ? ResumeExperienceData
        : ResumeEducationData
    );
  };

  return (
    <Fragment>
      <SubPageHero>
        <div className="grid__mobile--0 grid__desktop--4"></div>
        <h1 className="grid__mobile--6 grid__desktop--8">
          <span className="brand__color--tertiary">More than 10 Years</span> of
          Professional Experience
        </h1>
      </SubPageHero>

      <Section sectionName="resume__button">
        <div className="grid__mobile--6 grid__desktop--12">
          <Anchor details={ResumeDownloadData}>Download PDF Resume</Anchor>
        </div>
      </Section>

      <Section sectionName="resume__qualifications">
        <h2 className="grid__mobile--6 grid__desktop--12">Qualifications</h2>
        {QualificationData.map((qualification) => {
          return (
            <QualificationList key={qualification.id} details={qualification} />
          );
        })}
      </Section>

      <Section sectionName="resume__details">
        <Tab tabChangeHandler={tabChangeResume} />
        <div className="resume__content-area grid__mobile--6 grid__desktop--12">
          {resumeContent.map((resume) => {
            return <ResumeItem key={resume.id} details={resume} />;
          })}
        </div>
      </Section>

      <Section sectionName="resume__button">
        <div className="grid__mobile--6 grid__desktop--12">
          <Anchor details={ResumeDownloadData}>Download PDF Resume</Anchor>
        </div>
      </Section>
    </Fragment>
  );
};

export default PageResume;
