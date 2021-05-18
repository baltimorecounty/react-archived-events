import { Config } from "@baltimorecounty/javascript-utilities";
import axios from "axios";

const { getValue } = Config;

/**
 * Determines if api is up or not
 * @returns true if the api is available
 */
const GetStatus = () =>
  axios
    .get(`${getValue("apiRoot")}/status`)
    .then(({ status }) => status === 200);

/**
 * Get Past Meeting Events Data from Service
 */
const GetPastMeetingEvents = (calendarName = "Countywide", type) =>
  axios
    .get(
      `${getValue(
        "apiRoot"
      )}&calendarName=${calendarName}&type=${type}&RecordsPerPage=1000`
    )
    .then(({ status, data }) => (status === 200 ? data : []));

const GetPastMeetingEventsPDFURls = (
  objectID = "B5815258D5AA3F3472A6C7365BEFD4C2"
) =>
  axios
    .get(`${getValue("apiFileRoot")}?objectID=${objectID}`)

    .then(({ status, data }) => (status === 200 ? data : []));

export { GetStatus, GetPastMeetingEvents, GetPastMeetingEventsPDFURls };
