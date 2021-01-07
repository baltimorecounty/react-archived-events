import React from "react";
import {
  TableHead,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";

const PastMEHeaders = (props) => {
  return (
    <TableHead>
      <TableRow className="eatshit">
        <TableHeadCell key="StatusHeader">Date</TableHeadCell>
        <TableHeadCell key="AgencyHeader">Name</TableHeadCell>
        <TableHeadCell key="InformationHeader">Details</TableHeadCell>
      </TableRow>
    </TableHead>
  );
};

export default PastMEHeaders;
