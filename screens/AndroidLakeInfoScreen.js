import styled from "styled-components";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import React from "react";
//import ImageViewer which will help us to zoom Image
import ImageViewer from "react-native-image-zoom-viewer";
import { white } from "color-name";
import { Props } from "react-native-image-zoom-viewer/built/image-viewer.type";
import Card from "../components/DashboardCard";

export default function LakeFishingReport({ navigation, route }) {
  const { name, siteId } = route.params;

  return (
    <Container>
      <Title>{name}</Title>

      <Header>Fish</Header>
      <Border></Border>
      <Fish>Rainbow Trout</Fish>
      <Fish>Albino Trout</Fish>
      <Fish>Rainbow Trout</Fish>
      <Fish>Rainbow Trout</Fish>
      <Border></Border>

      <Header>Description</Header>
      <Border></Border>
      <Description>
        On Android, This module requires the permissions for approximate and
        exact device location. It also needs the foreground service permission
        to subscribe to location updates, while the app is in use. The
        ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION, and FOREGROUND_SERVICE
        permissions are automatically added.
      </Description>
      <Border></Border>

      <Header>Shop Amazon</Header>
      <Border></Border>

      <ScrollView
        horizontal={true}
        style={{ height: 140 }}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </ScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
});

const cards = [
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
//Whole Card
const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5%;
  text-align: center;
`;
const Header = styled.Text`
  color: black;
  font-size: 24px;
  padding-left: 5%;
`;
const Fish = styled.Text`
  color: black;
  font-size: 20px;
  padding-left: 5%;
`;
const Description = styled.Text`
  color: black;
  font-size: 15px;
  padding: 5px;

  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;

  margin-right: 20px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const Border = styled.View`
  margin: 5%;
  border: 1px gray solid;
`;
