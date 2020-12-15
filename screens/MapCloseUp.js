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
import useLocation from "../hooks/useLocation";
import LakeCard1 from "../components/LakeCard1";
import { Marker } from "react-native-maps";

const initialRegion = {
  latitude: 37.72825,
  longitude: -122.4324,
  latitudeDelta: 0.25,
  longitudeDelta: 0.15
};

export default function Map({ navigation }) {
  console.log("test", lakePointsApi.getLakePoints());
  const mapMarkers = [];

  const geoLocation = useLocation();
  const [lakes, setLakes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(geoLocation);
  const [markers, setMarker] = useState([]);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    loadPoints();
    loadLakesInit();
    if (global.location) {
      console.log("global location", global.location);
      const a = zeroOffset();
      const b = setLakes([]);
      const c = loadLakesInit();
    }

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

  const loadLakesInit = async () => {
    console.log("INIT getting lakes");
    const response = await lakesApi
      .getLakes(0, limit)
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
    console.log("Incrment Offset");
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
        onPress={() => {
          navigation.navigate("LakeInfo", {
            itemId: point.siteid
          });
        }}
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
    </Container>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
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
