import React, { useEffect } from "react";

import usePastMeetingEvents from "../hooks/usePastMeetingEvents";
import PastMETable from "./PastMETable";
import PastMEHeaders from "./PastMEHeaders";
import PastMERows from "./PastMERows";
import ReactHtmlParser from "react-html-parser";
import { TableBody } from "@baltimorecounty/dotgov-components";

const PastMeetingEventsPage = props => {
  const { informationHeader, informationAbout, calendarName } = window.pastmeetings;
  const [
    { pastMeetingEvents = [], hasError, isLoading }
  ] = usePastMeetingEvents(calendarName);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { records = [] } = pastMeetingEvents;
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
          <div className="">
            {isLoading ? (
              <p>{`Loading Past Meeting and Events Information...`}</p>
            ) : (
              <div id="dg_main-content">
                {ReactHtmlParser(informationHeader)}
                {ReactHtmlParser(informationAbout)}
                <PastMETable id="responsive-main-table" className="display">
                  <PastMEHeaders />
                  <TableBody>
                    <PastMERows data={records} />
                  </TableBody>
                </PastMETable>
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
};

export default PastMeetingEventsPage;
