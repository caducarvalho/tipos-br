const formatLink = (link) => {
  const rawLink = link.replace('https://', '').replace('http://', '');

  return `https://${rawLink}`;
};

export default formatLink;
