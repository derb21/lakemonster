import client from "./client";
import * as Device from "expo-device";
import * as Updates from "expo-updates";

const endpoint = "/account.php";

export const sendVerification = smsNumber => {
  //console.log("GetLakes Location = ", location);

  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "sendVerification");
  data.append("smsNumber", smsNumber);

  console.log("Sign In Endpoint=", endpoint_final, data);
  return client.post(endpoint_final, data);
};

export const signIn = (smsNumber, code) => {
  console.log("signin location", global.location.coords.latitude);

  //console.log("GetLakes Location = ", location);
  const deviceId = Expo.Constants.deviceId;
  const platform = Device.brand;
  const version = Device.osVersion;
  const model = Device.modelName;
  const lat = Device.brand;
  const lng = Device.brand;

  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "signin");
  data.append("smsNumber", smsNumber);
  data.append("code", code);
  data.append("uuid", deviceId);
  data.append("lat", global.location.coords.latitude);
  data.append("lng", global.location.coords.longitude);
  data.append("platform", platform);
  data.append("version", version);
  data.append("model", model);

  console.log("Sign In Endpoint=", endpoint_final, data);
  console.log("Sign In user=", global.user);
  console.log("Endpoint Login=", endpoint_final);

  Updates.reloadAsync();
  return client.post(endpoint_final, data);
};

export const getFavorites = () => {
  const deviceId = Expo.Constants.deviceId;

  const endpoint_final = endpoint;

  var data = new FormData();
  data.append("action", "get_user_favorites");
  data.append("uuid", deviceId);
  data.append("lat", global.location.coords.latitude);
  data.append("lng", global.location.coords.longitude);
  console.log("Sign In Endpoint=", endpoint_final, data);
  return client.post(endpoint_final, data);
};
export const setFavorites = () => {
  //console.log("GetLakes Location = ", location);

  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "sendVerification");
  data.append("smsNumber", smsNumber);

  console.log("Sign In Endpoint=", endpoint_final, data);
  return client.post(endpoint_final, data);
};

export default {
  signIn,
  sendVerification,
  getFavorites,
  setFavorites
};
