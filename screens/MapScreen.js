import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Text,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import styled from "styled-components";
import MapView from "react-native-map-clustering";
import React, { useState, useEffect } from "react";
import lakesApi from "../api/lakes";
import lakePointsApi from "../api/lakePoints";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import LakeCard1 from "../components/LakeCard1";
import { Marker } from "react-native-maps";

export default function Map({ navigation }) {
  console.log("test", lakePointsApi.getLakePoints());
  const mapMarkers = [];

  const [lakes, setLakes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [markers, setMarker] = useState([]);
  const [points, setPoints] = useState([]);
  const initialRegion = {
    latitude: 37.72825,
    longitude: -122.4324,
    latitudeDelta: 0.25,
    longitudeDelta: 0.15
  };
  useEffect(() => {
    console.log("geolocation map screen");
    loadPoints();
    loadLakes();

    return () => {
      //cleanup
    };
  }, []);

  const limit = 20;

  const loadLakes = async () => {
    console.log("getting lakes");
    const response = await lakesApi
      .getLakes(offset, limit)
      .then(res => {
        console.log("got data");
        let newLakes = res.data;
        setLakes(lakes => lakes.concat(newLakes));
      })
      .then(r => {
        countOffset();
      });
  };

  var lastFilter = "";
  var filterOffset = 0;

  const loadLakesSearch = async filter => {
    console.log("Filter getting lakes");
    if (filter != lastFilter) {
      lastFilter = filter;
      filterOffset = 0;
      setLakes([]);
    } else {
      filterOffset = filterOffset + limit;
    }
    const response = await lakesApi
      .getLakes(filterOffset, limit, filter)
      .then(res => {
        console.log("got data");
        let newLakes = res.data;
        setLakes(lakes => lakes.concat(newLakes));
      })
      .then(r => {
        countOffset();
      });
  };
  const countOffset = async () => {
    setOffset(offset => offset + limit);
    console.log("Incrment Offset", offset);
  };

  const zeroOffset = num =>
    new Promise((resolve, reject) => {
      setOffset(0);
      console.log("zero offset");
    });
  const loadPoints = async () => {
    console.log("getting lake Points");
    return (response = await lakePointsApi.getLakePoints().then(res => {
      console.log("got Points");
      //let points = res.data;
      setPoints(res.data);
      return;
      //setState({ points: points });

      //points.map(point => {
      //  console.log("LAT", point.lat);
      //});
    }));
  };
  const mapMarkersOne = () => {
    return points.map(point => (
      <Marker
        key={point.siteid}
        coordinate={{ latitude: point.lat, longitude: point.lon }}
        title={point.name}
        onPress={() => markerClicked(point.name)}
      ></Marker>
    ));
  };

  const markerClicked = name => {
    console.log("marker clicked", name);
    const filter = name;
    loadLakesSearch(filter);
    console.log("marker clicked mapName", filter);
  };

  return (
    <Container>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {mapMarkersOne()}
      </MapView>

      <TextInput
        style={{ height: 40 }}
        onChangeText={text => loadLakesSearch(text)}
        placeholder="Search Lakes"
      ></TextInput>
      <FlatList
        data={lakes}
        keyExtractor={lake => lake.siteid.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LakeInfo", {
                  itemId: item.siteid
                });
              }}
            >
              <ScrollView>
                <LakeCard1
                  rating="80"
                  siteid={item.siteid}
                  title={item.name}
                  distance={item.distance}
                  img={item.imgUrl}
                  webcams={item.activeCameras}
                  airHigh={parseInt(item.highTemp)}
                  airLow={parseInt(item.lowTemp)}
                  windHigh={parseInt(item.avgWind)}
                  windGust={parseInt(item.avgWindGust)}
                  weatherSummary={item.weatherSummary}
                  waterTemp={parseInt(item.waterTemp)}
                ></LakeCard1>
              </ScrollView>
            </TouchableOpacity>
          </View>
        )}
        onEndReached={loadLakes}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "70%"
  }
});

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Container = styled.View`
  background: white;
  flex: 1;
`;
const Title = styled.Text`
  color: red;
  font-size: 25px;
`;
