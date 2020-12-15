import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  Image
} from "react-native";
import lakesApi from "../api/lakes";
import Screen from "../components/Screen";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import useLocation from "../hooks/useLocation";
import LakeCard1 from "../components/LakeCard1";
import * as StoreReview from "expo-store-review";

export default function LakesSimpleScreen({ navigation }) {
  const [lakes, setLakes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState();

  useEffect(() => {
    console.log("lakeList useEffect", global.location);
    loadLakes();

    return () => {
      //cleanup
    };
  }, []);

  const limit = 20;
  let firstload = true;

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

  return (
    <Screen>
      <View style={styles.searchbar}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput
          style={{ height: 40 }}
          onChangeText={text => loadLakesSearch(text)}
          placeholder="Search Lakes"
        ></TextInput>
      </View>
      <FlatList
        data={lakes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LakeInfo", {
                  itemId: item.siteid
                });
              }}
            >
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
            </TouchableOpacity>
          </View>
        )}
        onEndReached={loadLakes}
        onEndReachedThreshold={0.5}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "lightgray",
    borderTopWidth: 1,
    borderColor: "gray",
    height: 165,
    justifyContent: "center"
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center"
  }
});
