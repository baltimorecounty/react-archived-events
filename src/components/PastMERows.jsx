import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";
import ReactHtmlParser from "react-html-parser";
import { GetPastMeetingEventsPDFURls } from "../services/ApiService";

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

  const UpdatePDFUrl = async (description) => {
    var div = document.createElement("div");
    div.innerHTML = description;

    var object = div.firstChild;
    var urls = object.getElementsByTagName("a");

    for (var i = 0; i < urls.length; i++) {
      if (urls[i].hasAttribute("objectid")) {
        var objectID = urls[i].getAttribute("objectid");

        var data = await GetPastMeetingEventsPDFURls(objectID);

        const { records } = data;

        urls[i].href =
          "https://resources.baltimorecountymd.gov" + records[0].url;

        console.log(urls[i].href);
      }
    }

    return ReactHtmlParser(object.outerHTML);
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
