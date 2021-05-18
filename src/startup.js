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

const apiPath = `api/hub/structuredContent/Events?filterdate=${InitializeDateValues()}`;
const apiFilePath = `api/hub/structuredContent/Events/FileUrl`;

const localApiRoot = `http://localhost:54727/${apiPath}`;
const testApiRoot = `https://testservices.baltimorecountymd.gov/${apiPath}`;
const prodApiRoot = `https://services.baltimorecountymd.gov/${apiPath}`;

const localApiFileRoot = `http://localhost:54727/${apiFilePath}`;
const testApiFileRoot = `https://testservices.baltimorecountymd.gov/${apiFilePath}`;
const prodApiFileRoot = `https://services.baltimorecountymd.gov/${apiFilePath}`;

/**
 * Run Startup Code
 */
const Run = () => {
  const configValues = {
    local: {
      apiRoot: localApiRoot,
      apiFileRoot: localApiFileRoot,
    },
    development: {
      apiRoot: testApiRoot,
      apiFileRoot: testApiFileRoot,
    },
    staging: {
      apiRoot: testApiRoot,
      apiFileRoot: testApiFileRoot,
    },
    production: {
      apiRoot: prodApiRoot,
      apiFileRoot: prodApiFileRoot,
    },
  };

  setConfig(configValues);
};

export { Run };
