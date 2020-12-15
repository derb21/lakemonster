import React from "react";
import styled from "styled-components";
import { Dimensions, Linking, Button } from "react-native";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";

const Card = props => (
  <Container>
    <Cover>
      <Image source={require("../assets/lakeBackground-2.jpg")} />
      <Content>
        <SearchBar
          leftIconContainerStyle={{
            backgroundColor: "transparent"
          }}
          inputStyle={{ backgroundColor: "transparent" }}
          containerStyle={{
            backgroundColor: "transparent",
            width: Dimensions.get("window").width,
            marginTop: 40,
            marginBottom: 20
          }}
          placeholder="Type Here..."
        />
        <Button
          title="Feedback"
          onPress={() => Linking.openURL("https://www.lakemonster.com/contact")}
          accessibilityLabel="Learn more about this purple button"
        />
      </Content>
    </Cover>
  </Container>
);

export default Card;

//Whole Card
const Container = styled.View`
  background: white;
  width: 100%;
  height: 40%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Content = styled.View`
  margin-top: auto;
  margin-bottom: auto;
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
