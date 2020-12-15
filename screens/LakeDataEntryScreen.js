import styled from "styled-components";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  View,
  Button,
  Modal,
  Text,
  TouchableHighlight,
  Alert,
  StyleSheet,
  TextInput,
  FlatList
} from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Textarea } from "native-base";

export default function Map({ navigation }) {
  const modalVisible = false;

  const setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Container>
      <Cover>
        <Image source={require("../assets/lakeBackground-2.jpg")} />
        <Content>
          <Title>Data Entry</Title>
          <Div>
            <View style={{ flex: 1 }}>
              <Camera style={{ flex: 1 }} type={type}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "transparent",
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: "flex-end",
                      alignItems: "center"
                    }}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                    >
                      Flip
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
            <TextInput
              style={{
                height: 50,
                borderBottomColor: "#000000",
                borderBottomWidth: 1,
                paddingLeft: 10
              }}
              placeholder="Water Temperature"
            ></TextInput>
            <TextInput
              style={{
                height: 50,
                borderBottomColor: "#000000",
                borderBottomWidth: 1,
                paddingLeft: 10
              }}
              placeholder="LastName"
            ></TextInput>
            <TextInput
              style={{
                height: 50,
                borderBottomColor: "#000000",
                borderBottomWidth: 1,
                paddingLeft: 10
              }}
              placeholder="Email"
            ></TextInput>
            <TextInput
              style={{
                height: 50,
                borderBottomColor: "#000000",
                borderBottomWidth: 1,
                paddingLeft: 10
              }}
              placeholder="Phone Number"
            ></TextInput>
            <Textarea rowSpan={5} bordered placeholder="Fishing Report" />
            <Textarea rowSpan={5} bordered placeholder="Description" />

            <Button title="Submit"></Button>
          </Div>
        </Content>
      </Cover>
    </Container>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
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
    marginBottom: 15,
    textAlign: "center"
  }
});

//Whole Card
const Container = styled.View`
  background: white;
  width: 99%;
  height: 98%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border: 3px solid white;
`;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 14px;
`;

const Content = styled.View`
  display: flex;
  background-color: white;
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
  color: black;
  font-size: 24px;
  font-weight: bold;
  padding-top: 15%;
  text-align: center;
`;

const Row2 = styled.View`
  flex: 1;
`;
const ContainerData = styled.View`
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.5);
  height: 90%;
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

const TextAir = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 5%;
  font-weight: 600;
  padding-right: 6%;
  margin-left: 20px;
`;
