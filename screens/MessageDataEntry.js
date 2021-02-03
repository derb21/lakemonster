import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  Form,
  Item,
  Button,
  Text,
  Textarea,
  Input,
  Picker,
  Label,
  ListItem,
  CheckBox,
  Body
} from "native-base";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  Alert
} from "react-native";
import RangerAPI from "../api/ranger";

import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import * as SecureStore from "expo-secure-store";

const initialRegion = {
  latitude: 37.72825,
  longitude: -122.4324,
  latitudeDelta: 0.25,
  longitudeDelta: 0.15
};
export default function DataEntry({ route, navigation }) {
  const [_marker, setMarker] = useState([]);
  const [_lat, setLat] = useState();
  const [_lng, setLng] = useState();
  const [_location, setLocation] = useState();
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [allLake, setAllLake] = useState(false);

  //Props from Lake Data Entry Page
  const { siteid } = route.params;
  const { name } = route.params;
  const { lng } = route.params;
  const { lat } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const mapRef = useRef();

  useEffect(() => {
    getLocationMap();
  }, []);

  const allLakeMessage = async () => {
    setAllLake(!allLake);
    setLng("");
    setLat("");
  };

  const saveMessage = async () => {
    console.log(
      "Save Water Temperature Function",
      siteid,
      message,
      messageType,
      _lat,
      _lng
    );
    const response = await RangerAPI.saveMessage(
      siteid,
      message,
      messageType,
      _lat,
      _lng
    );
    console.log("response Save Message", response.data);
    Alert.alert(
      "Posted Message",
      "Thank you for adding a message to " + name + "." + " (" + message + ")",
      [
        {
          text: "OK",
          onPress: () => goBack()
        }
      ],
      { cancelable: false }
    );
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
              <InfoTxt>
                Click on the map to add coordinates for your message or alert.
              </InfoTxt>
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

          <>
            {/* Loading this View While waiting for location to return */}
            {allLake === false ? (
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
            ) : (
              <Text></Text>
            )}
          </>

          <Form
            style={{
              width: "100%",
              marginTop: "80%",
              backgroundColor: "white"
            }}
          >
            <ListItem>
              <CheckBox
                checked={allLake}
                onPress={() => {
                  allLakeMessage();
                }}
              />

              <Body>
                <Text>Check if message is inteded for entire lake</Text>
              </Body>
            </ListItem>

            <>
              {/* Loading this View While waiting for location to return */}
              {allLake === false ? (
                <View>
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
                </View>
              ) : (
                <Text></Text>
              )}
            </>

            <Item picker>
              <Picker
                mode="dropdown"
                style={{ width: undefined }}
                placeholder="Select Message Type"
                placeholderStyle={{ color: "black" }}
                returnKeyLabel={"next"}
                selectedValue={messageType}
                onValueChange={text => setMessageType(text)}
              >
                <Picker.Item
                  label="General Information"
                  value="General Information"
                />
                <Picker.Item label="Warning" value="Warning" />
                <Picker.Item label="Alert" value="Alert" />
              </Picker>
            </Item>
            <Textarea
              rowSpan={5}
              bordered
              style={{ color: "black" }}
              returnKeyLabel={"next"}
              onChangeText={text => setMessage(text)}
              placeholder="Add Lake Information"
            />
          </Form>
          <BtnDiv>
            <Button
              onPress={() => {
                saveMessage();
              }}
              disabled={!message + !messageType}
              style={{
                marginTop: 15
              }}
              info
              full
            >
              <Text style={{ fontSize: 23 }}>Post Message</Text>
            </Button>

            <Button
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                marginTop: 15
              }}
              info
              full
            >
              <Text style={{ fontSize: 20 }}>Cancel</Text>
            </Button>
          </BtnDiv>

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
//Whole Card
const Container = styled.View`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border: 3px solid white;
`;
const DivLocation = styled.View`
  /* position: absolute;
  bottom: 200; */
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

const Div = styled.View``;

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
