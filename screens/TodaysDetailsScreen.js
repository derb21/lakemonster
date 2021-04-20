//Components
// import TodaysCard from "../components/TodaysDetailsCard";
import AmazonAd from "../components/amazonAd";

//API

// ./screens/LakeInfo.js
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Share,
  Dimensions,
  Alert,
  Image,
  ScrollView
} from "react-native";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import LineChartComponent from "../components/lineChartComponent";

const TodaysDetails = ({ route, navigation }) => {
  const { height } = Dimensions.get("window");
  const ITEM_HEIGHT = height * 0.5;
  const [windB, setWindB] = useState("");
  const [wakeSportW, setWakeSportW] = useState("");
  const [lakeData, setlakeData] = useState(0);

  const { sunset } = route.params;
  const { sunrise } = route.params;
  const { windGust } = route.params;
  const { windCurrent } = route.params;
  const { humidity } = route.params;
  const { precipProb } = route.params;
  const { pressure } = route.params;
  const { windBearing } = route.params;
  const { waterTemp } = route.params;
  const { airTempChartTime } = route.params;
  const { airTempChartData } = route.params;
  const { windHourlyChartData } = route.params;
  const { linkAd } = route.params;
  const { imgAd } = route.params;
  const { titleAd } = route.params;
  const { pastWaterTempData } = route.params;
  const { pastWaterTempTime } = route.params;
  useEffect(() => {
    getWindDirection(windBearing);
    wakeSportsGood();
    return () => {
      //cleanup
    };
  }, []);

  const wakeSportsGood = async () => {
    if ((windCurrent <= 7) & (waterTemp > 70)) {
      console.log("Wake Sport weather Great");
      setWakeSportW("Great");
    } else if ((windCurrent < 18) & (windCurrent > 7) || waterTemp > 62) {
      console.log("Wake Sport weather Fair");
      setWakeSportW("Fair");
    } else if ((windCurrent < 15) & (windCurrent > 7) & (waterTemp > 65)) {
      console.log("Wake Sport weather Good");
      setWakeSportW("Good");
    } else if ((windCurrent <= 30) & (windCurrent > 15) & (waterTemp > 65)) {
      console.log("Wake Sport weather Poor");
      setWakeSportW("Poor");
    } else {
      console.log("Wake Sport weather Poor");
      setWakeSportW("Poor");
    }
  };
  let windDirection = "";
  const getWindDirection = async deg => {
    if (deg > 11.25 && deg <= 33.75) {
      windDirection = "NNE";
      setWindB("NNE");
      return "NNE";
    } else if (deg > 33.75 && deg <= 56.25) {
      windDirection = "ENE";
      setWindB("ENE");

      return "ENE";
    } else if (deg > 56.25 && deg <= 78.75) {
      windDirection = "E";
      setWindB("ENW");

      return "E";
    } else if (deg > 78.75 && deg <= 101.25) {
      windDirection = "E";
      setWindB("E");

      return "ESE";
    } else if (deg > 101.25 && deg <= 123.75) {
      windDirection = "ESW";
      setWindB("ESW");

      return "ESW";
    } else if (deg > 123.75 && deg <= 146.25) {
      windDirection = "SE";
      setWindB("SE");

      return "SE";
    } else if (deg > 146.25 && deg <= 168.75) {
      setWindB("SEE");

      return "SSE";
    } else if (deg > 168.75 && deg <= 191.25) {
      setWindB("S");

      return "S";
    } else if (deg > 191.25 && deg <= 213.75) {
      setWindB("SSW");
      return "SSW";
    } else if (deg > 213.75 && deg <= 236.25) {
      windDirection = "SW";
      setWindB("SW");

      return "SW";
    } else if (deg > 236.25 && deg <= 258.75) {
      windDirection = "WSW";
      setWindB("WSW");

      return "WSW";
    } else if (deg > 258.75 && deg <= 281.25) {
      windDirection = "W";
      setWindB("W");

      return "W";
    } else if (deg > 281.25 && deg <= 303.75) {
      windDirection = "WNW";
      setWindB("WNW");

      return "WNW";
    } else if (deg > 303.75 && deg <= 326.25) {
      windDirection = "NW";
      setWindB("NW");

      return "NW";
    } else if (deg > 326.25 && deg <= 348.75) {
      windDirection = "NNW";
      setWindB("NNW");

      return "NNW";
    } else {
      // windDirectionIcon = "md-arrow-down";
      windDirection = "N";
      setWindB("N");
      return "N";
    }
  };

  return (
    <ScrollView>
      <ImageTop source={require("../assets/overcastDark.png")} />

      <Container>
        <Title>Today's Details</Title>

        <ImgDiv>
          <Image
            style={{
              height: "65%",
              width: "100%",
              marginTop: "2%"
            }}
            source={require("../assets/sunrise.png")}
          />
        </ImgDiv>
        <RowSun>
          <ColSun>
            <Ionicons
              name="md-arrow-up"
              style={{
                paddingRight: "2%"
              }}
              size={20}
              color="red"
            />
            <DataTime>{sunrise}</DataTime>
          </ColSun>
          <ColSun>
            <Ionicons
              name="md-arrow-down"
              style={{
                paddingRight: "3%"
              }}
              size={20}
              color="red"
            />
            <DataTime>{sunset}</DataTime>
          </ColSun>
        </RowSun>

        <InfoDiv>
          <Row>
            <Col>
              <Ionicons
                name="md-speedometer"
                style={{
                  marginLeft: "25%"
                }}
                size={28}
                color="cadetblue"
              />
            </Col>
            <ColMiddle>
              <InfoTitle>Wind</InfoTitle>
            </ColMiddle>
            <ColEnd>
              <Data>{windCurrent} mph</Data>
            </ColEnd>
          </Row>
          <Border></Border>
          <Row>
            <Col>
              <Ionicons
                name="md-water"
                style={{
                  marginLeft: "25%"
                }}
                size={27}
                color="cadetblue"
              />
            </Col>
            <ColMiddle>
              <InfoTitle>Humidity</InfoTitle>
            </ColMiddle>
            <ColEnd>
              <Data>{humidity} %</Data>
            </ColEnd>
          </Row>
          <Border></Border>

          <Row>
            <Col>
              <Ionicons
                name="md-stats-chart"
                style={{
                  marginLeft: "25%"
                }}
                size={28}
                color="cadetblue"
              />
            </Col>
            <ColMiddle>
              <InfoTitle>Pressure</InfoTitle>
            </ColMiddle>
            <ColEnd>
              <Data>{pressure} inHg</Data>
            </ColEnd>
          </Row>
          <Border></Border>

          <Row>
            <Col>
              <Ionicons
                name="md-sunny"
                style={{
                  marginLeft: "25%"
                }}
                size={28}
                color="cadetblue"
              />
            </Col>
            <ColMiddle>
              <InfoTitle>Chance of Rain</InfoTitle>
            </ColMiddle>
            <ColEnd>
              <Data>{precipProb} %</Data>
            </ColEnd>
          </Row>
          <Border></Border>

          <Row>
            <Col>
              <Ionicons
                name="md-compass"
                style={{
                  marginLeft: "25%"
                }}
                size={28}
                color="cadetblue"
              />
            </Col>
            <ColMiddle>
              <InfoTitle>Wind Bearing</InfoTitle>
            </ColMiddle>
            <ColEnd>
              <Data>{windB}</Data>
            </ColEnd>
          </Row>
          <Border></Border>
          <Row>
            <Col>
              <Ionicons
                name="md-speedometer"
                style={{
                  marginLeft: "25%"
                }}
                size={28}
                color="cadetblue"
              />
            </Col>
            <ColMiddle>
              <InfoTitle>Wind Gust</InfoTitle>
            </ColMiddle>
            <ColEnd>
              <Data>{windGust} mph</Data>
            </ColEnd>
          </Row>
          <Border></Border>
          {/* <Row>
        <Col>
          <Ionicons
            name="md-boat"
            style={{
              marginLeft: "25%"
            }}
            size={28}
            color="cadetblue"
          />
        </Col>
        <ColMiddle>
          <InfoTitle>Fishing</InfoTitle>
        </ColMiddle>
        <ColEnd>
          <Data>Good</Data>
        </ColEnd>
      </Row>
      <Border></Border> */}
          <Row>
            <Col>
              <Ionicons
                name="md-boat"
                style={{
                  marginLeft: "25%"
                }}
                size={28}
                color="cadetblue"
              />
            </Col>
            <ColMiddle>
              <InfoTitle>Wake Sports</InfoTitle>
            </ColMiddle>
            <ColEnd>
              <Data>{wakeSportW}</Data>
            </ColEnd>
          </Row>
          <Border></Border>
          <View
            style={{
              flex: 1,
              marginTop: "5%",
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "black",
              marginLeft: "5%",
              marginRight: "5%"
            }}
          >
            <AmazonAd title={titleAd} link={linkAd} img={imgAd}></AmazonAd>
          </View>

          <Title>Charts</Title>

          {/* <View style={{ flex: 1 }}>
            <ChartHeader>Air Temperature (°F)</ChartHeader>
            <ChartDiv></ChartDiv>
            <LineChartComponent
              time={airTempChartTime}
              data={airTempChartData}
            />
          </View> */}
          <View style={{ flex: 1 }}>
            <ChartHeader>Air Temperature (°F)</ChartHeader>
            <ChartDiv></ChartDiv>
            <LineChartComponent
              time={airTempChartTime}
              data={airTempChartData}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "white" }}>
              <ChartHeader>Wind Speed (MPH)</ChartHeader>
              <ChartDiv></ChartDiv>
              <LineChartComponent
                time={airTempChartTime}
                data={windHourlyChartData}
                // windHourlyChartTime
              />
            </View>
          </View>
          <BorderBottom></BorderBottom>
        </InfoDiv>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});

