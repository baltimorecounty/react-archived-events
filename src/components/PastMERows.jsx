import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";
import ReactHtmlParser from "react-html-parser";


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

 console.log(recordsToDisplay)

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
          {ReactHtmlParser(item.description)}
        </TableCell>
      ) : null}
    </TableRow>
  ));
};

export default PastMERows;
