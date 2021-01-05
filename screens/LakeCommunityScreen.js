// ./screens/LakeInfo.js
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Share,
  Dimensions
} from "react-native";
import styled from "styled-components";
import BottomCard from "../components/LakeDataCard";
import MoreDataCard from "../components/LakeInfoPageMoreData";

import DescriptionCard from "../components/DescriptionCard";
import TopCard from "../components/LakeInfoTopCard";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import ForecastCard from "../components/forecastChart";
import DailyForecast from "../components/card";
import HeatCard from "../components/heatMap";

import { Video } from "expo-av";
import Icon from "react-native-vector-icons/EvilIcons";
import { Button } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import { Card, CardItem, Textarea } from "native-base";

const LakeCommunity = ({ route, navigation }) => {
  const { siteid } = route.params;
  const { name } = route.params;

  console.log("siteid community post page", siteid);
  //Calling on page open
  useEffect(() => {
    return () => {
      //cleanup
    };
  }, []);

  //Sharing Lake Information Via Socail, text, email platforms
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          lakeData.name +
          "\n" +
          "Water Temperature:  " +
          lakeData.waterTemp +
          "°  \n" +
          "Air Temperature: " +
          lakeData.airTemp +
          "°"
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView>
      <View>
        {/* Comunity posts */}
        <Div>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LakePostScreen", {
                siteid: siteid,
                name: name
              });
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 5 }}>
                <Header>Create Post </Header>
              </View>
              <View style={{ flex: 1, marginTop: 19 }}>
                <EvilIcons name="plus" size={36} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </Div>
        <View style={{ flex: 1 }}>
          <Card>
            <CardItem header bordered>
              <Text style={{ fontSize: 22, color: "black" }}>
                Dillen Erb - 1/5/2021
              </Text>
            </CardItem>
            <CardItem bordered>
              <Text style={{ fontSize: 16 }}>
                NativeBase is a free and open source framework that enable
                developers to build high-quality mobile apps using React Native
                iOS and Android apps with a fusion of ES6.
              </Text>
            </CardItem>
          </Card>
          <SocialPostDiv>
            <Button
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 10
              }}
              info
            >
              <Text style={{ color: "white", margin: 5, fontSize: 20 }}>
                More Posts
              </Text>
            </Button>
          </SocialPostDiv>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  icon: {
    fontSize: 35,
    height: 30,
    width: 30,
    color: "white"
  },
  iconRed: {
    fontSize: 35,
    height: 30,
    width: 30,
    color: "red"
  },
  containerOne: {
    width: 300,
    height: 300
  },
  containerVideo: {
    width: 500,
    height: 300
  },
  container: {
    borderColor: "gray",
    height: 110,
    marginLeft: 30
  },
  listDaily: {}
});

export default LakeCommunity;
const IconDiv = styled.View`
  margin-top: 20%;
  margin-left: 85%;
`;

const ButtonDiv = styled.View`
  margin-top: 50%;
`;
const GrayDiv = styled.View`
  background: rgba(0, 0, 0, 0.45);
  margin-top: 25%;
  border-top-right-radius: 25px;
`;
const DailyDiv = styled.View`
  background: rgba(0, 0, 0, 0.65);
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  margin-top: 8;
  margin-left: 20;
`;
const DivHeader = styled.View``;
const DivFooter = styled.View`
  background: rgba(0, 0, 0, 0.45);
  height: 40;
  border-bottom-left-radius: 25px;
`;

const Div = styled.View`
  background: white;
  padding-bottom: 5%;
  border: 1px solid black;
  margin-top: 5%;
`;
const ButtonRow = styled.View`
  flex-direction: row;
`;
const ButtonCol = styled.View`
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 15;
  padding-top: 15;
`;
const HeaderCol = styled.View`
  flex: 2;
`;

const Header = styled.Text`
  color: black;
  font-size: 25px;
  padding-left: 4%;
  padding-top: 4%;
  padding-right: 4%;
  font-weight: bold;
`;
const UpdatedTxtIMG = styled.Text`
  color: lightcoral;
  font-size: 18px;
  padding: 4%;
`;
const HeaderToday = styled.Text`
  color: white;
  font-size: 24px;
  padding: 4%;
`;
const Post = styled.Text`
  color: white;
  font-size: 24px;
`;
const SocialPostDiv = styled.View``;
