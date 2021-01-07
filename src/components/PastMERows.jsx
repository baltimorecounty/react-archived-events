import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";
import ReactHtmlParser from "react-html-parser";

const PastMERows = (props) => {
  const { data } = props;

  const recordsToDisplay = data.filter(
    ({ name }) => name !== "Baltimore County Government"
  );

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return recordsToDisplay.map((item, i) => (
    <TableRow key={`tr-${i}`}>
      <TableCell key={`tdInfo-${i}`}>
        <div>
          {new Date(item.startDate.split("T")[0]).toLocaleDateString(
            undefined,
            options
          )}
        </div>
      </TableCell>
      <TableCell key={`tdStatus-${i}`}>
        <p>
          <a href={item.url}>{item.name} </a>
        </p>
      </TableCell>
      <TableCell key={`tdURL-${i}`}>
        <p>{ReactHtmlParser(item.description)}</p>
      </TableCell>
    </TableRow>
  ));
};

export default PastMERows;
