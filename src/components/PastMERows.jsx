import React, { useState } from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";
import ReactHtmlParser from "react-html-parser";
import useFileURL from "../hooks/useFileURL";

const PastMERows = (props) => {
  const { data, calendarName } = props;

  const recordsToDisplay = data.filter(
    ({ name }) => name !== "Baltimore County Government"
  );

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [objectID, setObjectID] = useState([]);
  const [{ eventURL = [] }] = useFileURL(objectID);

  const UpdatePDFUrl = (description) => {
    var div = document.createElement("div");
    div.innerHTML = description;
    var element = div.firstChild;
    var urls = element.getElementsByTagName("a");

    for (var i = 0; i < urls.length; i++) {
      if (urls[i].hasAttribute("objectid")) {
        var objectID = urls[i].getAttribute("objectid");

        setObjectID(objectID);
        urls[i].href = eventURL;
      }
    }

    return ReactHtmlParser(element.outerHTML);
  };

  return recordsToDisplay.map((item, i) => (
    <TableRow key={`tr-${i}`}>
      <TableCell key={`tdInfo-${i}`}>
        {new Intl.DateTimeFormat("en-US", options).format(
          new Date(item.startDate)
        )}
      </TableCell>
      <TableCell key={`tdStatus-${i}`}>
        <a href={item.url}>{item.name} </a>
      </TableCell>
      {calendarName !== "liquorboardevents" ? (
        <TableCell key={`tdURL-${i}`}>
          {UpdatePDFUrl(item.description)}
        </TableCell>
      ) : null}
    </TableRow>
  ));
};

export default PastMERows;
