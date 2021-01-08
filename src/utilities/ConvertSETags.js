const ConvertSETags = (element) => {
  const replaceSETags = element
    .replace("selink", "a")
    .replace("externallink", "href")
    .replace("seml", "div");

  return replaceSETags;
};

export { ConvertSETags };
