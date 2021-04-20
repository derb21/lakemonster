import client from "./client";

const endpoint = "/get.php?action=get_geofence";

export const getGeofence = () => {
  //console.log("GetLakes Location = ", location);

  //   var token_ = "";
  //   try {
  //     if (global.token.length == 0) {
  //       token_ = " ";
  //     } else {
  //       token_ = "&token=" + global.token;
  //     }
  //   } catch (e) {}

  let loc = "";

  try {
    if (global.location.length) {
      loc = "&lat=" + "38.73703428083179" + "&lng=" + "-123.06756639739656";
    } else {
      loc =
        "&lat=" +
        global.location.coords.latitude +
        "&lng=" +
        global.location.coords.longitude;
    }
  } catch (e) {}
  const endpoint_final = endpoint + loc + "&limit=5";

  //   const endpoint_final = endpoint + token_;

  // const endpoint_final = endpoint;

  console.log("Endpoint=", endpoint_final);
  return client.get(endpoint_final);
};

export default {
  getGeofence
};
