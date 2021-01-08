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
        <TableHeadCell key="StatusHeader" style={{ width: "25%" }}>
          Date
        </TableHeadCell>
        <TableHeadCell key="AgencyHeader" style={{ width: "25%" }}>
          Name
        </TableHeadCell>
        <TableHeadCell key="InformationHeader" style={{ width: "50%" }}>
          Details
        </TableHeadCell>
      </TableRow>
    </TableHead>
  );
};

export default PastMEHeaders;
