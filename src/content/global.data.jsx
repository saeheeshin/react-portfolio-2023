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

const MediaQuery = {
  mobile: "screen and (max-width: 600px)",
  desktop: "screen and (min-width: 601px) and (max-width: 9999px)",
};

export { NavigationData, SocialMediaData, FooterData, MediaQuery };
