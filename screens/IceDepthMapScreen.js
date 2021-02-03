import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Alert
} from "react-native";
import styled from "styled-components";
import MapView from "react-native-map-clustering";
import React, { useState, useEffect, useRef } from "react";

import useLocation from "../hooks/useLocation";
import { Marker } from "react-native-maps";
import { ButtonGroup } from "react-native-elements";

import { Card, Fab, CardItem, Button, Body } from "native-base";
import RangerAPI from "../api/ranger";
import { Ionicons } from "@expo/vector-icons";

const initialRegion = {
  latitude: 37.72825,
  longitude: -122.4324,
  latitudeDelta: 0.25,
  longitudeDelta: 0.15
};

export default function IceDepthMap({ route, props, navigation }) {
  const { siteid } = route.params;
  const { lat } = route.params;
  const { lng } = route.params;
  const { gis } = route.params;
  const { name } = route.params;
  console.log("props ice depth map screen", gis);

  console.log("Ice Depth Map Screen, Passed Props", gis, lat, lng, siteid);

  const mapMarkers = [];
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleMessage, setModalVisibleMessage] = useState(false);

  const geoLocation = useLocation();
  const [lakes, setLakes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(geoLocation);
  const [markers, setMarker] = useState([]);
  const [points, setPoints] = useState([]);
  const [messages, setMessages] = useState([]);
  const [_depth, setDepth] = useState([]);
  const [_userName, setUserName] = useState([]);

  const [_text, setText] = useState([]);
  const [dateSumbitedMessage, setDateSubmitedMessage] = useState([]);
  const [_messageType, setMessageType] = useState([]);
  const [_userNameMessage, setUserNameMessage] = useState([]);
  const [_userIdMessage, setUserIdMessage] = useState([]);
  const [messageId, setMessageId] = useState([]);

  const [_userId, setUserId] = useState([]);
  const [pointid, setPointId] = useState([]);
  const [dateSubmited, setDateSubmited] = useState([]);
  const [yourPost, setYourPost] = useState(false);
  const [yourPostMessage, setYourPostMessage] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [initializedToken, setInitializedToken] = useState(false);

  const mapRef = useRef();

  const userid = global.userid;
  console.log("userid ice depth map page", userid, global.token);
  useEffect(() => {
    if (global.token !== null) {
      setInitializedToken(true);
    }
    loadPoints();
    getLocation();
    loadMessages();
    return () => {
      //cleanup
    };
  }, []);

  const updateIndex = async selectedIndex => {
    setSelectedIndex({ selectedIndex });
  };
  const removeIceDepth = async () => {
    Alert.alert(
      "Deleting Ice Depth",
      "Are you sure you want to delete this Ice Depth?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => delIceDepth()
        }
      ],
      { cancelable: false }
    );
  };
  const delIceDepth = async () => {
    console.log("Delete Ice Depth Function", siteid, pointid);
    const response = await RangerAPI.deleteIceDepth(siteid, pointid);
    console.log("response Delete Ice Depth", response.data);
    Alert.alert(
      "Alert Title",
      "Succesfully Deleted",
      [
        {
          text: "Cancel",
          onPress: () => alertCancel(),
          style: "cancel"
        },
        { text: "OK", onPress: () => alertCancel() }
      ],
      { cancelable: false }
    );
  };
  const alertCancel = async () => {
    loadPoints();
    setModalVisible(!modalVisible);
  };
  const alertCancelMessage = async () => {
    loadMessages();
    setModalVisibleMessage(!modalVisibleMessage);
  };
  const getLocation = async () => {
    animateToRegion(lat, lng);
  };
  const animateToRegion = (lat, lng) => {
    let region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    };
    mapRef.current.animateToRegion(region, 2000);
  };

  const loadMessages = async () => {
    let response = "";

    console.log("getting lake Points");
    return (response = await RangerAPI.getMessages(siteid).then(res => {
      console.log("got Ice Depth Points", res.data);
      //let points = res.data;
      try {
        if (res.data.length) {
          setMessages(res.data);
        } else {
        }
      } catch (e) {}

      return;
    }));
  };
  const loadPoints = async () => {
    let response = "";

    console.log("getting lake Points");
    return (response = await RangerAPI.getIceDepth(siteid).then(res => {
      console.log("got Ice Depth Points", res.data);
      //let points = res.data;
      try {
        if (res.data.length) {
          setPoints(res.data);
        } else {
          Alert.alert(
            "No Ice Depths Inputed Yet",
            "There has not been any inputed Ice Depths for this lake, You can add an ice depth using the button above. ",
            [
              {
                text: "Ok",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              }
            ],
            { cancelable: false }
          );
        }
      } catch (e) {}

      return;
    }));
  };
  const addIceDepth = () => {
    if (initializedToken == true) {
      navigation.navigate("IceDepthDataEntryScreen", {
        siteid: siteid,
        name: name,
        lat: lat,
        lng: lng
      });
    } else {
      Alert.alert(
        "Not Signed In",
        "Sorry, you are not signed in. To add lake information, please sign in.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("cancel"),
            style: "cancel"
          },
          { text: "Sign In", onPress: () => goToSignIn() }
        ],
        { cancelable: false }
      );
    }
  };

  const goToSignIn = async () => {
    navigation.navigate("SignUp", {});
  };
  const addMessage = () => {
    if (initializedToken == true) {
      navigation.navigate("MessageDataEntry", {
        siteid: siteid,
        name: name,
        lat: lat,
        lng: lng
      });
    } else {
      Alert.alert(
        "Not Signed In",
        "Sorry, you are not signed in. To add lake information, please sign in.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("cancel"),
            style: "cancel"
          },
          { text: "Sign In", onPress: () => goToSignIn() }
        ],
        { cancelable: false }
      );
    }
  };
  const mapMarkersOne = () => {
    return points.map(point => (
      <Marker
        key={point.id}
        coordinate={{ latitude: point.lat, longitude: point.lng }}
        title="Ice Depth"
        onPress={() =>
          markerClicked(
            point.depth,
            point.submitted,
            point.userName,
            point.id,
            point.userid
          )
        }
        depth={point.depth}
      >
        {/* Is Ranger (1) = Blue and Not ranger = gray */}
        <View style={point.isRanger != 1 ? styles.Div : styles.DivBlue}>
          <Ionicons
            style={{ textAlign: "center" }}
            name="ios-snow"
            size="32"
            color="white"
          />
          <Text style={{ color: "white", textAlign: "center" }}>
            {point.depth * (0.3937).toFixed(2)} Inches
          </Text>
        </View>
      </Marker>
    ));
  };
  const markerClicked = (depth, date, username, pointid, userid) => {
    setModalVisible(true);
    let inchDepthOne = depth * 0.3937;
    let inchDepth = inchDepthOne.toFixed(2);
    setDepth(inchDepth);
    setDateSubmited(date);
    setUserName(username);
    setPointId(pointid);
    setUserId(userid);

    console.log("userId set post above if statemtn", userid);

    if (userid == userid) {
      console.log("userId set post");
      setYourPost(false);
    }
  };
  const mapMarkersMessages = () => {
    return messages.map(point => (
      <Marker
        key={point.id}
        coordinate={{ latitude: point.pointLat, longitude: point.pointLng }}
        title="Alerts"
        onPress={() =>
          markerClickedMessage(
            point.text,
            point.messageType,
            point.created,
            point.userName,
            point.userid,
            point.id
          )
        }
      >
        {/* Is Ranger (1) = Blue and Not ranger = gray */}
        <View
          style={point.isRanger != 1 ? styles.DivMessage : styles.DivRedMesage}
        >
          <Ionicons
            style={{ textAlign: "center" }}
            name="ios-alert"
            size="32"
            color="white"
          />
          {/* <Text style={{ color: "white", textAlign: "center" }}>
            {point.text}
          </Text> */}
        </View>
      </Marker>
    ));
  };
  const deleteMessage = async () => {
    Alert.alert(
      "Deleting Message",
      "Are you sure you want to delete this Message?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => removeMessage()
        }
      ],
      { cancelable: false }
    );
  };
  const removeMessage = async () => {
    console.log("Delete Message Function");
    const response = await RangerAPI.deleteMessage(siteid, messageId);
    console.log("response Delete Message", response.data);
    Alert.alert(
      "Alert Title",
      "Succesfully Deleted",
      [
        {
          text: "Cancel",
          onPress: () => alertCancelMessage(),
          style: "cancel"
        },
        { text: "OK", onPress: () => alertCancelMessage() }
      ],
      { cancelable: false }
    );
  };
  const markerClickedMessage = (
    text,
    messageType,
    date,
    username,
    userid,
    messageid
  ) => {
    setModalVisibleMessage(true);

    setText(text);
    setDateSubmitedMessage(date);
    setMessageType(messageType);
    setUserNameMessage(username);
    setUserIdMessage(userid);
    setMessageId(messageid);

    console.log("userId set post above if statemtn", userid);

    if (userid == userid) {
      console.log("userId set post");
      setYourPostMessage(false);
    }
  };
  const buttons = ["Hello", "World", "Buttons"];

  return (
    <Container>
      <Image source={require("../assets/overcastDark.png")} />

      <Title>{name}</Title>
      <DivMap>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={initialRegion}
          showsUserLocation={true}
          followUserLocation={true}
        >
          {mapMarkersOne()}
          {mapMarkersMessages()}

          {/* {
          <MapView.Polygon
            key="1"
            coordinates={gis}
            fillColor="red"
            strokeColor="black"
          />
        } */}
        </MapView>
      </DivMap>
      <Row>
        <Col>
          <Button
            onPress={() => {
              addIceDepth();
            }}
            style={{ backgroundColor: "cadetblue" }}
            info
            full
          >
            <Text style={{ color: "white", fontSize: 20 }}>Add Ice Depth</Text>
          </Button>
        </Col>
        <Col>
          <Button
            onPress={() => {
              addMessage();
            }}
            style={{ backgroundColor: "cadetblue" }}
            full
          >
            <Text style={{ color: "white", fontSize: 20 }}>Add Message</Text>
          </Button>
        </Col>
      </Row>
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
            <Card>
              <CardItem button>
                <Text style={styles.titles}>Ice Depth: </Text>
                <Text style={styles.modalText}> {_depth} Inches</Text>
              </CardItem>
              <CardItem header button>
                <Text style={styles.titles}>Date: </Text>
                <Text style={styles.modalText}> {dateSubmited}</Text>
              </CardItem>
              <CardItem header button>
                <Text style={styles.titles}>Submitted By: </Text>
                <Text style={styles.nameTxt}> {_userName}</Text>
              </CardItem>
            </Card>

            <>
              {/* Loading this View While waiting for location to return */}
              {yourPost === false ? (
                <TouchableHighlight
                  style={{
                    ...styles.openButton,
                    backgroundColor: "cadetblue",
                    marginBottom: "5%"
                  }}
                  onPress={() => {
                    removeIceDepth();
                  }}
                >
                  <Text style={styles.textStyle}>Delete Ice Depth</Text>
                </TouchableHighlight>
              ) : (
                <Text></Text>
              )}
            </>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "cadetblue" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleMessage}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Card>
              <CardItem>
                <Body>
                  <Text style={styles.title}>Message: </Text>
                  <Text style={styles.modalText}> {_text} </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Text style={styles.titles}>Date: </Text>
                <Text style={styles.modalText}> {dateSumbitedMessage}</Text>
              </CardItem>
              <CardItem>
                <Text style={styles.titles}>Submitted By: </Text>
                <Text style={styles.nameTxt}> {_userNameMessage}</Text>
              </CardItem>
            </Card>

            <>
              {/* Loading this View While waiting for location to return */}
              {yourPostMessage === false ? (
                <TouchableHighlight
                  style={{
                    ...styles.openButton,
                    backgroundColor: "cadetblue",
                    marginBottom: "5%"
                  }}
                  onPress={() => {
                    deleteMessage();
                  }}
                >
                  <Text style={styles.textStyle}>Delete Message</Text>
                </TouchableHighlight>
              ) : (
                <Text></Text>
              )}
            </>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "cadetblue" }}
              onPress={() => {
                setModalVisibleMessage(!modalVisibleMessage);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </Container>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 15
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
    backgroundColor: "cadetblue",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
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
    fontSize: 18,
    flexWrap: "wrap"
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: 18
  },
  Div: {
    backgroundColor: "gray",
    flex: 1,
    borderRadius: 15,
    width: 65
  },
  DivBlue: {
    backgroundColor: "cadetblue",
    flex: 1,
    borderRadius: 15,
    width: 65
  },
  DivMessage: {
    backgroundColor: "black",
    flex: 1,
    borderRadius: 15,
    width: 65
  },
  DivRedMesage: {
    backgroundColor: "red",
    flex: 1,
    borderRadius: 15,
    width: 65
  }
});
const DivMap = styled.View`
  margin-left: 1%;
  margin-top: 5%;
  margin-right: 1%;
`;
const Container = styled.View`
  background: lightgrey;
  flex: 1;
`;
const HeaderDiv = styled.View`
  width: 100%;
  height: 45%;
  position: absolute;
  background-color: cadetblue;
  top: 0;
  left: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const Row = styled.View`
  flex-direction: row;
  margin-top: 45%;
  position: absolute;
  margin-left: 5%;
  margin-right: 5%;
`;
const Col = styled.View`
  flex: 1;
  border: 1px black solid;
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
  height: 22%;
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
