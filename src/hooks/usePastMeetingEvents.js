import { useEffect, useState } from "react";
import { GetPastMeetingEvents } from "../services/ApiService";

const usePastMeetingEvents = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pastMeetingEvents, setPastMeetingEvents] = useState([]);

  useEffect(() => {
    GetPastMeetingEvents()
      .then(response => {
        setPastMeetingEvents(response);
      })
      .catch(() => {
        setHasError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return [
    {
      pastMeetingEvents,
      hasError,
      isLoading
    }
  ];
};

export default usePastMeetingEvents;
