import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import BottomTabNavigator from "./navigation/TabNavigator";
import LoadingScreen from "./screens/LoadingScreen";
import styled from "styled-components/native";
import { Video } from "expo-av";

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    //Getting Location Permission
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      //Settting User Location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("location app.js", location);
      global.location = location;
      setInitialized(false);
    })();
  }, []);

  return (
    <>
      {/* Loading this View While waiting for location to return */}
      {initialized === true ? (
        <View>
          <Video
            source={require("./assets/appVideo.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 600, height: 900, position: "absolute" }}
          />
          <Wrapper>
            <Text
              style={{
                paddingTop: 255,
                textAlign: "center",
                fontSize: 28,
                color: "white"
              }}
            >
              Please Wait
            </Text>
            <Text
              style={{
                paddingTop: 15,
                textAlign: "center",
                fontSize: 24,
                color: "white"
              }}
            >
              while we find lakes near you!
            </Text>
            <ActivityIndicator
              style={{
                paddingTop: 40
              }}
              size="large"
            />
          </Wrapper>
        </View>
      ) : (
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  }
});
export const Wrapper = styled.View`
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`;
