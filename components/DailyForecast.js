import React from "react";
import styled from "styled-components";
import { Button, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Card = props => (
  <Container>
    <Row>
      <Col>
        <Header>{props.dayWeek}</Header>
        <DayContainer>
          <Row1>
            <Col1>
              <Div>
                <NumberText>Air High</NumberText>
                <Data>{props.highTemp}°</Data>
              </Div>
            </Col1>
            <Col1>
              <NumberText>Air Low</NumberText>
              <Data>{props.lowTemp}°</Data>
            </Col1>
          </Row1>
          <Row1>
            <Col1>
              <Div>
                <NumberText>Summary</NumberText>
                <Summary>{props.summary}</Summary>
              </Div>
            </Col1>
          </Row1>
        </DayContainer>
      </Col>
    </Row>
  </Container>
);

export default Card;

//Whole Card
const Container = styled.View`
  background: rgba(0, 0, 0, 0.15);
  width: 100%;
  margin: 2px 2px;
  border: 1px solid black;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Div = styled.View``;
const Summary = styled.Text``;
const Data = styled.Text`
  color: black;
  text-align: center;
`;
const DayContainer = styled.View``;

const Row1 = styled.View`
  flex-direction: row;
  display: flex;
`;
const Col1 = styled.View`
  border: 1px solid black;
`;

const Header = styled.Text`
  color: black;
  font-size: 17px;
  text-align: center;
`;
const Days = styled.Text``;
const NumberText = styled.Text`
  padding: 10px;
  color: gray;
`;

const InfoTitle = styled.Text``;
//Container Information Start
const Col = styled.View``;

const Row = styled.View``;
