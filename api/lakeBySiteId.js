import client from "./client";
import useLocation from "../hooks/useLocation";

const endpoint = "/get.php?action=bySiteid";

export const getLakeInfo = siteid => {
  //console.log("GetLakes Location = ", location);

  if (global.location) {
    var loc =
      "&lat=" + global.location.latitude + "&lng=" + global.location.longitude;
  }

  const endpoint_final = endpoint + "&siteid=" + siteid + loc;

  console.log("Endpoint=", endpoint_final);
  return client.get(endpoint_final);
};

export default {
  getLakeInfo
};
