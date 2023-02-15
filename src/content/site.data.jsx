/*********************/
/**** PAGE TITLE ****/
/*******************/
const PageTitle = {
  name: "Portfolio of Sae-Hee Shin",
  home: "UX Designer and Front End Developer",
  portfolio: "Portfolio",
  resume: "Resume",
  about: "About Me",
};

/*******************/
/**** HOMEPAGE ****/
/*****************/
const CarouselData = [
  {
    id: 1,
    className: "portfolio",
    title: "David's <span>Portfolio</span>",
    subTitle: "UX Designer / Front End Developer",
    buttonText: "View My Portfolio",
    buttonDetails: {
      buttonType: "primary",
      link: "/portfolio",
      icon: "devices",
    },
  },
  {
    id: 2,
    className: "resume",
    title: "<span>Various</span> Expertise",
    subTitle: "UX Design and Responsive Site",
    buttonText: "View My Resume",
    buttonDetails: {
      buttonType: "tertiary",
      link: "/resume",
      icon: "description",
    },
  },
  {
    id: 3,
    className: "about-me",
    title: "More <span>Me</span>",
    subTitle: "Learn, Create, Bake",
    buttonText: "Learn About Me",
    buttonDetails: {
      buttonType: "secondary",
      link: "/about",
      icon: "person_pin",
    },
  },
];

const ExperienceGraphData = [
  {
    id: 1,
    title: "UX",
    imageSrc: "graph__ux.svg",
  },
  {
    id: 2,
    title: "SASS/CSS",
    imageSrc: "graph__sass.svg",
  },
  {
    id: 3,
    title: "Javascript",
    imageSrc: "graph__javascript.svg",
  },
];

const QualificationData = [
  {
    id: 1,
    icon: "architecture",
    title: "UX",
    text: "User Story, Personas, User Journey, UX research, Lo-fi Wireframe, Hi-fi Mockup, Prototype, Style Guide (Sticker Sheet)",
  },
  {
    id: 2,
    icon: "code",
    title: "Front End",
    text: "HTML, SASS/CSS, ES6, JQuery, Javascript, Emmet, Creating/Setting up Boilerplate, Familiarity with React, AEM styling setup and authoring",
  },
  {
    id: 3,
    icon: "devices",
    title: "Graphics",
    text: "Figma, Sketch, Photoshop, Photo Edit, Image Optimization, Vector Assets",
  },
  {
    id: 4,
    icon: "schema",
    title: "Process",
    text: "Jira, Confluence, Draw.io, Node.js, Gulp, Github, SOP Documents, Training Videos",
  },
];

const PortfolioShowcaseData = [
  {
    id: 1,
    title: "Cineplus",
    text: "UX Design",
    imageSrc: "portfolio-showcase__cineplus.png",
  },
  {
    id: 2,
    title: "Ubootcamp",
    text: "UX Design",
    imageSrc: "portfolio-showcase__ubootcamp.png",
  },
  {
    id: 3,
    title: "Livtencity",
    text: "Front End",
    imageSrc: "portfolio-showcase__livtencity.png",
  },
];

/********************/
/**** PORTFOLIO ****/
/******************/
const PorfolioUxData = [
  {
    id: 1,
    title: "Cineplus",
    icon: "phone_iphone",
    category: "Mobile App",
    content:
      "Student project of mobile app for movie lover who loves to save time.",
  },
  {
    id: 2,
    title: "Ubootcamp",
    icon: "devices",
    category: "Responsive Website",
    content:
      "Student project that helps new graduate who wants to build portfolio.",
  },
  {
    id: 3,
    title: "Heliconia",
    icon: "view_comfy",
    category: "Wireframe",
    content: "Demonstration project for Klick Health AEM development team.",
  },
  {
    id: 4,
    title: "MedFast",
    icon: "devices",
    category: "Responsive Website",
    content:
      "Student project for ordering prescription online from safe local source.",
  },
  {
    id: 5,
    title: "Portfolio",
    icon: "devices",
    category: "Responsive Website",
    content: "A site to display my work and learn React.",
  },
];

