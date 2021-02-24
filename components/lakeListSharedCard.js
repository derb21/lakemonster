import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SimpleLineIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

function SharedNavCard(props) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, paddingBottom: 20 }}>
      <View key={props.siteid}>
        <Image
          style={styles.image}
          source={{ uri: "https://vps.lakemon.com/cdn/lakeimg/" + props.img }}
          resizeMode="cover"
        />
        <View
          style={{
            position: "absolute",
            top: 20,
            left: 10
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <SimpleLineIcons size={40} color="white" name={props.iconName} />
            <View style={{ flexDirection: "column", paddingLeft: 6 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",
                  lineHeight: 28
                }}
              >
                {props.title}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  lineHeight: 18
                }}
              >
                {props.description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 165
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    position: "absolute",
    left: 0,
    borderRadius: 15
  },
  rect: {
    top: 0,
    left: 0,
    width: "100%",
    height: 166,
    position: "absolute",
    borderRadius: 15,
    backgroundColor: "rgba(14,14,14,0.47)"
  },
  group: {
    width: 19,
    height: 49,
    marginTop: 17
  },
  ellipse: {
    left: 0,
    width: 49,
    height: 49,
    position: "absolute"
  },

  ellipseStack: {
    width: 49,
    height: 49,
    bottom: -17
  },
  rockportReservoir: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    fontFamily: "MontserratMedium"
  },
  sunny1: {
    //fontFamily: "roboto-regular",
    color: "rgba(235,226,226,1)",
    marginTop: 11,
    fontFamily: "MontserratMedium"
  },

  rockportReservoirColumn: {
    width: 135,
    marginTop: 19,
    marginBottom: 50
  },
  rect2: {
    width: "100%",
    marginLeft: "25%",
    backgroundColor: "rgba(2,2,2,0.50)",
    alignItems: "flex-start"
  },
  icon: {
    fontSize: 35,

    color: "white",
    marginTop: 9,
    marginLeft: 7
  },
  iconRed: {
    fontSize: 35,
    color: "red",
    marginTop: 9,
    marginLeft: 7
  },

  sunny: {
    //fontFamily: "roboto-regular",
    color: "rgba(235,226,226,1)",
    marginTop: 8,
    marginLeft: 2,
    textAlign: "right",
    flexWrap: "wrap",
    fontFamily: "MontserratMedium"
  },
  airTemps: {
    //fontFamily: "roboto-regular",
    color: "rgba(214,208,208,1)",
    marginTop: 9,
    marginLeft: 2,
    fontFamily: "MontserratMedium"
  },
  wind29Mph: {
    //fontFamily: "roboto-regular",
    color: "rgba(243,234,234,1)",
    marginTop: 9,
    marginLeft: 2,
    textAlign: "right",
    fontFamily: "MontserratMedium"
  },
  water7278: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 11,
    marginLeft: 2,
    textAlign: "right",
    fontFamily: "MontserratMedium"
  },
  groupRow: {
    height: 165,
    flexDirection: "row",
    marginTop: 1
  },
  imageStack: {
    width: "100%",
    height: 166
  }
});

export default SharedNavCard;
