import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Card = props => (
  <Container>
    <Cover>
      <Image source={{ uri: props.image }} />
      <Content>
        <Title>{props.name}</Title>
        {/* <DateText>
          {props.weekDay}, {props.date}
        </DateText> */}
        <Summary>{props.weatherSummary}</Summary>
        <AirTempText>{props.airTemp}°F</AirTempText>
      </Content>
    </Cover>
  </Container>
);

export default Card;

//Whole Card
const Container = styled.View`
  background: white;
  width: 100%;
  height: 75%;
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
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

//LakeName
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20%;
  padding-bottom: 1%;
  margin-left: 5%;
`;
const Summary = styled.Text`
  color: gray;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5%;
`;
// const DateText = styled.Text`
//   color: white;
//   font-size: 14px;
//   font-weight: bold;
//   padding-bottom: 5%;
//   margin-right: auto;
//   margin-left: auto;
// `;
const AirTempText = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  padding-bottom: 5%;
  margin-right: auto;
  margin-left: auto;
`;
const WaterDiv = styled.View`
  flex-direction: row;
  padding-left: 8%;
`;
const Distance = styled.Text`
  color: white;
  font-size: 16px;
  padding-bottom: 8%;
  margin-left: 20px;
`;
//Container Information Start
const Row1 = styled.View`
  flex: 1.5;
`;

const Row2 = styled.View`
  flex: 1;
`;

const ContainerData = styled.View`
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  text-align: center;
  align-items: center;
`;
const Div = styled.View``;
const InfoDiv = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  padding: 5%;
`;

const TextWater = styled.Text`
  color: white;
  margin-left: 5%;
  font-size: 22px;
  font-weight: 600;
  padding-right: 6%;
  margin-left: 20px;
`;
const TextAir = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 5%;
  font-weight: 600;
  padding-right: 6%;
  margin-left: 20px;
`;
