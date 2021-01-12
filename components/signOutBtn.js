import React, { useState, useEffect } from "react";
import { StyleSheet, ActionSheetIOS, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/EvilIcons";
import { Font } from "expo";
import { Button, Toast } from "native-base";
import SignInAPI from "../api/signIn";

function signOutBtn(props, { navigation }) {
  useEffect(() => {
    // if (global.show == "true") {
    //   setInitialized(false);
    // }

    return () => {
      //cleanup
    };
  }, []);

  const signOut = async () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Sign Out"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0
      },
      async buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          const response = await SignInAPI.signOut(token);
          console.log("response sign out", response.data);
        }
      }
    );

  return (
    <View>
      <Button
        onPress={() => signOut(props.token)}
        style={{
          marginRight: 10,
          marginLeft: "auto"
        }}
        transparent
      >
        <Text
          style={{ color: "black", margin: 5, paddingLeft: 10, fontSize: 18 }}
        >
          Sign Out
        </Text>
      </Button>
    </View>
  );
}

export default signOutBtn;