export default TodaysDetails;

const Container = styled.View`
  background: white;
  margin-top: 20%;
  margin-left: 2%;
  margin-right: 2%;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  height: 100%;
`;
const ContainerCharts = styled.View`
  background: white;
  margin-top: 7%;
  margin: 2%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  height: 100%;
`;
const InfoDiv = styled.View`
  bottom: 10%;
  margin-bottom: 30%;
`;
const ImgDiv = styled.View`
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  height: 20%;
`;
const ImageTop = styled.Image`
  position: absolute;
  width: 100%;
  height: 10%;
  border-bottom-right-radius: 25;
  border-bottom-left-radius: 25;
`;

const RowSun = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3%;
  position: absolute;
  margin-top: 50%;
  margin-left: 16%;
`;
const ColSun = styled.View`
  flex-direction: row;
  display: flex;
  padding-left: 7%;
  padding-right: 5%;
`;
const Row = styled.View`
  margin-top: 5%;
  flex-direction: row;
  display: flex;
`;
const Row1 = styled.View`
  flex-direction: row;
  display: flex;
`;
const Col = styled.View`
  flex: 1;
`;
const ColEnd = styled.View`
  flex: 3;
  text-align: right;
`;
const ColMiddle = styled.View`
  flex: 2;
  text-align: right;
`;
const Border = styled.View`
  margin-top: 1%;
  border: 1px lightgray solid;
`;
const BorderBottom = styled.View`
  margin-top: 1%;
  margin-bottom: 30%;

  border: 1px white solid;
`;

const InfoTitle = styled.Text`
  color: black;
  font-size: 16;
  margin-top: 6%;
  font-family: "MontserratRegular";
`;
const Data = styled.Text`
  color: black;
  font-size: 16;
  margin-top: 2%;
  text-align: right;
  margin-right: 5%;
  font-family: "MontserratRegular";
`;
const DataTime = styled.Text`
  color: black;
  font-size: 14px;
  text-align: center;
  margin-right: 5%;
  font-family: "MontserratMedium";
`;
const Title = styled.Text`
  color: black;
  font-size: 26px;
  margin-top: 5%;
  margin-bottom: 2%;
  margin-left: 5%;
  font-family: "MontserratSemiBold";
`;
const ChartHeader = styled.Text`
  color: black;
  font-size: 22px;
  text-align: center;
  padding-top: 2%;
  padding-bottom: 1%;
  font-weight: bold;
  font-family: "Montserrat";
`;
const ChartDiv = styled.View`
  margin-right: 100px;
  margin-left: 100px;
`;
