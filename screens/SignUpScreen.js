import React from "react";
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
import authApi from "../api/auth";

export default function Map({ navigation }) {
  const phoneNumberS = async () => {
    console.log("getting lakes");
    const response = await lakesApi
      .getLogin(smsNumber, uuid)
      .then(res => {
        console.log("sent data");
        let newLakes = res.data;
        setLakes(lakes => lakes.concat(newLakes));
      })
      .then(r => {
        countOffset();
      });
  };

  return (
    <Container>
      <Cover>
        <Image source={require("../assets/lakeBackground-2.jpg")} />
        <Content>
          <Title>Login</Title>
          <Div>
            <TextInput
              style={{
                height: 50,
                borderBottomColor: "#000000",
                borderBottomWidth: 1,
                paddingLeft: 10
              }}
              placeholder="phoneNumber"
            ></TextInput>

            <Button title="Sign In"></Button>
            <Button onPress={phoneNumberS} title="Create a Profile"></Button>
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
