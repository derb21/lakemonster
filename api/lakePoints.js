import client from "./client";

const endpoint = "/get.php?action=get_lake_points";

export const getLakePoints = () => {
  //console.log("GetLakes Location = ", location);

  const endpoint_final = endpoint;

  console.log("Endpoint=", endpoint_final);
  return client.get(endpoint_final);
};

export default {
  getLakePoints
};
