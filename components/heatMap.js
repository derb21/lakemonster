import React from "react";
import styled from "styled-components";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Drawer } from "native-base";
import { ScrollView, Linking } from "react-native";

const CardD = props => (
  <Container>
    <Image source={{ uri: props.image }} />
  </Container>
);
const Container = styled.View`
  background: white;
  width: 99%;
  height: 100%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Image = styled.Image`
  width: 100%;
  height: 500;
`;
//Container Information Start

const ContainerData = styled.View`
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.5);
  height: 70%;
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

const Text = styled.Text``;
const TextAir = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 5%;
  font-weight: 600;
  padding-right: 6%;
  margin-left: 20px;
`;
export default CardD;
