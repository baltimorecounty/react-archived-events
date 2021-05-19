import { useEffect, useState } from "react";
import {
  GetPastMeetingEvents,
  GetPastMeetingEventsPDFURls,
} from "../services/ApiService";

const usePastMeetingEvents = (calendarName, type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pastMeetingEvents, setPastMeetingEvents] = useState([]);

  useEffect(() => {
    GetPastMeetingEvents(calendarName, type)
      .then((response) => {
        const { records } = response;
        console.log(records);
        records.forEach(async(item) => {
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
               
                urls[i].href =
                  "https://resources.baltimorecountymd.gov" + records[0].url;
              }

              item.description = object.outerHTML;
            }
          }
        });

        console.log(records);
        setPastMeetingEvents(records);
      })

      .catch(() => {
        setHasError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [calendarName, type]);
  return [
    {
      pastMeetingEvents,
      hasError,
      isLoading,
    },
  ];
};

export default usePastMeetingEvents;
