import { Config } from "@baltimorecounty/javascript-utilities";
import Fetch from "./Fetch";
const { getValue } = Config;

/**
 *  Get suggestions for a given address query
 * @param {string} query partial address
 */
const GetPastMeetingEventsPDFURls = async (query) => {
  const { records = [] } = await Fetch("pdfurl", {
    endpoint: getValue("apiFileRoot"),
    queryString: `?objectid=${query}`,
  });
  return records[0].url;
};

export default GetPastMeetingEventsPDFURls;
