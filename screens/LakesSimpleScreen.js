import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import lakesApi from "../api/lakes";
import Screen from "../components/Screen";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import useLocation from "../hooks/useLocation";
import LakeCard1 from "../components/LakeCard1";

export default function LakesSimpleScreen() {
  const geoLocation = useLocation();
  const [lakes, setLakes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(geoLocation);

  useEffect(() => {
    if (global.location) {
      loadLakesInit();
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
    console.log("getting lakes");
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

  const countOffset = async () => {
    setOffset(offset => offset + limit);
    console.log("Incrment Offset");
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
          placeholder="Type here to translate!"
        ></TextInput>
      </View>

      <Text>Sport - Fish - Sail</Text>
      <FlatList
        data={lakes}
        keyExtractor={lake => lake.siteid.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
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
