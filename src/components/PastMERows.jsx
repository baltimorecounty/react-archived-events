import React from "react";
import {
  TableCell,
  TableRow,
  TableBody,
} from "@baltimorecounty/dotgov-components";
// import ClosingIcon from "./ClosingIcon";

const PastMERows = (props) => {
  const { data } = props;

  const recordsToDisplay = data.filter(
    ({ name }) => name !== "Baltimore County Government"
  );

  return recordsToDisplay.map((item, i) => (
    
    <TableBody key={`tbody-${i}`}>
      <TableRow key={`tr-${i}`}>
        <TableCell key={`tdIcon-${i}`}>
          {/* <ClosingIcon key={`icon-{i}`} type={item.status} size="small" /> */}
        </TableCell>
        <TableCell key={`tdStatus-${i}`}>{item.name}</TableCell>
        <TableCell key={`tdURL-${i}`}>
          <p>
            <a
              href={item.url}
              title="Get the latest closing information."
            >
              {item.keywords}
            </a>
          </p>
        </TableCell>
        <TableCell key={`tdInfo-${i}`}>
          <strong>Date:</strong><div>{item.startDate.split('T')[0]}</div>
          <strong>Time:</strong><div>{item.startDate.split('T')[1]}</div>
          <a href={item.contentItemUrl}
              title="unknown"><div>{item.information}</div></a>

        </TableCell>
      </TableRow>
    </TableBody>
  ));
};

export default PastMERows;
