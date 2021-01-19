import React from "react";
import styled from "styled-components";
import { Button, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Card = props => (
  <ScrollView
    horizontal={true}
    style={{ height: 150, width: 95 }}
    showsHorizontalScrollIndicator={false}
  >
    <Container>
      <Content>
        <Row>
          <RoundContainer>
            <Hours>
              {props.hour} {props.ampm}
            </Hours>
            <Border></Border>
            <Ionicons
              name="md-arrow-down"
              style={{
                transform: [{ rotate: props.bearing + "deg" }],
                textAlign: "center"
              }}
              size={28}
              color="deepskyblue"
            />
            <NumberText>{props.windSpeed} MPH</NumberText>
          </RoundContainer>
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

const Content = styled.View`
  flex-direction: column;
  display: flex;
  height: 100%;
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
  padding-left: 15%;
  margin-top: 15px;
  padding: 8px;
  border-radius: 20;
  background: rgba(255, 255, 255, 0.3);
`;
const Border = styled.View`
  border: 1px gray solid;
`;
const Row = styled.View``;
