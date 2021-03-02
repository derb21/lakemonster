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
import DailyForecast from "../components/card";
import LineChartComponent from "../components/lineChartComponent";
function SegmentNavigationForecast(props) {
  const navigation = useNavigation();
  const [showForecasts, setShowForecasts] = useState(true);
  let windDirection = "";
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  useEffect(() => {
    return () => {
      //cleanup
    };
  }, []);
  const changeSegmentHourly = async () => {
    setShowForecasts(true);
  };
  const changeSegmentDaily = async () => {
    setShowForecasts(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <>
        {/* Segment Button */}
        {showForecasts === false ? (
          <View>
            <ImageSegmentDiv>
              <Title>Forecasts</Title>
              <Row>
                <TouchableOpacity
                  onPress={() => {
                    changeSegmentHourly();
                  }}
                >
                  <Col style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "transparent" }}>
                      <TitleImage>Hourly Forecast</TitleImage>
                    </View>
                  </Col>
                </TouchableOpacity>

                <Col style={{ flex: 1 }}>
                  <View
                    style={{
                      backgroundColor: "cadetblue",
                      borderRadius: 25
                    }}
                  >
                    <TitleImage>Daily Forecast</TitleImage>
                  </View>
                </Col>
              </Row>
              {/* Daily Forecast Charts */}
              {/* <Div>
                    <Header>Daily Forecast</Header>
                  </Div> */}

              <View style={{ flex: 1 }}>
                <View>
                  <ChartHeader>Pressure</ChartHeader>
                  <ChartDiv></ChartDiv>
                  <LineChartComponent
                    time={props.lineTime}
                    data={props.lineData}
                  />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View>
                  <ChartHeader>Air Temperature (°F)</ChartHeader>
                  <ChartDiv></ChartDiv>
                  <LineChartComponent
                    time={props.lineTime}
                    data={props.airTempDaily}
                  />
                </View>
              </View>

              {/* <View style={{ flex: 1 }}>
          <View>
            <ChartHeader>Previous Water Temperature (°F)</ChartHeader>
            <ChartDiv></ChartDiv>
            <LineChartComponent
              data={pastWaterTempData}
              time={pastWaterTempTime}
            />
          </View>
        </View> */}

              <View style={{ flex: 1 }}>
                <FlatList
                  style={styles.listDaily}
                  horizontal
                  data={props.forecast}
                  keyExtractor={day => day.time}
                  renderItem={({ item }) => (
                    <View style={styles.containerOne}>
                      <DailyForecast
                        lowTemp={parseInt(item.temperatureHigh)}
                        highTemp={parseInt(item.temperatureLow)}
                        summary={item.summary}
                        wind={parseInt(item.windSpeed)}
                        windGust={parseInt(item.windGust)}
                        windD={windDirection}
                        bearing={item.windBearing}
                        day={days[new Date(item.time * 1000).getDay()]}
                      ></DailyForecast>
                    </View>
                  )}
                />
              </View>
            </ImageSegmentDiv>
          </View>
        ) : (
          <View>
            <ImageSegmentDiv>
              <Title>Forecasts</Title>

              <Row>
                <Col style={{ flex: 1 }}>
                  <View
                    style={{
                      backgroundColor: "cadetblue",
                      borderRadius: 25
                    }}
                  >
                    <TitleImage>Hourly Forecast</TitleImage>
                  </View>
                </Col>
                <TouchableOpacity
                  onPress={() => {
                    changeSegmentDaily();
                  }}
                >
                  <Col style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "transparent" }}>
                      <TitleImage>Daily Forecast</TitleImage>
                    </View>
                  </Col>
                </TouchableOpacity>
              </Row>

              {/* Hourly Forecast Information */}
              {/* <Div>
                    <Header>Hourly Forecast</Header>
                  </Div> */}

              <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "white" }}>
                  <ChartHeader>Air Temperature (°F)</ChartHeader>
                  <ChartDiv></ChartDiv>
                  <LineChartComponent
                    time={props.airTempChartTime}
                    data={props.airTempChartData}
                  />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "white" }}>
                  <ChartHeader>Wind Speed (MPH)</ChartHeader>
                  <ChartDiv></ChartDiv>
                  <LineChartComponent
                    time={props.airTempChartTime}
                    data={props.windHourlyChartData}
                    // windHourlyChartTime
                  />
                </View>
              </View>
            </ImageSegmentDiv>
          </View>
        )}
      </>
    </View>
  );
}

export default SegmentNavigationForecast;

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
const ChartDiv = styled.View`
  margin-right: 100px;
  margin-left: 100px;
`;

const Header = styled.Text`
  color: white;
  font-size: 25px;
  padding-left: 4%;
  padding-top: 4%;
  padding-right: 4%;
  font-weight: bold;
  font-family: "MontserratMedium";
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
