const pageChangeHandler = (SiteName, pageName) => {
  window.scrollTo(0, 0);
  document.title = `${SiteName} | ${pageName}`;
};

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export { pageChangeHandler, backToTop };
