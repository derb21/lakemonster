import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "native-base";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import SignInAPI from "../api/signIn";
import { useNavigation } from "@react-navigation/native";

function LakeInfoMapBTN(props) {
  const navigation = useNavigation();
  const [initializedToken, setInitializedToken] = useState(false);

  useEffect(() => {
    if (props.token !== null) {
      setInitializedToken(true);
    }
    return () => {
      //cleanup
    };
  }, []);
  const enterLakeData = async () => {
    if (initializedToken == true) {
      navigation.navigate("LakeDataEntry", {
        siteid: props.siteid,
        name: props.name,
        latLake: props.lat,
        lngLake: props.lon
      });
    } else {
      Alert.alert(
        "Not Signed In",
        "Sorry, you are not signed in. To add lake information, please sign in.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("cancel"),
            style: "cancel"
          },
          { text: "Sign In", onPress: () => goToSignIn() }
        ],
        { cancelable: false }
      );
    }
  };

  const goToLakeMap = async () => {
    navigation.navigate("IceDepthMapScreen", {
      iceDepth: props.iceDepth,
      lat: props.lat,
      lng: props.lon,
      siteid: props.siteid,
      name: props.name,
      heatMap: props.heatMap
    });
  };
  const goToSignIn = async () => {
    navigation.navigate("SignUp", {});
  };
  return (
    <View>
      <ButtonRow>
        <ButtonCol>
          <Button
            onPress={() => {
              goToLakeMap();
            }}
            style={{
              marginRight: 10,
              marginLeft: "auto"
            }}
            info
          >
            <Text style={{ color: "white", margin: 5, fontSize: 20 }}>
              View Lake Map
            </Text>
          </Button>
        </ButtonCol>
        <ButtonCol>
          <Button
            onPress={() => {
              enterLakeData();
            }}
            style={{
              marginRight: "auto",
              marginLeft: "auto"
            }}
            info
          >
            <Text style={{ color: "white", margin: 5, fontSize: 20 }}>
              Enter Lake Data
            </Text>
          </Button>
        </ButtonCol>
      </ButtonRow>
    </View>
  );
}

export default LakeInfoMapBTN;

const styles = StyleSheet.create({
  icon: {
    fontSize: 37,

    color: "white",
    marginTop: 9,
    marginLeft: 7
  },
  iconRed: {
    fontSize: 37,
    color: "red",
    marginTop: 9,
    marginLeft: 7
  }
});
const ButtonRow = styled.View`
  flex-direction: row;
`;
const ButtonCol = styled.View`
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 15;
  padding-top: 15;
`;
