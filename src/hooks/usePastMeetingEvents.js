import { useEffect, useState, useRef } from "react";
import {
  GetPastMeetingEvents,
  GetPastMeetingEventsPDFURls,
} from "../services/ApiService";

const usePastMeetingEvents = (calendarName, type) => {
  const newDataCount = useRef(0); //Prevents an infinite loop
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [newPastMeetingEvents, setNewPastMeetingEvents] = useState([]);
  const [pastMeetingEvents, setPastMeetingEvents] = useState([]);

  useEffect(() => {
    GetPastMeetingEvents(calendarName, type)
      .then((response) => {
        if (newDataCount.current < 1) {
          const { records } = response;
          let newData = [...records];

          newData.forEach(async (item) => {
            var div = document.createElement("div");
            div.innerHTML = item.description;

            var object = div.firstChild;
            var urls = object.getElementsByTagName("a");

            for (var i = 0; i < urls.length; i++) {
              if (urls[i].href.indexOf(".pdf") > -1) {
                urls[i].setAttribute("target", "_blank");
              }

              if (urls[i].hasAttribute("objectid")) {
                urls[i].setAttribute("target", "_blank");
                var objectID = urls[i].getAttribute("objectid");
                const response = await GetPastMeetingEventsPDFURls(objectID);
                const { records } = response;

                var urlParts = records[0].url.split("/");
                var urlDomain = "";

                switch (urlParts[1]) {
                  case "Document":
                    urlDomain = "https://resources.baltimorecountymd.gov";
                    break;
                  case "departments":
                    urlDomain = "https://www.baltimorecountymd.gov";
                    break;
                  default:
                    urlDomain = "https://resources.baltimorecountymd.gov";
                }

                urls[i].href = urlDomain + records[0].url;
              }

              item.description = object.outerHTML;
            }
          });
          setNewPastMeetingEvents(newData);
        }
      })
      .then(() => {
        newDataCount.current++; //Once the new data set has been created we dont want this to keep running so we increase by one which shuts down the loop
        setPastMeetingEvents(newPastMeetingEvents);
      })
      .catch(() => {
        setHasError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [calendarName, type, newPastMeetingEvents]);

  return [
    {
      pastMeetingEvents,
      hasError,
      isLoading,
    },
  ];
};

export default usePastMeetingEvents;
