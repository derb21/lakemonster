import React from "react";
import styled from "styled-components";
import { Button } from "native-base";
import { Text, View, Share } from "react-native";

function ShareComponent(props, { navigation }) {
  //Sharing Lake Information Via Socail, text, email platforms
  const onShare = async (airTemp, name, waterTemp) => {
    try {
      const result = await Share.share({
        message:
          name +
          "\n" +
          "Water Temperature:  " +
          waterTemp +
          "°  \n" +
          "Air Temperature: " +
          airTemp +
          "°"
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <Button
        onPress={onShare(props.name, props.waterTemp, props.airTemp)}
        style={{
          marginRight: 10,
          marginLeft: "auto"
        }}
        info
      >
        <Text style={{ color: "white", margin: 5, fontSize: 20 }}>Share</Text>
      </Button>
    </View>
  );
}

export default ShareComponent;
