import client from "./client";
import useLocation from "../hooks/useLocation";

const endpoint = "/get.php?action=get_lakes";

export const getLakes = (offset, limit, filter = "") => {
  console.log("GetLakes Location = ", global.location);

  if (!limit) {
    limit = 10;
  }
  if (!offset) {
    offset = 0;
  }
  // console.log("geolocation lakes.js", geoLocation);
  let loc = "";
  if (global.location) {
    loc =
      "&lat=" +
      global.location.coords.latitude +
      "&lng=" +
      global.location.coords.longitude;
  }

  console.log("filter len", filter.length);
  if (filter.length == 0) {
    filter = "";
  } else {
    loc = "";
  }

  const endpoint_final =
    endpoint +
    "&offset=" +
    offset +
    "&limit=" +
    limit +
    "&filter=" +
    filter +
    loc;

  console.log("Endpoint=", endpoint_final);
  return client.get(endpoint_final);
};

export default {
  getLakes
};
