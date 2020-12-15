import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, Dimensions, Text, View } from "react-native";
import styled from "styled-components";
import Card from "../components/DashboardCard";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Animated } from "react-native";
import MapView from "react-native-maps";
import DashboardHeaderCard from "../components/dashboardHeaderCard";
import DeckSwiper from "../components/DeckSwiper";

function Map() {
  return <View></View>;
}
// export default function Home() {
const Home = ({ navigation }) => {
  Map();
  return (
    <View>
      <DashboardHeaderCard></DashboardHeaderCard>
      <TrendingText>Trending Lakes</TrendingText>
      <ScrollView
        horizontal={true}
        style={{ height: 140 }}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </ScrollView>

      <TrendingText>Most Visited</TrendingText>
      <ScrollView
        horizontal={true}
        style={{ height: 140 }}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 200
  }
});
const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings"
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments"
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course"
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!"
  }
];
const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/rainy.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("../assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("../assets/logo-react.png")
  }
];
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Container = styled.View`
  background: lightgray;
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 22%;
`;

const Title = styled.Text`
  color: red;
  font-size: 25px;
`;

const TrendingText = styled.Text`
  color: black;
  font-size: 30px;
  margin-left: 5%;
  margin-top: 3%;
`;
