import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "native-base";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Share
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import SignInAPI from "../api/signIn";
import { useNavigation } from "@react-navigation/native";
import ForecastCard from "./forecastChart";
import HeatCard from "./heatMap";
import { Ionicons } from "@expo/vector-icons";

function SegmentNavigationMaps(props) {
  const navigation = useNavigation();
  const [showImages, setShowImage] = useState(true);

  useEffect(() => {
    return () => {
      //cleanup
    };
  }, []);
  const changeSegmentHeatImage = async () => {
    setShowImage(true);
  };
  const changeSegmentNaturalImage = async () => {
    setShowImage(false);
  };
  return (
    <View>
      <>
        {/* Segment Button */}
        {showImages === false ? (
          <View>
            <ImageSegmentDiv>
              <Title>Lake Images</Title>

              <Row>
                <TouchableOpacity
                  onPress={() => {
                    changeSegmentHeatImage();
                  }}
                >
                  <Col style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "transparent" }}>
                      <TitleImage>Heat Map</TitleImage>
                    </View>
                  </Col>
                </TouchableOpacity>

                <Col style={{ flex: 1 }}>
                  <View
                    style={{ backgroundColor: "cadetblue", borderRadius: 25 }}
                  >
                    <TitleImage>Natural Imagery</TitleImage>
                  </View>
                </Col>
              </Row>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("NaturalImageScreen", {
                    heatMap: props.heatImage,
                    naturalImg: props.naturalImage
                  });
                }}
              >
                <View style={{ flex: 1, padding: 15 }}>
                  <HeatCard image={props.naturalImage} />
                </View>
              </TouchableOpacity>

              <RowBottom>
                <Col>
                  <Ionicons
                    name="md-calendar"
                    style={{
                      marginLeft: "25%"
                    }}
                    size={28}
                    color="cadetblue"
                  />
                </Col>
                <ColMiddle>
                  <Info>Date Taken</Info>
                </ColMiddle>
                <ColEnd>
                  <UpdatedTxtIMG>{props.naturalImageString}</UpdatedTxtIMG>
                </ColEnd>
              </RowBottom>
              <Border></Border>
            </ImageSegmentDiv>
          </View>
        ) : (
          <View>
            <ImageSegmentDiv>
              <Title>Lake Images</Title>

              <Row>
                <Col style={{ flex: 1 }}>
                  <View
                    style={{ backgroundColor: "cadetblue", borderRadius: 25 }}
                  >
                    <TitleImage>Heat Map</TitleImage>
                  </View>
                </Col>
                <TouchableOpacity
                  onPress={() => {
                    changeSegmentNaturalImage();
                  }}
                >
                  <Col style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "transparent" }}>
                      <TitleImage>Natural Image</TitleImage>
                    </View>
                  </Col>
                </TouchableOpacity>
              </Row>
              <DivBar>
                <Image
                  style={{
                    width: "85%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  source={require("../assets/colorbar.png")}
                />
              </DivBar>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HeatMapScreen", {
                    heatMap: props.heatImage,
                    naturalImg: props.naturalImage
                  });
                }}
              >
                <View style={{ flex: 1 }}>
                  <HeatDiv>
                    <HeatCard image={props.heatImage} />
                  </HeatDiv>
                </View>
              </TouchableOpacity>

              <RowBottom>
                <Col>
                  <Ionicons
                    name="md-calendar"
                    style={{
                      marginLeft: "25%"
                    }}
                    size={28}
                    color="cadetblue"
                  />
                </Col>
                <ColMiddle>
                  <Info>Date Taken</Info>
                </ColMiddle>
                <ColEnd>
                  <UpdatedTxtIMG>{props.heatMapString}</UpdatedTxtIMG>
                </ColEnd>
              </RowBottom>
              <BorderTop></BorderTop>

              <RowBottom>
                <Col>
                  <Ionicons
                    name="md-water"
                    style={{
                      marginLeft: "25%"
                    }}
                    size={28}
                    color="cadetblue"
                  />
                </Col>
                <ColMiddleB>
                  <InfoAVG>Average Water Temperature</InfoAVG>
                </ColMiddleB>
                <ColEndB>
                  <AvgWaterTemp>{props.waterTemp} °F</AvgWaterTemp>
                </ColEndB>
              </RowBottom>
              <Border></Border>
            </ImageSegmentDiv>
          </View>
        )}
      </>
    </View>
  );
}

export default SegmentNavigationMaps;

const styles = StyleSheet.create({
  icon: {
    fontSize: 37,

    color: "white",
    marginTop: 9,
    marginLeft: 7
  },
  iconRed: {
    fontSize: 37,
    color: "red",
    marginTop: 9,
    marginLeft: 7
  }
});
const Row = styled.View`
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 2%;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 25px;
  border: 1px solid black;
`;
const Col = styled.View`
  flex: 1;
  width: 100%;
`;
const DivBar = styled.View`
  margin-top: 31%;

  height: 40%;
  width: 100%;
  position: absolute;
`;
const HeatDiv = styled.View`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  margin-top: 24%;
`;
const TextDiv = styled.View`
  margin-left: 5%;
  margin-right: 5%;
`;

const UpdatedTxtIMG = styled.Text`
  color: lightcoral;
  font-size: 16;
  margin-top: 2%;
  text-align: right;
  margin-right: 5%;
  font-family: "MontserratRegular";
`;

const Info = styled.Text`
  color: black;
  font-size: 16;
  margin-top: 6%;
  font-family: "MontserratRegular";
`;
const InfoAVG = styled.Text`
  color: black;
  font-size: 16;
  margin-top: 1%;
  font-family: "MontserratRegular";
`;
const AvgWaterTemp = styled.Text`
  color: black;
  font-size: 16;
  margin-top: 2%;
  text-align: right;
  margin-right: 5%;
  font-family: "MontserratRegular";
`;

const ImageSegmentDiv = styled.View`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  margin: 2%;
`;
const TitleImage = styled.Text`
  color: black;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  font-family: "Montserrat";
  padding-left: 1%;
  padding-right: 1%;
`;
const Title = styled.Text`
  color: black;
  font-size: 22px;
  margin-top: 5%;
  margin-left: 5%;
  font-family: "MontserratRegular";
`;

const Image = styled.Image`
  width: 100%;
  height: 20%;
`;

const RowBottom = styled.View`
  margin-top: 2%;
  flex-direction: row;
  display: flex;
`;

const ColEnd = styled.View`
  flex: 3;
  text-align: right;
`;
const ColEndB = styled.View`
  flex: 1;
  text-align: right;
`;
const ColMiddle = styled.View`
  flex: 2;
  text-align: right;
`;
const ColMiddleB = styled.View`
  flex: 3;
  text-align: right;
`;
const Border = styled.View`
  border: 1px lightgray solid;
  margin-bottom: 5%;
`;
const BorderTop = styled.View`
  margin-top: 1%;
  border: 1px lightgray solid;
`;
