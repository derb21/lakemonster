import client from "./client";
import SignInAPI from "./signIn";
import * as Device from "expo-device";

import * as Notifications from "expo-notifications";
import * as Linking from "expo-linking";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
const brand = Device.brand;
const modelName = Device.modelName;
const osVersion = Device.osVersion;
const deviceName = Device.deviceName;
// export const registerPushNotification = () => {
//  //Getting Push Token and Setting State setExpoPushToken

//   //When get within radius of lake sending push notification

// };
let expoPushToken = "";

export async function sendPushNotification(info) {
  await console.log("Send PUsh notification message", info);
  const message = {
    to: expoPushToken,
    sound: "default",
    subtitle: "LakeMonster",
    title: info.title,
    body: info.message,
    data: { siteid: info.siteid }
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  });
}
export async function onNotificationClick(info) {}
export async function registerForPushNotificationsAsync() {
  let token;

  if (Constants.isDevice) {
    const {
      status: existingStatus
    } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log("Right expo Push Token", token);
    SecureStore.setItemAsync("expoPushToken", token);
    const pushToken = await SecureStore.getItemAsync("expoPushToken");
    // console.log("Secure store get pushToken app.js", pushToken);
    // if (expoPushToken != token) {
    const response = await SignInAPI.checkIn(
      pushToken,
      brand,
      modelName,
      osVersion,
      deviceName
    );
    // console.log("Check In Response", response);
    // console.log("saved expo token is not the same", expoPushToken + token);

    expoPushToken = token;
    //}
  } else {
    // alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C"
    });
  }

  return token;
}

export default {
  registerForPushNotificationsAsync,
  sendPushNotification,
  onNotificationClick
};
