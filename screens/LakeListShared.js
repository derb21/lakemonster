//API
import lakesApi from "../api/lakes";

//Components
import Screen from "../components/Screen";
import LakeListSharedCard from "../components/lakeListSharedCard";
import Onboarding from "../components/onboarding";

//All other Imports
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import * as Application from "expo-application";
import * as StoreReview from "expo-store-review";
import { SearchBar } from "react-native-elements";

export default function LakesSimpleScreen({ navigation }) {
  const [lakes, setLakes] = useState([]);
  const [offset, setOffset] = useState(0);

  const [searchText, setSearchText] = useState();
  const [_onboarding, setOnboarding] = useState(false);

  useEffect(() => {
    console.log("lakeList useEffect", global.location);
    loadLakesFunc();

    return () => {};
  }, []);
  const skipOnboarding = async () => {
    console.log("skip onboarding");
    setOnboarding(true);
  };

  const loadLakesFunc = async () => {
    loadLakes();
  };
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

  return (
    <>
      {/* Loading this View While waiting for location to return */}
      {_onboarding === true ? (
        <View>
          {/* <Onboarding></Onboarding>
          <View
            style={{
              flex: 1,
              position: "absolute",
              bottom: "88%",
              left: 0,
              right: 0,
              justifyContent: "center",
              paddingLeft: "84%",
              paddingRight: 15
            }}
          >
            <Button
              transparent
              onPress={() => {
                skipOnboarding();
              }}
            >
              <Text style={{ fontSize: 22, color: "white" }}> Skip</Text>
            </Button>
          </View> */}
        </View>
      ) : (
        <View>
          <Image source={require("../assets/overcastDark.png")} />

          <SearchBar
            leftIconContainerStyle={{
              backgroundColor: "transparent"
            }}
            value={text => setSearchText(text)}
            onChangeText={text => loadLakesSearch(text)}
            style={{}}
            platform="ios"
            inputStyle={{ backgroundColor: "transparent" }}
            containerStyle={{
              width: Dimensions.get("window").width,
              marginBottom: "5%",
              marginTop: "15%",
              borderRadius: 30,
              marginLeft: "3%",
              paddingRight: "10%"
            }}
            placeholder="Search Lakes..."
          />
          <FlatList
            style={{ borderRadius: 15 }}
            data={lakes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View key={item.siteid} style={styles.container}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("LakeInfo", {
                      itemId: item.siteid,
                      fav: item.fav,
                      sharedItem: item,
                      img: item.imgUrl,
                      name: item.name,
                      state: item.state
                    });
                  }}
                >
                  <LakeListSharedCard
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
                    fav={item.fav}
                    state={item.state}
                  ></LakeListSharedCard>
                </TouchableOpacity>
              </View>
            )}
            onEndReached={loadLakes}
            onEndReachedThreshold={0.5}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "lightgray",
    borderTopWidth: 1,
    borderColor: "gray",
    height: 120,
    marginBottom: 270
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  }
});
const DivLakeList = styled.View`
  margin-left: 1%;
  margin-right: 1%;
`;
const Image = styled.Image`
  width: 100%;
  height: 20%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-left: 5%;
  margin-top: 14%;
  font-family: "MontserratSemiBold";
`;
