import React, { useEffect } from "react";
import usePastMeetingEvents from "../hooks/usePastMeetingEvents";
import { GetPastMeetingEventsPDFURls } from "../services/ApiService";
import PastMETable from "./PastMETable";
import PastMEHeaders from "./PastMEHeaders";
import PastMERows from "./PastMERows";
import ReactHtmlParser from "react-html-parser";
import { TableBody } from "@baltimorecounty/dotgov-components";

const PastMeetingEventsPage = (props) => {
  const { informationHeader, informationAbout, calendarName, type } =
    window.pastmeetings;
  const [{ pastMeetingEvents = [], hasError, isLoading }] =
    usePastMeetingEvents(calendarName, type);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { records = [] } = pastMeetingEvents;

  const UpdatePDFUrl = () => {
    records.forEach(async (element) => {
      var div = document.createElement("div");
      div.innerHTML = element.description;

      var object = div.firstChild;
      var urls = object.getElementsByTagName("a");

      for (var i = 0; i < urls.length; i++) {
        if (urls[i].hasAttribute("objectid")) {
          var objectID = urls[i].getAttribute("objectid");
          var data = await GetPastMeetingEventsPDFURls(objectID);

          const { records } = data;

          urls[i].href =
            "https://resources.baltimorecountymd.gov" + records[0].url;
        }
      }

      element.description = object.outerHTML;
    });
  };

  UpdatePDFUrl();

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
            <PastMEHeaders calendarName={calendarName} />
            <TableBody>
              <PastMERows data={records} calendarName={calendarName} />
            </TableBody>
          </PastMETable>
        </div>
      )}
    </div>
  );
};

export default PastMeetingEventsPage;

<div>
  <p>
    <a href="https://baltimorecountymd.webex.com/mw3300/mywebex/default.do?nomenu=true&amp;siteurl=baltimorecountymd&amp;service=6&amp;rnd=0.22994310894052072&amp;main_url=https%3A%2F%2Fbaltimorecountymd.webex.com%2Fec3300%2Feventcenter%2Fevent%2FeventAction.do%3FtheAction%3Ddetail%26%26%26EMK%3D4832534b00000004af2448288ed11bc3ae48dd1d28c309b19900892206cfa9903f63f863042d3545%26siteurl%3Dbaltimorecountymd%26confViewID%3D176460899455869637%26encryptTicket%3DSDJTSwAAAAQDjpFdBWfoXzYEqeBgCsfVWGDKR1xwFxNnoY5Ca9m1mg2%26">
      Join the virtual Webex meeting
    </a>
    .
  </p>
  <p>
    Join the meeting by phone. Call 1-415-655-0001; access code 172 715 6715.
  </p>
  <p>
    <strong>Meeting Documents</strong>
  </p>
  <p>
    <a
      href="https://resources.baltimorecountymd.gov/Documents/Executive/solidwasteworkgroup/agenda201119.pdf"
      objectid="38F7155CE60862783C232026D78FD4A4"
    >
      Agenda
    </a>
    &nbsp;(PDF)
  </p>
</div>;
