import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Form,
  Item,
  Button,
  Text,
  Textarea,
  Input,
  Picker,
  Label,
  ListItem,
  CheckBox,
  Body
} from "native-base";
import {
  Animated,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  Alert
} from "react-native";
import { Video } from "expo-av";
import RangerAPI from "../api/ranger";
import * as Updates from "expo-updates";
import * as Location from "expo-location";
import MapView, { AnimatedRegion } from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import * as SecureStore from "expo-secure-store";
import { Slider } from "react-native-elements";
import Constants from "expo-constants";
import { white } from "color-name";

const initialRegion = {
  latitude: 37.72825,
  longitude: -122.4324,
  latitudeDelta: 0.25,
  longitudeDelta: 0.15
};
export default function WaterTempDataEntry({ route, navigation }) {
  const [_waterTemp, setWaterTemp] = useState();

  //Props from Lake Data Entry Page
  const { siteid } = route.params;
  const { name } = route.params;
  const { lng } = route.params;
  const { lat } = route.params;

  console.log("props ice dpeth data entry", siteid, name, lng, lat);

  useEffect(() => {}, []);

  const saveWaterTemperature = async () => {
    console.log("Save Water Temperature Function", siteid, _waterTemp);
    const response = await RangerAPI.saveWaterTemp(siteid, _waterTemp);
    console.log("response Save Water Temperature", response.data);
    alert(
      "Thank you for adding a water temperature to " +
        name +
        "." +
        " (" +
        _waterTemp +
        "°F)"
    );
  };

  return (
    <ScrollView style={{ height: "100%" }}>
      <Container>
        <Cover>
          <Image source={require("../assets/overcastDark.png")} />

          <TopDiv>
            <Title>{name}</Title>
            <DarkDiv>
              <InfoTxt>
                Click on the map to add coordinates for your message or alert.
              </InfoTxt>
            </DarkDiv>
          </TopDiv>

          <DarkDiv>
            <Form>
              <Header>Use Slider to add a Water Temperature</Header>
              <SliderDiv>
                <Slider
                  returnKeyLabel={"next"}
                  value={_waterTemp}
                  onValueChange={value => setWaterTemp(value)}
                  maximumValue={90}
                  minimumValue={32}
                  step={1}
                  trackStyle={{
                    height: 10,
                    backgroundColor: "transparent"
                  }}
                  thumbStyle={{
                    height: 20,
                    width: 20,
                    backgroundColor: "white"
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 22
                  }}
                >
                  {_waterTemp} °F
                </Text>
              </SliderDiv>

              {/* <Item success stackedLabel>
                    <Label style={{ color: "white" }}>Water Temperature</Label>
                    <Input
                      placeholder="Add Water Temperature"
                      returnKeyLabel={"next"}
                      onChangeText={text => setWaterTemp(text)}
                      style={{ color: "white" }}
                    />
                  </Item> */}
            </Form>
          </DarkDiv>

          <Button
            onPress={() => {
              saveWaterTemperature();
            }}
            disabled={!_waterTemp}
            style={{
              marginTop: 10
            }}
            info
            full
          >
            <Text style={{ fontSize: 23 }}>Post Water Temperature</Text>
          </Button>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              marginTop: 15
            }}
            info
            full
          >
            <Text style={{ fontSize: 20 }}>Cancel</Text>
          </Button>
        </Cover>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
//Whole Card
const Container = styled.View`
  background: white;
  width: 99%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border: 3px solid white;
`;

const TopDiv = styled.View``;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 14px;
`;
const DarkDiv = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 25px;
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 4%;
  padding-top: 3%;
`;

//Background Image
const Image = styled.Image`
  width: 100%;
  height: 70%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

//LakeName
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 3%;
  margin-left: 3.5%;
  margin-bottom: 1%;
  margin-top: 20%;
  font-family: "MontserratSemiBold";
`;
const Header = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 3%;
  margin-left: 3.5%;
  margin-bottom: 1%;
  margin-top: 5%;
  font-family: "MontserratSemiBold";
`;
const InfoTxt = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  padding-right: 6%;
  margin-left: 20px;
  padding-bottom: 5%;
`;
const SliderDiv = styled.View`
  margin-left: 10%;
  margin-right: 10%;
`;
