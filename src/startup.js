import { Config } from "@baltimorecounty/javascript-utilities";

const { setConfig } = Config;

const apiPath = "/api/hub/structuredContent/weather?recordsPerPage=1000";
const testApiRoot = `https://testservices.baltimorecountymd.gov${apiPath}`;
const prodApiRoot = `https://services.baltimorecountymd.gov${apiPath}`;

/**
 * Run Startup Code
 */
const Run = () => {
  // HACK - the Config utiltiy does not account for beta.
  // TODO: This will need to be addressed when we get closer to launch
  const localApiRoot =
    window.location.hostname.indexOf("beta") > -1
      ? testApiRoot
      : `https://localhost:44393/api/Events?page=0&recordsPerPage=10` ;//`//localhost:54727/${apiPath}`;

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
