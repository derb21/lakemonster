import React from "react";
import styled from "styled-components";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Header, Left, Body, Right, Button, Segment, Text } from "native-base";
import { Drawer } from "native-base";
import { ScrollView } from "react-native";

const Card = props => (
  <Container>
    <BorderTop></BorderTop>

    {/* <Header hasSegment>
      <Body>
        <Segment>
          <Button first active>
            <Text>Information</Text>
          </Button>
          <Button last>
            <Text>Heat Map</Text>
          </Button>
        </Segment>
      </Body>
    </Header> */}
    <Row>
      <Col>
        <InfoTitle>Air Temperature</InfoTitle>
        <Data>{props.airTemp}°F</Data>
      </Col>
      <Col>
        <InfoTitle>Water Temperature</InfoTitle>
        <Data>{props.waterTemp}°F</Data>
      </Col>
    </Row>
    <Border></Border>
    <Row1>
      <Col>
        <InfoTitle>Wind Speed</InfoTitle>
        <Data>{props.windCurrent} MPH</Data>
      </Col>
      <Col>
        <InfoTitle>Humidity</InfoTitle>
        <Data>{props.humidity}%</Data>
      </Col>
    </Row1>
    <Border></Border>
    <Row1>
      <Col>
        <InfoTitle>Sunrise</InfoTitle>
        <Data>{props.sunrise}</Data>
      </Col>
      <Col>
        <InfoTitle>Sunset</InfoTitle>
        <Data>{props.sunset}</Data>
      </Col>
    </Row1>
    <Border></Border>
    <Row1>
      <Col>
        <InfoTitle>Low Temperature</InfoTitle>
        <Data>{props.lowTemp}°F</Data>
      </Col>
      <Col>
        <InfoTitle>High Temperature</InfoTitle>
        <Data>{props.highTemp}°F</Data>
      </Col>
    </Row1>
    <Border></Border>
  </Container>
);

export default Card;

//Whole Card
const Container = styled.View`
  background: white;
  width: 100%;
  margin-top: 10%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
`;

const Row = styled.View`
  margin-left: 5%;
  margin-top: 7%;
  flex-direction: row;
  display: flex;
`;
const Row1 = styled.View`
  margin-left: 5%;
  margin-top: 2%;
  flex-direction: row;
  display: flex;
`;
const Col = styled.View`
  width: 50%;
`;
const Border = styled.View`
  margin: 5%;
  border: 1px gray solid;
`;
const BorderTop = styled.View`
  border: 1px gray solid;
  width: 10%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
`;
const InfoTitle = styled.Text`
  color: gray;
  font-size: 15;
`;
const Data = styled.Text`
  color: black;
  font-size: 25;
  margin-top: 10%;
  margin-left: 7%;
`;

//Background Image
const Image = styled.Image`
  width: 100%;
  height: 15%;
  top: 0;
  left: 0;
`;

//LakeName
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  padding-bottom: 5%;
  margin-left: 20px;
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

const Row2 = styled.View`
  flex: 1;
`;
