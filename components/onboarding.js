import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  Image,
  Platform,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Body,
  DeckSwiper
} from "native-base";
import SignOutBtn from "../components/signOutBtn";
const cards = [
  {
    image: require("../assets/satelliteOnboarding.png")
  },
  {
    image: require("../assets/lakeMapOnboarding.png")
  },
  {
    image: require("../assets/profileOnboarding.png")
  }
];
function Onboarding(props) {
  const [_deckSwiper, setDeckSwiper] = useState();

  return (
    <Container>
      <DeckSwiper
        style={{}}
        dataSource={cards}
        ref={c => setDeckSwiper(c)}
        renderItem={item => (
          <Image
            style={{
              height: Dimensions.get("window").height,
              width: "100%",
              flex: 1
            }}
            source={item.image}
          />
        )}
      />
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          position: "absolute",
          bottom: "2%",
          left: 0,
          right: 0,
          justifyContent: "space-evenly",
          paddingLeft: 15,
          paddingRight: 15
        }}
      >
        <Button
          style={{ marginRight: "10%" }}
          iconLeft
          info
          onPress={() => _deckSwiper._root.swipeLeft()}
        >
          <Text> Back</Text>
        </Button>

        <Button info iconRight onPress={() => _deckSwiper._root.swipeRight()}>
          <Text> Next</Text>
        </Button>
      </View>
    </Container>
  );
}

const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
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

const InsideTopDiv = styled.View`
  margin-top: 18%;
  width: 85%;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderCardTXT = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 2%;
`;
//Container Information Start
const HeaderCard = styled.View`
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.35);
`;
const HeaderCardContent = styled.View`
  padding: 2px 16px;
  background-color: white;
  border-radius: 15px;
  height: 50%;
`;
const Header = styled.View`
  padding: 2px 16px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.2);
`;
const Title = styled.Text`
  margin-top: 20%;
  padding-left: 5%;
  color: black;
  font-size: 26;
  font-weight: bold;
`;

const TitleOne = styled.Text`
  padding-left: 5%;
  padding-top: 1%;
  color: black;
  font-size: 26;
`;
export default Onboarding;
