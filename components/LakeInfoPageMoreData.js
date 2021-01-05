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
        <InfoTitle>Pressure</InfoTitle>
        <Data>{props.pressure}</Data>
        {/* <BarHigh >
          <BarHighI></BarHighI>
        </BarHigh>
        <BarLow>
          <BarLowI></BarLowI>
        </BarLow> */}
      </Col>
      <Col>
        <InfoTitle>Wind Gust</InfoTitle>
        <Data>{props.windGust} MPH</Data>
      </Col>
    </Row>
    <Border></Border>

    <Row1>
      <Col>
        <InfoTitle>Wind Low</InfoTitle>
        <Data>{props.windL} MPH</Data>
      </Col>
      <Col>
        <InfoTitle>Wind High</InfoTitle>
        <Data>{props.windHigh} MPH</Data>
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
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

const BarHigh = styled.View`
  background-color: black;
  border-radius: 13px;
  margin-top: 10px;
  width: 50%;
  padding: 3px;
`;
const BarHighI = styled.View`
  background-color: red;
  width: 80%;
  /* Adjust with JavaScript */
  height: 5px;
  border-radius: 10px;
`;
const BarLow = styled.View`
  background-color: black;
  border-radius: 13px;
  margin-top: 10px;
  width: 50%;
  padding: 3px;
`;
const BarLowI = styled.View`
  background-color: red;
  width: 40%;
  /* Adjust with JavaScript */
  height: 5px;
  border-radius: 10px;
`;