const PortfolioFrontEndData = [
  {
    id: 1,
    title: "Livtencity",
    icon: "devices",
    category: "Responsive Website",
    content: "Responsive AEM website with unique graph styling.",
  },
  {
    id: 2,
    title: "Nurtec",
    icon: "devices",
    category: "Responsive Website",
    content:
      "Responsive AEM website with multi-step form and customized pdf generator.",
  },
  {
    id: 3,
    title: "Avrobio",
    icon: "devices",
    category: "Responsive Website",
    content: "A Drupal pharmaceutical responsive website.",
  },
];

/*****************/
/**** RESUME ****/
/***************/
const ResumeDownloadData = {
  buttonType: "tertiary",
  icon: "download_for_offline",
  link: "/assets/documents/saeheeshin-resume-2023.pdf",
  rel: "noreferrer",
  target: "_blank",
};

const ResumeExperienceData = [
  {
    id: 1,
    title: "epcm",
    content: `
          <hgroup>
            <h3>Freelance UX Designer</h3>
            <h4>Jan 2023 - Present</h4>
          </hgroup>
    
          <ul>
            <li>Details</li>
          </ul>
        `,
  },
  {
    id: 2,
    title: "klick",
    content: `
          <hgroup>
            <h3>Associate Technical Director</h3>
            <h4>Sep 2021 - Jul 2022</h4>
          </hgroup>
    
          <hgroup>
            <h3>SENIOR WEB DEVELOPER</h3>
            <h4>Oct 2014 - Sep 2021</h4>
          </hgroup>
    
          <ul>
            <li>Personally lead and oversaw development of <strong>12 responsive websites in AEM</strong> by authoring, <strong>.Net framework</strong>, and creating <strong>SASS boilerplate</strong> with reusable mixins, functions, and settings.  Wrote complex <strong>Javascript (ES6)</strong> such as keyboard accessible modal with tab index trapping, navigation, carousel, and multi-step form.</li>
            <li><strong>Supporting and managing 5 front end developers</strong> and interns by engaging in Slack and weekly one on one, both about work and non-work related matters.</li>
            <li>Completed <strong>7 component mappings, user stories, style guide, and acceptance criteria</strong> during project discovery phase.</li>
            <li>Wrote over <strong>30 detailed SOP documents</strong>, front end process flowchart, and <strong>15 video lessons</strong> (with average of 5 minutes) that have been shared for training and onboarding.</li>
            <li>Regularly completed <strong>rapid proof of concepts</strong> for feasibility, development support, and demonstrations.</li>
            <li>Built <strong>close relations with various departments</strong> by learning their unique workflow and <strong>improving efficiency through technology</strong>, resulting in saving significant time.</li>
            <li>Utilized <strong>Sketch, Figma, and Adobe Creative Suite</strong> to create component mapping, complete wireframe, site design, style guide, and graphic support for developers.</li>
          </ul>
        `,
  },
  {
    id: 3,
    title: "moveable-online",
    content: `
          <hgroup>
            <h3>UI Developer</h3>
            <h4>May 2012 - Feb 2014</h4>
          </hgroup>
    
          <ul>
            <li>Collaborated closely with back-end developers to <strong>create 8 responsive websites</strong> with Telerik CMS and SVN for version control, and consulted with the UX team to ensure any limitations on technology are addressed.</li>
          </ul>
        `,
  },
  {
    id: 4,
    title: "interad",
    content: `
          <hgroup>
            <h3>Senior Front End Developer</h3>
            <h4>Oct 2010 - Apr 2012</h4>
          </hgroup>
    
          <hgroup>
            <h3>Front End Developer</h3>
            <h4>Feb 2006 - Sep 2010</h4>
          </hgroup>
    
          <ul>
            <li>Led a team of <strong>6 developers to convert 10,000+ RBC webpages</strong> to new design layout.</li>
            <li>Worked closely with RBC Online Standards to assist in development of new styling and development guidelines that have been recommended to all RBC vendors. With the new standard, the Credit Cards and Accounts sites received the <strong>2010 Forrester award</strong>.</li>
          </ul>
        `,
  },
];

