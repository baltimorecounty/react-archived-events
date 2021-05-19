import { useEffect, useState } from "react";
import { GetPastMeetingEventsPDFURls } from "../services/ApiService";

const useFileURL = (objectid) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [eventURL, setEventURL] = useState([]);

  useEffect(() => {
    GetPastMeetingEventsPDFURls(objectid)
      .then((response) => {
        const { records } = response;
        setEventURL(records[0].url);
      })
      .catch(() => {
        setHasError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [objectid]);
  return [
    {
      eventURL,
      hasError,
      isLoading,
    },
  ];
};

export default useFileURL;
