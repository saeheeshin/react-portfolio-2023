const NavigationData = [
  {
    id: 1,
    to: "/",
    text: "Home",
  },
  {
    id: 2,
    to: "/portfolio",
    text: "Portfolio",
  },
  {
    id: 3,
    to: "/resume",
    text: "Resume",
  },
  {
    id: 4,
    to: "/about",
    text: "About",
  },
];

const SocialMediaData = [
  {
    id: 1,
    to: "https://www.linkedin.com/in/saeheeshin/",
    text: "LinkedIn",
    className: "social__btn--linkedin",
  },
  {
    id: 2,
    to: "https://www.behance.net/saeheeshin",
    text: "Behance",
    className: "social__btn--behance",
  },
  {
    id: 3,
    to: "mailto:saeheeshin@gmail.com?subject=Portfolio%20Inquries",
    text: "Email",
    className: "social__btn--email",
  },
];

const FooterData = {
  withLove:
    "Made with <span>♥</span> using <strong>Figma</strong> and <strong>React</strong>",
  title: "Thank you!",
  text: "Please don't hesitate to <a href='mailto:saeheeshin@gmail.com?subject=Portfolio%20Inquries'>contact me</a> for new opportunities and discuss what I can do for your company.",
};

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

const MediaQuery = {
  mobile: "screen and (max-width: 600px)",
  desktop: "screen and (min-width: 601px) and (max-width: 9999px)",
};

export {
  NavigationData,
  SocialMediaData,
  FooterData,
  QualificationData,
  MediaQuery,
};
