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
import WindDirectionForecast from "./windDirectionHourlyForecast";
function SegmentNavigation(props) {
  const navigation = useNavigation();
  let hourIcon = "";
  let windDirection = "";
  let windDirectionIcon = "";
  const [show, setShow] = useState(true);

  useEffect(() => {
    return () => {
      //cleanup
    };
  }, []);
  const changeSegmentAir = async () => {
    setShow(true);
  };
  const changeSegmentWind = async () => {
    setShow(false);
  };
  const chooseIcon = async icon => {
    if (icon == "partly-cloudy-day") {
      hourIcon = "md-cloud";
      return;
    } else if (icon == "clear-day") {
      hourIcon = "md-sunny";
      return;
    } else if (icon == "cloudy") {
      hourIcon = "md-cloud";
      return;
    } else if (icon == "partly-cloudy-night") {
      hourIcon = "md-cloudy-night";
      return;
    } else if (icon == "rainy") {
      hourIcon = "md-rainy-outline";
      return;
    } else if (icon == "snowy") {
      hourIcon = "md-thunderstorm-outline";
      return;
    }
  };

  const getWindDirection = async deg => {
    if (deg > 11.25 && deg <= 33.75) {
      windDirection = "NNE";
      return "NNE";
    } else if (deg > 33.75 && deg <= 56.25) {
      windDirection = "ENE";

      return "ENE";
    } else if (deg > 56.25 && deg <= 78.75) {
      windDirection = "E";
      return "E";
    } else if (deg > 78.75 && deg <= 101.25) {
      windDirection = "E";
      return "ESE";
    } else if (deg > 101.25 && deg <= 123.75) {
      windDirection = "ESW";
      return "ESW";
    } else if (deg > 123.75 && deg <= 146.25) {
      windDirection = "SE";
      return "SE";
    } else if (deg > 146.25 && deg <= 168.75) {
      windDirection = "SSE";
      return "SSE";
    } else if (deg > 168.75 && deg <= 191.25) {
      windDirection = "S";
      return "S";
    } else if (deg > 191.25 && deg <= 213.75) {
      windDirection = "SSW";
      return "SSW";
    } else if (deg > 213.75 && deg <= 236.25) {
      windDirection = "SW";
      return "SW";
    } else if (deg > 236.25 && deg <= 258.75) {
      windDirection = "WSW";
      return "WSW";
    } else if (deg > 258.75 && deg <= 281.25) {
      windDirection = "W";
      return "W";
    } else if (deg > 281.25 && deg <= 303.75) {
      windDirection = "WNW";
      return "WNW";
    } else if (deg > 303.75 && deg <= 326.25) {
      windDirection = "NW";
      return "NW";
    } else if (deg > 326.25 && deg <= 348.75) {
      windDirection = "NNW";
      return "NNW";
    } else {
      // windDirectionIcon = "md-arrow-down";
      windDirection = "N";
      return "N";
    }
  };
  return (
    <View>
      <>
        {/* Segment Button */}
        {show === false ? (
          <View>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  changeSegmentAir();
                }}
              >
                <Col style={{ flex: 1 }}>
                  <View style={{ backgroundColor: "transparent" }}>
                    <Title>Air Temperature</Title>
                  </View>
                </Col>
              </TouchableOpacity>

              <Col style={{ flex: 1 }}>
                <View
                  style={{ backgroundColor: "cadetblue", borderRadius: 25 }}
                >
                  <Title>Wind Direction</Title>
                </View>
              </Col>
            </Row>
            <DailyWindDiv>
              {/* Hourly Forecast */}
              <FlatList
                horizontal
                data={props.hourly}
                keyExtractor={day => day.time}
                renderItem={({ item }) => (
                  <View style={styles.container}>
                    <WindDirectionForecast
                      hour={item.hour}
                      ampm={item.ampm}
                      windD={windDirection}
                      windSpeed={item.windSpeed}
                      iconWind={windDirectionIcon}
                      bearing={item.windBearing}
                      getIcon={getWindDirection(item.windBearing)}
                    ></WindDirectionForecast>
                  </View>
                )}
              />
            </DailyWindDiv>
          </View>
        ) : (
          <View style={{}}>
            <Row>
              <Col style={{ flex: 1 }}>
                <View
                  style={{ backgroundColor: "cadetblue", borderRadius: 25 }}
                >
                  <Title>Air Temperature</Title>
                </View>
              </Col>
              <TouchableOpacity
                onPress={() => {
                  changeSegmentWind();
                }}
              >
                <Col style={{ flex: 1 }}>
                  <View style={{ backgroundColor: "transparent" }}>
                    <Title>Wind Direction</Title>
                  </View>
                </Col>
              </TouchableOpacity>
            </Row>
            {/* Hourly Forecast */}
            <FlatList
              horizontal
              data={props.hourly}
              keyExtractor={day => day.time}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <ForecastCard
                    hour={item.hour}
                    ampm={item.ampm}
                    airTemp={item.temperature}
                    icon={hourIcon}
                    getIcon={chooseIcon(item.icon)}
                  ></ForecastCard>
                </View>
              )}
            />
          </View>
        )}
      </>
    </View>
  );
}

export default SegmentNavigation;

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
  border: 1px solid white;
`;
const Col = styled.View`
  flex: 1;
  width: 100%;
`;
const Border = styled.View`
  border: 1px gray solid;
`;
const Title = styled.Text`
  color: white;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  font-family: "Montserrat";
  padding-left: 1%;
  padding-right: 1%;
`;
const DailyWindDiv = styled.View`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
`;
