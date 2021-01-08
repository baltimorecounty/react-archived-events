const ConvertSETags = (element) => {
  const replaceSETags = element
    .replace("selink", "a")
    .replace("externallink", "href");

  return replaceSETags;
};

export { ConvertSETags };
