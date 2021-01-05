import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
const Card = props => (
  <Container>
    <Cover>
      <Image source={require("../assets/profileBackground.png")} />

      {/* <Image source={{ uri: props.image }} /> */}
      <Content>
        <InsideTopDiv>
          <BorderTop></BorderTop>

          <Name>
            {firstName} {lastName}
          </Name>
          {/* <Location>Lehi, Utah</Location> */}
          <Border></Border>
        </InsideTopDiv>
        {/* <DateText>
          {props.weekDay}, {props.date}
        </DateText> */}
        <Summary>{props.weatherSummary}</Summary>
      </Content>
    </Cover>
  </Container>
);

export default Card;

//Whole Card

const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
`;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Content = styled.View`
  display: flex;
`;
//Background Image
const Image = styled.Image`
  width: 100%;
  height: 85%;
  position: absolute;
  top: 0;
  left: 0;
`;

//LakeName
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 48%;
  padding-bottom: 2%;
`;
const Summary = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
const BorderTop = styled.View`
  margin: 5%;
  margin-top: 5%;
  border: 1px white solid;
`;
const AirTempText = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  padding-bottom: 5%;
  margin-right: auto;
  margin-left: auto;
`;
const Border = styled.View`
  margin: 5%;
  border: 1px white solid;
`;
const InsideTopDiv = styled.View`
  margin-top: 18%;
  background-color: rgba(0, 0, 0, 0.4);
  width: 85%;
  margin-right: auto;
  margin-left: auto;
`;
const Name = styled.Text`
  font-size: 36px;
  text-align: center;
  padding-bottom: 3%;
  color: white;
  font-family: Verdana;
`;
//Container Information Start
const Row1 = styled.View`
  flex: 1.5;
`;
