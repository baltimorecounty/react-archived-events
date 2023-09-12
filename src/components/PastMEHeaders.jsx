import React from "react";
import {
  TableHead,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";

const PastMEHeaders = (props) => {
  const { calendarName, order = "" } = props;

  const orderBy = order === "asc" ? "order-by-asc": "order-by"

  return (
    <TableHead>
      <TableRow>
        <TableHeadCell key="StatusHeader" className={orderBy}>
          Date
        </TableHeadCell>
        <TableHeadCell key="AgencyHeader">Name</TableHeadCell>

        {calendarName !== "liquorboardevents" ? (
          <TableHeadCell key="InformationHeader">Details</TableHeadCell>
        ) : null}
      </TableRow>
    </TableHead>
  );
};

export default PastMEHeaders;
