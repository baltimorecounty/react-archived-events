import { useState } from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";
import ReactHtmlParser from "react-html-parser";
import { GetPastMeetingEventsPDFURls } from "../services/ApiService";

const PastMERows = (props) => {
  const { data, calendarName } = props;
  const [eventURL, setEventURL] = useState([]);

  const recordsToDisplay = data.filter(
    ({ name }) => name !== "Baltimore County Government"
  );

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  async function GetNewUrl(objectid) {
    var results = await GetPastMeetingEventsPDFURls(objectid);
    const { records } = results;
    setEventURL(records[0].url);
  }

  const UpdatePDFUrl = (description) => {
    var div = document.createElement("div");
    div.innerHTML = description;
    var element = div.firstChild;
    var urls = element.getElementsByTagName("a");

    for (var i = 0; i < urls.length; i++) {
      if (urls[i].hasAttribute("objectid")) {
        var objectid = urls[i].getAttribute("objectid");

        GetNewUrl(objectid);
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
