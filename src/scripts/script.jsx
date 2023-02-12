const PageChangeHandler = (SiteName, pageName) => {
  window.scrollTo(0, 0);
  document.title = `${SiteName} | ${pageName}`;
};

export { PageChangeHandler };
