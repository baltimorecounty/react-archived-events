import React, { useEffect } from "react";

import usePastMeetingEvents from "../hooks/usePastMeetingEvents";
// import PrimaryDepartmentClosing from "./PrimaryDepartmentClosing";
import PastMETable from "./PastMETable";
import PastMEHeaders from "./PastMEHeaders";
import PastMERows from "./PastMERows";
// import ClosingsSideBar from "./ClosingsSideBar";
//import ReactHtmlParser from "react-html-parser";

const PastMeetingEventsPage = props => {
  const [
    { pastMeetingEvents = [], hasError, isLoading }
  ] = usePastMeetingEvents();

  // const {
  //   programHeader,
  //   informationHeader,
  //   informationAbout
  // } = window.closings;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { records = [] } = pastMeetingEvents;
  console.log('records:' +  JSON.stringify(records))
  if (hasError) {
    return (
      <p>
        We could not load information for Past Meeting and Events. Please try
        again in a few minutes.
      </p>
    );
  }
  return (
    <div className="dg_internal-template">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            {isLoading ? (
              <p>{`Loading Past Meeting and Events Information...`}</p>
            ) : (
              <div id="dg_main-content">
                {/* <PrimaryDepartmentClosing data={records} />
                {ReactHtmlParser(informationHeader)}
                {ReactHtmlParser(informationAbout)} 
                {ReactHtmlParser(programHeader)}*/}
                <PastMETable id="responsive-main-table" className="display">
                  <PastMEHeaders />
                  <PastMERows data={records} />
                </PastMETable>
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-12">
            {/* <ClosingsSideBar /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastMeetingEventsPage;
