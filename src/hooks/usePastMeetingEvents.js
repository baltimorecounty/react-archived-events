import { useEffect, useState } from "react";
import {
  GetPastMeetingEvents,
  GetPastMeetingEventsPDFURls,
} from "../services/ApiService";

const usePastMeetingEvents = (calendarName, type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [newPastMeetingEvents, setNewPastMeetingEvents] = useState([]);
  const [pastMeetingEvents, setPastMeetingEvents] = useState([]);

  useEffect(() => {
    GetPastMeetingEvents(calendarName, type)
      .then((response) => {
        const { records } = response;
        let newData = [...records];

        newData.forEach(async (item) => {
          if (item.description.includes("objectid")) {
            var div = document.createElement("div");
            div.innerHTML = item.description;

            var object = div.firstChild;
            var urls = object.getElementsByTagName("a");

            for (var i = 0; i < urls.length; i++) {
              if (urls[i].hasAttribute("objectid")) {
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
          }
        });

        setNewPastMeetingEvents(newData);
      })
      .catch(() => {
        setHasError(false);
      })
      .finally(() => {
        setIsLoading(false);
        setPastMeetingEvents(newPastMeetingEvents);
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
