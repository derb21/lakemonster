// ./screens/Contact.js

import lakesApi from "../api/lakes";
import useLocation from "../hooks/useLocation";
import LakeCard1 from "../components/LakeCard1";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text
} from "react-native";
import styled from "styled-components";

const Profile = ({ navigation }) => {
  const geoLocation = useLocation();
  const [lakes, setLakes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(geoLocation);

  useEffect(() => {
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
    <Container>
      <TopContainer>
        <Image source={require("../assets/background14.jpg")} />
      </TopContainer>

      <InfoContainer>
        <Name>Dillen Erb</Name>
        <Location>Lehi, Utah</Location>
        <Border></Border>
      </InfoContainer>

      <FavoriteTitle>Your Favorite Lakes</FavoriteTitle>
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
    </Container>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "lightgray",
    borderTopWidth: 1,
    borderColor: "gray",
    height: 165,
    justifyContent: "center"
  }
});

const Container = styled.View`
  height: 100%;
`;
const InfoContainer = styled.View``;
const TopContainer = styled.View`
  border: 1px;
  height: 20%;
  width: 100%;
  background-color: lightblue;
`;
const Name = styled.Text`
  font-size: 25px;
`;
const Location = styled.Text`
  font-size: 20px;
  color: gray;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const FavoriteTitle = styled.Text`
  font-size: 24px;
  padding: 4%;
`;
const Border = styled.View`
  margin: 5%;
  border: 1px gray solid;
`;
