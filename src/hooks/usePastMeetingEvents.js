import { useEffect, useState } from "react";
import { GetPastMeetingEvents } from "../services/ApiService";

const usePastMeetingEvents = (calendarName) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pastMeetingEvents, setPastMeetingEvents] = useState([]);

  useEffect(() => {
    GetPastMeetingEvents(calendarName)
      .then((response) => {
        setPastMeetingEvents(response);
      })
      .catch(() => {
        setHasError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [calendarName]);
  return [
    {
      pastMeetingEvents,
      hasError,
      isLoading,
    },
  ];
};

export default usePastMeetingEvents;
