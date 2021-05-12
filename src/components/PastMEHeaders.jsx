import React from "react";
import {
  TableHead,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";

const PastMEHeaders = (props) => {
  const { calendarName } = props;
  return (
    <TableHead>
      <TableRow>
        <TableHeadCell key="StatusHeader" className="order-by">
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
