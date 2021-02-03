import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { Form, Item, Button, Text, Input, Label } from "native-base";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  Alert
} from "react-native";
import RangerAPI from "../api/ranger";
import * as Location from "expo-location";
import MapView, { AnimatedRegion } from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import * as SecureStore from "expo-secure-store";
import { Slider } from "react-native-elements";

const initialRegion = {
  latitude: 37.72825,
  longitude: -122.4324,
  latitudeDelta: 0.25,
  longitudeDelta: 0.15
};
export default function DataEntry({ route, navigation }) {
  const [_iceDepth, setIceDepth] = useState("20");
  const [_marker, setMarker] = useState([]);

  const [_lat, setLat] = useState();
  const [_lng, setLng] = useState();
  const [_location, setLocation] = useState();
  const [coord, setCoord] = useState();

  //Props from Lake Data Entry Page
  const { siteid } = route.params;
  const { name } = route.params;
  const { lng } = route.params;
  const { lat } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const mapRef = useRef();
  const cmIceDepth = _iceDepth / 0.3937;
  const cmDepth = cmIceDepth.toFixed(2);
  useEffect(() => {
    getLocationMap();
  }, []);

  const saveIceDepth = async () => {
    console.log("Save Water Temperature Function", siteid, cmDepth, _lat, _lng);
    const response = await RangerAPI.saveIceDepth(siteid, cmDepth, _lat, _lng);
    console.log("response Save Ice Depth", response.data);
    setModalVisible(true);
    setLng("");
    setLat("");
    Alert.alert(
      "Posted Ice Depth",
      "Thank you for adding an Ice Depth to " +
        name +
        "." +
        " (" +
        cmDepth +
        " cm)",
      [
        {
          text: "OK",
          onPress: () => goBack()
        }
      ],
      { cancelable: false }
    );
    // Updates.reloadAsync();
  };
  const goBack = async () => {
    navigation.goBack();
  };
  let userLat = "";
  let userLng = "";
  const getLocationMap = async () => {
    const currentLocationLat = await SecureStore.getItemAsync(
      "current_location_lat"
    );
    userLat = currentLocationLat;
    const currentLocationLng = await SecureStore.getItemAsync(
      "current_location_lng"
    );
    userLng = currentLocationLng;

    animateToRegion();
  };

  const centerLocation = () => {
    let region = {
      latitude: userLat,
      longitude: userLng,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    };
    mapRef.current.animateToRegion(region, 2000);
  };

  const animateToRegion = () => {
    let region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    };
    mapRef.current.animateToRegion(region, 2000);
  };
  const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest
    });
    setLocation(location);
    console.log("location Lake Data Entry", location);
  };

  const mapMarkersOne = e => {
    if (e) {
      console.log("IS E");
      setLat(e.nativeEvent.coordinate.latitude.toString());
      setLng(e.nativeEvent.coordinate.longitude.toString());
      setMarker(
        <Marker
          key="1"
          coordinate={{
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude
          }}
          title="New Ice Depth"
        ></Marker>
      );
    } else {
      console.log("NO E");
      setMarker(
        <Marker
          key="1"
          coordinate={{
            latitude: "40.1",
            longitude: "-111.11"
          }}
          title="test"
        ></Marker>
      );
    }
  };

  return (
    <ScrollView style={{ height: "100%" }}>
      <Container>
        <Cover>
          <Image source={require("../assets/overcastDark.png")} />

          <TopDiv>
            <Title>{name}</Title>
            <DarkDiv>
              <InfoTxt>Click on the map to add ice depth coordinates. </InfoTxt>
            </DarkDiv>

            <Row>
              <Col>
                <Button
                  onPress={() => {
                    centerLocation();
                  }}
                  style={{ backgroundColor: "cadetblue" }}
                  full
                >
                  <Text style={{ color: "white", fontSize: 20 }}>
                    Current Location
                  </Text>
                </Button>
              </Col>
              <Col>
                <Button
                  onPress={() => {
                    animateToRegion();
                  }}
                  style={{ backgroundColor: "cadetblue" }}
                  full
                >
                  <Text style={{ color: "white", fontSize: 20 }}>
                    Center On Lake
                  </Text>
                </Button>
              </Col>
            </Row>
          </TopDiv>

          <DivMap>
            <MapView
              ref={mapRef}
              style={styles.map}
              showsUserLocation={true}
              followUserLocation={true}
              initialRegion={initialRegion}
              onPress={e => mapMarkersOne(e)}
            >
              {_marker}
            </MapView>
          </DivMap>

          <Form
            style={{
              width: "100%",
              marginTop: "80%",
              backgroundColor: "white"
            }}
          >
            <Item stackedLabel>
              <Label style={{ color: "black" }}>
                Current Location (latitude)
              </Label>
              <Input
                value={_lat}
                returnKeyLabel={"next"}
                onChangeText={text => setLat(text)}
                style={{ color: "black" }}
              />
            </Item>
            <Item stackedLabel>
              <Label style={{ color: "black" }}>
                Current Location (longitude)
              </Label>
              <Input
                value={_lng}
                returnKeyLabel={"next"}
                onChangeText={text => setLng(text)}
                style={{ color: "black" }}
              />
            </Item>

            <SliderDiv>
              <Slider
                returnKeyLabel={"next"}
                value={_iceDepth}
                onValueChange={value => setIceDepth(value)}
                maximumValue={30}
                minimumValue={0}
                step={0.5}
                trackStyle={{
                  height: 10,
                  backgroundColor: "cadetblue"
                }}
                thumbStyle={{
                  height: 30,
                  width: 20,
                  backgroundColor: "cadetblue"
                }}
                // onChangeText={text => setIceDepth(text)}
              />
              <Text style={{ textAlign: "center" }}>
                {_iceDepth} Inches | {cmDepth} CM
              </Text>
            </SliderDiv>
          </Form>
          <Button
            onPress={() => {
              saveIceDepth();
            }}
            disabled={!_lat + !_lng + !_iceDepth}
            style={{
              marginTop: 10
            }}
            info
            full
          >
            <Text style={{ fontSize: 22 }}>Post Ice Depth</Text>
          </Button>
          <Button
            onPress={() => {
              navigation.goBack(2);
            }}
            style={{
              marginTop: 15
            }}
            info
            full
          >
            <Text style={{ fontSize: 18 }}>Cancel</Text>
          </Button>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>
                  Thank you for submitting Ice Depth Information for {name}. We
                  will review your post and then it will be visible to all Lake
                  Monster Users.
                </Text>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </Cover>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 325,
    borderRadius: 15,
    position: "absolute"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center",
    color: "cadetblue",
    fontSize: 20
  },
  nameTxt: {
    textAlign: "center",
    color: "cadetblue",
    fontSize: 22
  },
  titles: {
    textAlign: "center",
    color: "black",
    fontSize: 18
  }
});

const SliderDiv = styled.View`
  margin-left: 10%;
  margin-right: 10%;
`;

const Container = styled.View`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border: 3px solid white;
`;

const DivMap = styled.View`
  margin-left: 3%;
  margin-right: 3%;
`;
const TopDiv = styled.View``;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 14px;
`;
const DarkDiv = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 25px;
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 4%;
  padding-top: 3%;
`;
const BtnDiv = styled.View``;
//Background Image
const Image = styled.Image`
  width: 100%;
  height: 29%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

//LakeName
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 3%;
  margin-left: 3.5%;
  margin-bottom: 1%;
  margin-top: 20%;
  font-family: "MontserratSemiBold";
`;

const InfoTxt = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  padding-right: 6%;
  margin-left: 20px;
  padding-bottom: 5%;
`;

const Row = styled.View`
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
`;
const Col = styled.View`
  flex: 1;
  border: 1px black solid;
`;
