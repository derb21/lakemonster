import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

const RangerInputCard = props => (
  <ScrollView>
    <Container>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>
              <Text style={{ fontSize: 22, fontFamily: "MontserratMedium" }}>
                {props.name}
              </Text>
              <Text note>{props.time}</Text>
            </Body>
          </Left>
        </CardItem>
        <Border></Border>
        <CardItem>
          <Body>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "MontserratMedium",
                textAlign: "center"
              }}
            >
              Message Type: {props.messageType}
            </Text>

            <Text style={{ fontSize: 17, fontFamily: "MontserratMedium" }}>
              {props.text}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </Container>
  </ScrollView>
);

export default RangerInputCard;

//Whole Card
const Container = styled.View`
  background: transparent;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Row = styled.View`
  flex-direction: row;
  display: flex;
  text-align: center;
`;

const Col = styled.View`
  width: 50%;
`;
const Border = styled.View`
  border: 1px gray solid;
`;
const BorderVal = styled.View`
  border: 1px gray solid;
  margin-left: 15%;
  margin-right: 15%;
`;
