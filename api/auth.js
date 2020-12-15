import client from "./client";
const endpoint = "/account.php?action=sendVerification";

const login = (email, password) => client.post("/auth", { email, password });
// ` + smsNumber + `&uuid=` + this.globalProvider.device_uuid;

export const getLogin = (smsNumber, uuid) => {
  //console.log("GetLakes Location = ", location);

  const endpoint_final = endpoint + "&smsNumber=" + smsNumber + "&uuid=" + uuid;

  console.log("Endpoint Login=", endpoint_final);
  return client.get(endpoint_final);
};

export default {
  getLogin
};
