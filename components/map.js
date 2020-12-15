import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-native";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import MapView from "react-native-maps";
import lakesApi from "../api/lakes";
import Screen from "../components/Screen";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import useLocation from "../hooks/useLocation";
import LakeCard1 from "../components/LakeCard1";

 

 

  export default function Map({ navigation }) {
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


  <Container>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }}
    />
  </Container>
);


//Whole Card
const Container = styled.View`
  background: white;
  width: 99%;
  height: 23%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border: 3px solid lightgreen;
`;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Content = styled.View`
  flex-direction: row;
  display: flex;
`;
//Background Image
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

//LakeName
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  padding-bottom: 5%;
  margin-left: 20px;
`;
const WaterDiv = styled.View`
  flex-direction: row;
  padding-left: 8%;
`;
const Distance = styled.Text`
  color: white;
  font-size: 16px;
  padding-bottom: 8%;
  margin-left: 20px;
`;
//Container Information Start
const Row1 = styled.View`
  flex: 1.5;
`;

const Row2 = styled.View`
  flex: 1;
`;

const ContainerData = styled.View`
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  text-align: center;
  align-items: center;
`;
const Div = styled.View``;
const InfoDiv = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  padding: 5%;
`;

const TextWater = styled.Text`
  color: white;
  margin-left: 5%;
  font-size: 22px;
  font-weight: 600;
  padding-right: 6%;
  margin-left: 20px;
`;
const TextAir = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 5%;
  font-weight: 600;
  padding-right: 6%;
  margin-left: 20px;
`;
