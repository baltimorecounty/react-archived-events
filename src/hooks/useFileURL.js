import { useEffect, useState } from "react";
import { GetPastMeetingEventsPDFURls } from "../services/ApiService";

const useFileURL = (objectid) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [eventURL, setEventURL] = useState([]);

  useEffect(() => {
    GetPastMeetingEventsPDFURls(objectid)
      .then((response) => {
        setEventURL(response);
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
