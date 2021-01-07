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
        <TableHeadCell key="StatusHeader">Name</TableHeadCell>
        <TableHeadCell key="AgencyHeader">Description</TableHeadCell>
        <TableHeadCell key="InformationHeader">Information</TableHeadCell>
      </TableRow>
    </TableHead>
  );
};

export default PastMEHeaders;
