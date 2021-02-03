import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActionSheetIOS,
  ToastAndroid,
  AlertIOS,
  View,
  Image,
  Text
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/EvilIcons";
import { Button, Toast } from "native-base";
import SignInAPI from "../api/signIn";
import { white } from "color-name";

function LakeCard1(props, { navigation }) {
  const [heart, setHeart] = useState(false);
  const [initializedToken, setInitializedToken] = useState(false);

  useEffect(() => {
    // if (global.show == "true") {
    //   setInitialized(false);
    // }

    if (global.token !== null) {
      setInitializedToken(true);
    }
    if (props.fav != 0) {
      setHeart(true);
    }
    return () => {
      //cleanup
    };
  }, []);

  //Mark as Favorite
  const markFav = async () => {
    if (initializedToken == true) {
      console.log("Mark Favorite Lake List Screen", props.title);
      setHeart(true);

      const response = await SignInAPI.setFavorites(props.siteid);
      // console.log("response", response.data);
    } else {
      alert(
        "Sorry, you are not signed in. To add a favorite please sign in by going to the Profile Tab."
      );
    }
  };
  const notifyMessage = async msg => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };
  //Remove Favorite
  const favRemove = async () => {
    setHeart(false);
    const response = await SignInAPI.removeFavorites(props.siteid);
    console.log("response", response.data);
  };

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
                {props.title}, {props.state}
              </Text>
              <Text numberOfLines={1} style={styles.sunny1}>
                {props.distance} miles
              </Text>

              <View style={styles.ellipseStack}>
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
                <>
                  {/* Loading this View While waiting for location to return */}
                  {heart === false ? (
                    <Button
                      onPress={markFav}
                      style={{
                        marginRight: 10,
                        marginLeft: "auto"
                      }}
                      transparent
                    >
                      {props.markFav}
                      <Icon name="heart" style={styles.icon}></Icon>
                    </Button>
                  ) : (
                    <Button
                      onPress={favRemove}
                      style={{
                        marginRight: 10,
                        marginLeft: "auto"
                      }}
                      transparent
                    >
                      <Icon name="heart" style={styles.iconRed}></Icon>
                    </Button>
                  )}
                </>
              </View>
            </View>
            <View style={styles.rect2}>
              {/* <Icon name="heart" style={styles.icon}></Icon> */}
              {/* <Button style={{}} onPress={findOnMap}>
                <Text style={{ color: "white" }}>Find On Map</Text>
              </Button> */}
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
    bottom: -17
  },
  rockportReservoir: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "MontserratMedium"
  },
  sunny1: {
    //fontFamily: "roboto-regular",
    color: "rgba(235,226,226,1)",
    marginTop: 11,
    fontFamily: "MontserratMedium"
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

export default LakeCard1;
