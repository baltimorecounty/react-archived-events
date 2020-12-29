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
        <TableHeadCell key="BlankHeader"></TableHeadCell>
        <TableHeadCell key="StatusHeader">Name</TableHeadCell>
        <TableHeadCell key="AgencyHeader">Location</TableHeadCell>
        <TableHeadCell key="InformationHeader">Information</TableHeadCell>
      </TableRow>
    </TableHead>
  );
};

export default PastMEHeaders;
