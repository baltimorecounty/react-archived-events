import React, { useEffect } from "react";
import usePastMeetingEvents from "../hooks/usePastMeetingEvents";
import PastMETable from "./PastMETable";
import PastMEHeaders from "./PastMEHeaders";
import PastMERows from "./PastMERows";
import ReactHtmlParser from "react-html-parser";
import { TableBody } from "@baltimorecounty/dotgov-components";

const PastMeetingEventsPage = (props) => {
  const {
    informationHeader,
    informationAbout,
    calendarName,
    type,
  } = window.pastmeetings;
  const [
    { pastMeetingEvents = [], hasError, isLoading },
  ] = usePastMeetingEvents(calendarName, type);

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
      {isLoading ? (
        <div>
          <p>{`Loading Past Meeting and Events Information...`}</p>{" "}
        </div>
      ) : (
        <div>
          {ReactHtmlParser(informationHeader)}
          {ReactHtmlParser(informationAbout)}
          <PastMETable id="responsive-main-table" className="display">
            <PastMEHeaders calendarName={calendarName}/>
            <TableBody>
              <PastMERows data={records} calendarName={calendarName}/>
            </TableBody>
          </PastMETable>
        </div>
      )}
    </div>
  );
};

export default PastMeetingEventsPage;
