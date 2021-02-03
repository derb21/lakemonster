import client from "./client";
import * as Device from "expo-device";
import * as Updates from "expo-updates";
import * as SecureStore from "expo-secure-store";

const endpoint = "/ranger.php";

export const saveIceDepth = async (siteid, iceDepth, lat, lng) => {
  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "setIceDepth");
  data.append("token", global.token);

  data.append("siteid", siteid);
  data.append("iceDepth", iceDepth);

  data.append("lat", lat);
  data.append("lng", lng);

  console.log("save ice depth Endpoint=", endpoint_final, data);

  return client.post(endpoint_final, data);
};
export const deleteIceDepth = async (siteid, pointid) => {
  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "delIceDepth");
  data.append("token", global.token);

  data.append("siteid", siteid);
  data.append("id", pointid);

  console.log("Delete ice depth Endpoint=", endpoint_final, data);

  return client.post(endpoint_final, data);
};
export const getIceDepth = async siteid => {
  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "getIceDepth");

  var token_ = "";
  try {
    if (global.token.length == 0) {
      data.append("token", token);
    } else {
      data.append("token", global.token);
    }
  } catch (e) {}

  data.append("siteid", siteid);

  console.log("Get ice depth Endpoint=", endpoint_final, data);

  return client.post(endpoint_final, data);
};
export const saveWaterTemp = async (siteid, waterTemp) => {
  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "setWaterTemp");
  data.append("token", global.token);

  data.append("siteid", siteid);
  data.append("waterTemp", waterTemp);

  // Updates.reloadAsync();
  return client.post(endpoint_final, data);
};

export const saveMessage = async (siteid, message, messageType, lat, lng) => {
  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "setMessage");
  data.append("token", global.token);

  data.append("siteid", siteid);
  data.append("message", message);
  data.append("messageType", messageType);
  data.append("lat", lat);
  data.append("lng", lng);
  // Updates.reloadAsync();
  return client.post(endpoint_final, data);
};
export const getMessages = async siteid => {
  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "getMessages");

  try {
    if (global.token.length == 0) {
      data.append("token", token);
    } else {
      data.append("token", global.token);
    }
  } catch (e) {}
  data.append("siteid", siteid);

  console.log("Get Messages Endpoint=", endpoint_final, data);

  return client.post(endpoint_final, data);
};
export const deleteMessage = async (siteid, messageId) => {
  const endpoint_final = endpoint;
  var data = new FormData();
  data.append("action", "delMessage");
  data.append("token", global.token);

  data.append("siteid", siteid);
  data.append("id", messageId);

  console.log("Delete Message Endpoint=", endpoint_final, data);

  return client.post(endpoint_final, data);
};
export default {
  saveIceDepth,
  saveWaterTemp,
  saveMessage,
  deleteIceDepth,
  getIceDepth,
  getMessages,
  deleteMessage
};
