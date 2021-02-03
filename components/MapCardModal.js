import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActionSheetIOS,
  ToastAndroid,
  AlertIOS,
  View,
  Image,
  Text,
  Modal
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/EvilIcons";
import { Button, Toast } from "native-base";
import SignInAPI from "../api/signIn";
import { useNavigation } from "@react-navigation/native";

function MapCardModal(props) {
  const [initializedToken, setInitializedToken] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (global.token !== null) {
      setInitializedToken(true);
    }

    return () => {
      //cleanup
    };
  }, []);

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
          <Text numberOfLines={2} style={styles.rockportReservoir}>
            {props.title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Button
              rounded
              style={{
                marginTop: "5%",
                marginRight: "auto",
                marginLeft: "auto"
              }}
              onPress={() => {
                navigation.navigate("IceDepthMapScreen", {
                  lat: props.lat,
                  lng: props.lng,
                  siteid: props.siteid,
                  name: props.title
                });
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  paddingLeft: "3%",
                  paddingRight: "3%"
                }}
              >
                Go To Lake Map
              </Text>
            </Button>
            <Button
              rounded
              style={{
                marginTop: "5%",
                marginRight: "auto",
                marginLeft: "auto"
              }}
              onPress={() => {
                navigation.navigate("LakeInfo", {
                  itemId: props.siteid,
                  fav: props.fav
                });
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  paddingLeft: "3%",
                  paddingRight: "3%"
                }}
              >
                Go To Lake Page
              </Text>
            </Button>
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
    fontSize: 19,
    textAlign: "center",
    marginTop: "5%",
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

export default MapCardModal;
