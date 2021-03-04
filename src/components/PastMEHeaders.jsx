import React from "react";
import {
  TableHead,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";

const PastMEHeaders = (props) => {
  return (
    <TableHead>
      <TableRow>
        <TableHeadCell key="StatusHeader" className="order-by">
          Date
        </TableHeadCell>
        <TableHeadCell key="AgencyHeader">Name</TableHeadCell>
        <TableHeadCell key="InformationHeader">Details</TableHeadCell>
      </TableRow>
    </TableHead>
  );
};

export default PastMEHeaders;
