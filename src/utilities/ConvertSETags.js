const ConvertSETags = (element) => {
  const replaceSETags = element
    .replaceAll(`selink`, "a")
    .replaceAll(`externallink`, "href")
    .replaceAll(`linktype="EXTERNAL"`, "")
    .replaceAll(`newwindow="false"`, "")
    .replaceAll(`showtoolbar="no"`, "")
    .replaceAll(`objectid=""`, "")
    .replaceAll(`class=""`, "")
    .replaceAll(`popupwidth`, "")
    .replaceAll(`popupheight`, "")
    .replaceAll(`title`, "")
    .replaceAll(`localanchor`, "")
    .replaceAll(`linkanchor`, "")
    .replaceAll(`seml`, "div");

  return replaceSETags;
};

export { ConvertSETags };