const ResumeEducationData = [
  {
    id: 1,
    title: "coursera",
    content: `
          <hgroup>
            <h3>Google UX Certificate</h3>
            <h4>May 2022 - Dec 2022</h4>
          </hgroup>
    
          <ul>
            <li>A rigorous training designed for entry-level job readiness. Topics included <strong>UX research fundamentals, user map, user story, personas, user journey, equitable design, wireframes, and hi-fi prototypes</strong> using Figma and Adobe XD.</li>
            <li>Draw quick concepts and iteration through a <strong>lo-fi wireframe</strong> and <strong>crazy eight</strong> exercises.</li>
            <li><a href="https://www.coursera.org/account/accomplishments/professional-cert/LEX4TGSQ6LUY" target="_blank" rel="noreferrer">Link to Certification</a></li>
          </ul>
        `,
  },
  {
    id: 2,
    title: "udemy",
    content: `
          <hgroup>
            <h3>Udemy Certificate</h3>
            <h4>Present</h4>
          </hgroup>
    
          <ul>
            <li>Learn Figma - UI/UX Design Essential Training (July 21, 2021)</li>
            <li>Process Flowcharts & Process Mapping - The Beginner's Guide (July 19, 2021)</li>
            <li>Agile Crash Course : Agile project Management; Agile Delivery (June 24, 2021)</li>
            <li>Sketch from A to Z: Become an app designer (June 14, 2021)</li>
          </ul>
        `,
  },
  {
    id: 3,
    title: "seneca",
    content: `
          <hgroup>
            <h3>Digital Media Technical Production</h3>
            <h4>Sep 2002 - Jun 2004</h4>
          </hgroup>
    
          <ul>
            <li>Diploma</li>
          </ul>
        `,
  },
];

/*******************/
/**** ABOUT ME ****/
/*****************/
const BrandData = [
  {
    id: 1,
    title: "RBC",
    sector: "Financial",
  },
  {
    id: 2,
    title: "Takeda",
    sector: "Pharmaceutical",
  },
  {
    id: 3,
    title: "Pfizer",
    sector: "Pharmaceutical",
  },
  {
    id: 4,
    title: "Avrobio",
    sector: "Pharmaceutical",
  },
  {
    id: 5,
    title: "EPCM",
    sector: "Engineering",
  },
  // {
  //   id: 5,
  //   title: "West49",
  //   sector: "Clothing + Retail",
  // },
  {
    id: 6,
    title: "Lyreco",
    sector: "Retail",
  },
  {
    id: 7,
    title: "Lowes",
    sector: "Retail",
  },
  {
    id: 8,
    title: "PetSmart",
    sector: "Retail + Wholesale",
  },
];

const WhatIDoData = [
  {
    id: 1,
    title: "UX Design",
  },
  {
    id: 2,
    title: "Wireframe",
  },
  {
    id: 3,
    title: "Prototype",
  },
  {
    id: 4,
    title: "Responsive Website",
  },
  {
    id: 5,
    title: "HTML 5",
  },
  {
    id: 6,
    title: "SASS",
  },
  {
    id: 7,
    title: "Javascript",
  },
  {
    id: 8,
    title: "React",
  },
];

export {
  PageTitle,
  CarouselData,
  ExperienceGraphData,
  QualificationData,
  PortfolioShowcaseData,
  PorfolioUxData,
  PortfolioFrontEndData,
  ResumeDownloadData,
  ResumeExperienceData,
  ResumeEducationData,
  BrandData,
  WhatIDoData,
};
