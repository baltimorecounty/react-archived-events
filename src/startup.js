import { Config } from "@baltimorecounty/javascript-utilities";

const { setConfig } = Config;

const InitializeDateValues = () => {
  var dateFormat = require("dateformat");

  const startDate = new Date().setFullYear(new Date().getFullYear() - 2);
  const endDate = new Date().setDate(new Date().getDate() - 1);

  const startDateFormat = dateFormat(startDate, "mm/dd/yyyy");
  const endDateFormat = dateFormat(endDate, "mm/dd/yyyy");

  var fromToDateFormat = startDateFormat + "," + endDateFormat;

  return fromToDateFormat;
};

const apiPath = `api/hub/structuredContent/Events?${InitializeDateValues()}`;
const testApiRoot = `https://testservices.baltimorecountymd.gov/${apiPath}`;
const prodApiRoot = `https://services.baltimorecountymd.gov/${apiPath}`;

/**
 * Run Startup Code
 */
const Run = () => {
  // HACK - the Config utiltiy does not account for beta.
  // TODO: This will need to be addressed when we get closer to launch
  const localApiRoot =
    window.location.hostname.indexOf("beta") > -1
      ? testApiRoot
      : `//localhost:54727/${apiPath}`;

  const configValues = {
    local: {
      apiRoot: localApiRoot,
    },
    development: {
      apiRoot: testApiRoot,
    },
    staging: {
      apiRoot: testApiRoot,
    },
    production: {
      apiRoot: prodApiRoot,
    },
  };

  setConfig(configValues);
};

export { Run };
