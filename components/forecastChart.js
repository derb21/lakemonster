import React from "react";
import styled from "styled-components";
import { Button, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Card = props => (
  <ScrollView
    horizontal={true}
    style={{ height: 140, width: 75 }}
    showsHorizontalScrollIndicator={false}
  >
    <Container>
      <DayContainer>
        <Hours>
          {props.hour}
          {props.ampm}
        </Hours>
      </DayContainer>

      <Content>
        <Row>
          <Div>
            <RoundContainer>
              {/* <Ionicons
                name={props.icon}
                style={{ textAlign: "center" }}
                size={28}
                color="blue"
              /> */}
              <NumberText>{props.airTemp}°</NumberText>
            </RoundContainer>
          </Div>
        </Row>
      </Content>
    </Container>
  </ScrollView>
);

export default Card;

//Whole Card
const Container = styled.View`
  background: transparent;
  width: 100%;
  margin: 2px 2px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Div = styled.View`
  flex-direction: column;
  width: 100%;
`;
const DayContainer = styled.View`
  flex-direction: column;
  display: flex;
  padding-left: 4%;
`;

const Content = styled.View`
  flex-direction: column;
  display: flex;
  height: 100%;
  margin-left: 10%;
  padding-top: 10%;
`;

const Hours = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  padding-left: 4%;
`;
const NumberText = styled.Text`
  color: white;
  font-size: 18px;
  padding-top: 15%;
  text-align: center;
`;

//Container Information Start
const RoundContainer = styled.View`
  padding-left: 10%;
`;

const Row = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
