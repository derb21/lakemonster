// ./screens/LakeInfo.js
import {
  View,
  Button,
  Modal,
  Text,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Share
} from "react-native";
import styled from "styled-components";
import BottomCard from "../components/LakeDataCard";
import DescriptionCard from "../components/DescriptionCard";
import TopCard from "../components/LakeInfoTopCard";
import React, { useState, useEffect } from "react";
import lakesApi from "../api/lakeBySiteId";
import { ScrollView } from "react-native";
import ForecastCard from "../components/forecastChart";
import DailyForecast from "../components/card";
import HeatCard from "../components/heatMap";
import LakeImage from "../components/lakeImage";
import { Accordion } from "native-base";
import { Video } from "expo-av";
import * as FileSystem from "expo-file-system";

const LakeInfo = ({ route, navigation }) => {
  const [lakeData, setlakeData] = useState(0);
  const [forecast, setforecast] = useState(0);
  const [hourly, sethourly] = useState(0);
  const [gis, setgis] = useState(0);
  const [camera, setCameras] = useState(0);

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

  //Calling LoadLakes on page open
  useEffect(() => {
    loadLakes();

    return () => {
      //cleanup
    };
  }, []);

  //Load Lake Date Function
  const loadLakes = async () => {
    console.log("getting lakes");
    let siteid = itemId;
    const response = lakesApi.getLakeInfo(siteid).then(res => {
      console.log("got data", res.data[0].details.name);
      //let LakeData = res.data;
      setlakeData(res.data[0].details);
      sethourly(res.data[0].details.hourly[0].data);
      setforecast(res.data[0].details.forecast);
      setgis(res.data[0].gis);
      // setCameras(res.data[0].camera[1]);
      // console.log("cams", res.data[0].camera[1]);
    });
  };

  //Image URL conversion
  const { itemId } = route.params;
  const imageUrl = "https://vps.lakemon.com/cdn/lakeimg/" + lakeData.newImgUrl;
  const heatImage =
    "https://vps.lakemon.com/cdn/gis_img/" +
    lakeData.siteid +
    "/heatmaps/" +
    gis.heat_file;
  const naturalImage =
    "https://vps.lakemon.com/cdn/gis_img/" +
    lakeData.siteid +
    "/natural/" +
    lakeData.siteid +
    "_med.jpg";

  //dailyforecast sunset time convert
  const unixTimestamp = lakeData.Tsunset;
  const sunset = new Date(unixTimestamp * 1000);
  var hours = sunset.getHours();
  var AmOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  var minutes = sunset.getMinutes();
  var finalTimeSunset = hours + ":" + minutes + "0 " + AmOrPm;
  finalTimeSunset; // final time Time - 22:10

  //daily forecast sunrise time convert
  const unixTimestampRise = lakeData.Tsunrise;
  const sunrise = new Date(unixTimestampRise * 1000);
  var hoursRise = sunrise.getHours();
  var AmOrPmRise = hoursRise >= 12 ? "pm" : "am";
  hoursRise = hoursRise % 12 || 12;
  var minutesRise = sunrise.getMinutes();
  var finalTimeSunrise = hoursRise + ":" + minutesRise + " " + AmOrPmRise;
  finalTimeSunrise; // final time Time - 22:10

  //daily time for daily forecast day of week convert
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var i = 0;
  var data = { list: [{ dt: forecast.time }] };

  var dayNum = new Date(data.list[i].dt * 1000).getDay();
  var result = days[dayNum];

  return (
    <ScrollView>
      <View>
        <TopCard
          name={lakeData.name}
          weatherSummary={lakeData.weatherSummary}
          airTemp={lakeData.airTemp}
          image={imageUrl}
        ></TopCard>
        <DivHeader>
          <HeaderToday>Today</HeaderToday>
          <Border></Border>
        </DivHeader>
        <DailyDiv>
          <FlatList
            horizontal
            data={hourly}
            keyExtractor={day => day.time}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <ForecastCard
                  hour={item.hour}
                  ampm={item.ampm}
                  airTemp={item.temperature}
                ></ForecastCard>
              </View>
            )}
          />
          <Border></Border>

          <Button onPress={onShare} title="Share" />
          {/* <Button
            onPress={() => {
              navigation.navigate("LakeFishingReportScreen", {
                name: lakeData.name,
                siteId: lakeData.siteId
              });
            }}
            title="Fishing Report"
          /> */}

          {/* 
          <Button
            onPress={() => {
              navigation.navigate("LakeDataEntry", {});
            }}
            title="Enter Lake Data"
          ></Button> */}

          {/* <Video
            source={{ uri: camera.url }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 300, height: 300 }}
          /> */}
        </DailyDiv>
        <BottomCard
          name={lakeData.name}
          airTemp={parseInt(lakeData.airTemp)}
          waterTemp={parseInt(lakeData.waterTemp)}
          windCurrent={parseInt(lakeData.windCurrent)}
          humidity={lakeData.humidity}
          sunset={finalTimeSunset}
          sunrise={finalTimeSunrise}
          ozone={lakeData.ozone}
          lowTemp={parseInt(lakeData.lowTemp)}
          highTemp={parseInt(lakeData.highTemp)}
          gisImage={heatImage}
        ></BottomCard>

        <View style={{ flex: 1 }}>
          <FlatList
            style={styles.listDaily}
            horizontal
            data={forecast}
            keyExtractor={day => day.time}
            renderItem={({ item }) => (
              <View style={styles.containerOne}>
                <DailyForecast
                  lowTemp={parseInt(item.temperatureHigh)}
                  highTemp={parseInt(item.temperatureLow)}
                  summary={item.summary}
                  wind={parseInt(item.windSpeed)}
                  windGust={parseInt(item.windGust)}
                  day={days[new Date(item.time * 1000).getDay()]}
                ></DailyForecast>
              </View>
            )}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HeatMapScreen", {
              heatMap: heatImage,
              naturalImg: naturalImage
            });
          }}
        >
          <Div>
            <Header>Heat Map</Header>
          </Div>
          <View style={{ flex: 1 }}>
            <HeatCard image={heatImage} />
          </View>
          <Div>
            <Header>Natural Image</Header>
          </Div>
          <View style={{ flex: 1 }}>
            <HeatCard image={naturalImage} />
          </View>
        </TouchableOpacity>
        <Div>
          <Header>Description</Header>
        </Div>
        <View style={{ flex: 1 }}>
          <DescriptionCard
            image={heatImage}
            description={lakeData.description}
            state={lakeData.state}
            city={lakeData.city}
            zip={lakeData.zip}
            website={lakeData.website}
            lat={lakeData.lat}
            lon={lakeData.lon}
          ></DescriptionCard>
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

  container: {
    borderColor: "gray",
    width: 75,
    background: "gray"
  },
  container: {
    borderColor: "gray",
    height: 110
  },
  listDaily: {}
});

export default LakeInfo;

const Name = styled.Text`
  text-align: center;
  font-size: 35px;
`;

const Title = styled.Text``;
const DailyDiv = styled.View`
  background: rgba(0, 0, 0, 0.45);
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
`;
const Border = styled.View`
  border: 1px gray solid;
`;

const Div = styled.View`
  background: white;
`;
const DivHeader = styled.View`
  background: rgba(0, 0, 0, 0.45);
  margin-top: 50%;
`;
const Header = styled.Text`
  color: black;
  font-size: 24px;
  padding: 4%;
`;
const HeaderToday = styled.Text`
  color: white;
  font-size: 24px;
  padding: 4%;
`;
