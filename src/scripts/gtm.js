const gtmEvent = (eventTags) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventTags);
};

export default gtmEvent;
