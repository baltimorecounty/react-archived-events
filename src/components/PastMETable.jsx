import React from "react";

import { Table } from "@baltimorecounty/dotgov-components";

const PastMETable = (props) => {
  return (
    <Table id="responsive-main-table" className="display">
      {props.children}
    </Table>
  );
};

export default PastMETable;
