import React, { Component, useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/EvilIcons";
import { Font } from "expo";

function LakeCard1(props) {
  var webcams = "";
  if (props.webcams != 0) {
    webcams = props.webcams + " webcams";
  }
  var checkins = "";
  if (props.checkins) {
    if (props.checkins != 0) {
      checkins = props.checkins + " checkins today";
    }
  }

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <Image
          source={{
            uri: "https://vps.lakemon.com/cdn/lakeimg/" + props.img
          }}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <View style={styles.rect}>
          <View style={styles.groupRow}>
            <View style={styles.group}></View>
            <View style={styles.rockportReservoirColumn}>
              <Text numberOfLines={2} style={styles.rockportReservoir}>
                {props.title}
              </Text>
              <Text numberOfLines={1} style={styles.sunny1}>
                {props.distance} miles
              </Text>
              <Text numberOfLines={1} style={styles.webcam}>
                {webcams}
              </Text>

              <Text numberOfLines={1} style={styles.live1}>
                {checkins}
              </Text>

              {/* <View style={styles.ellipseStack}>
                <Svg viewBox="0 0 49.27 49.27" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(126,211,33,1)"
                    strokeWidth={3}
                    cx={25}
                    cy={25}
                    rx={23}
                    ry={23}
                  ></Ellipse>
                </Svg>
                <Text style={styles.loremIpsum}>{props.rating}</Text>
              </View> */}
            </View>
            <View style={styles.rect2}>
              {/* <Icon name="heart" style={styles.icon}></Icon> */}
              <Text numberOfLines={1} style={styles.sunny}>
                {props.weatherSummary}
              </Text>
              <Text numberOfLines={1} style={styles.airTemps}>
                H: {props.airHigh}° L: {props.airLow}°
              </Text>
              <Text numberOfLines={1} style={styles.wind29Mph}>
                Wind {props.windLow} - {props.windHigh} mph
              </Text>
              <Text numberOfLines={1} style={styles.water7278}>
                Water: {props.waterTemp}°
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
    top: 1,
    width: "100%",
    height: 165,
    position: "absolute",
    left: 0
  },
  rect: {
    top: 0,
    left: 0,
    width: "100%",
    height: 166,
    position: "absolute",
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
  loremIpsum: {
    top: 14,
    left: 14,
    position: "absolute",
    //fontFamily: "roboto-700",
    color: "rgba(252,253,250,1)",
    fontSize: 18
  },
  ellipseStack: {
    width: 49,
    height: 49,
    bottom: 30
  },
  rockportReservoir: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  sunny1: {
    //fontFamily: "roboto-regular",
    color: "rgba(235,226,226,1)",
    marginTop: 11
  },
  webcam: {
    //fontFamily: "roboto-regular",
    color: "rgba(26,243,255,1)",
    marginTop: 9
  },
  live1: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,251,255,1)",
    marginTop: 9
  },
  rockportReservoirColumn: {
    width: 135,
    marginTop: 19,
    marginBottom: 50
  },
  rect2: {
    width: "100%",
    marginLeft: "25%",
    height: 165,
    backgroundColor: "rgba(2,2,2,0.50)",
    alignItems: "flex-start"
  },
  icon: {
    color: "rgba(252,249,249,1)",
    fontSize: 30,
    height: 26,
    width: 30,
    marginTop: 15,
    textAlign: "right"
  },
  sunny: {
    //fontFamily: "roboto-regular",
    color: "rgba(235,226,226,1)",
    marginTop: 8,
    marginLeft: 2,
    textAlign: "right",
    flexWrap: "wrap"
  },
  airTemps: {
    //fontFamily: "roboto-regular",
    color: "rgba(214,208,208,1)",
    marginTop: 9,
    marginLeft: 2
  },
  wind29Mph: {
    //fontFamily: "roboto-regular",
    color: "rgba(243,234,234,1)",
    marginTop: 9,
    marginLeft: 2,
    textAlign: "right"
  },
  water7278: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 11,
    marginLeft: 2,
    textAlign: "right"
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

export default LakeCard1;
