const baseApiHost = process.env.REACT_APP_BASE_API_HOST;
const baseApiVersion = process.env.REACT_APP_BASE_API_VERSION;

const baseApiRoot = "https://" + baseApiHost + "/v" +  baseApiVersion;

export {
  baseApiRoot,
}

