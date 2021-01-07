import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";
import ReactHtmlParser from "react-html-parser";

const PastMERows = (props) => {
  const { data } = props;

  const recordsToDisplay = data.filter(
    ({ name }) => name !== "Baltimore County Government"
  );
  return recordsToDisplay.map((item, i) => (
    <TableRow key={`tr-${i}`}>
      <TableCell key={`tdStatus-${i}`}>{item.name}
        <p>{ReactHtmlParser(item.description)}</p>
        </TableCell>
      <TableCell key={`tdURL-${i}`}>
        <p>
          <a href={item.url} title="Get the latest closing information.">
            {item.location}
          </a>
        </p>
      </TableCell>
      <TableCell key={`tdInfo-${i}`}>
        <strong>Date:</strong>
        <div>{item.startDate.split("T")[0]}</div>
        <strong>Time:</strong>
        <div>{item.startDate.split("T")[1]}</div>
      </TableCell>
    </TableRow>
  ));
};

export default PastMERows;
