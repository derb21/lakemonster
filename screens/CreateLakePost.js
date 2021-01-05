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
import { Card, CardItem, Form, Textarea } from "native-base";

const LakePost = ({ route, navigation }) => {
  const { siteid } = route.params;
  const { name } = route.params;

  console.log("siteid lake create post page", siteid);
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
          <View style={{ flexDirection: "row" }}>
            <View style={{}}>
              <Header>Hello, you are creating a post for {name}</Header>
              <Header>
                This post will be added to the lake information page for other
                users to see.
              </Header>
            </View>
          </View>
        </Div>
        <View style={{ flex: 1 }}>
          <Card>
            <CardItem bordered>
              <Form>
                <Textarea rowSpan={5} bordered placeholder="Textarea" />
              </Form>
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
                Create Post
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

export default LakePost;

const Div = styled.View`
  background: white;
  padding-bottom: 5%;
  margin-top: 5%;
`;

const Header = styled.Text`
  color: black;
  font-size: 21px;
  padding-left: 4%;
  padding-top: 4%;
  padding-right: 4%;
`;

const SocialPostDiv = styled.View``;
