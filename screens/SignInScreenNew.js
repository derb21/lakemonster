import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Form, Item, Button, Text, Input, Label } from "native-base";
import { Video } from "expo-av";
import * as SecureStore from "expo-secure-store";
import SignInAPI from "../api/signIn";
import * as Updates from "expo-updates";
import { create } from "apisauce";

export default function CreateProfile({ route, navigation }) {
  const [smsNumber, setSmsNumber] = useState("");
  const [code, setCode] = useState("");
  const [user, setUser] = useState(null);
  const [_email, setEmail] = useState("");
  const [_firstName, setFirstName] = useState("");
  const [_lastName, setLastName] = useState("");
  const [show, setShow] = useState(false);

  // console.log("create profile page token ", token);

  useEffect(() => {}, []);

  const saveProfileInfo = async () => {};
  const changeSegmentCreate = async () => {
    console.log("Change Segment Create Profile");
    setShow(true);
  };
  const changeSegmentSignIn = async () => {
    console.log("Change Segment Sign In");
    setShow(false);
  };
  return (
    <>
      {/* Loading this View While waiting for location to return */}
      {show === false ? (
        <Container>
          <Cover>
            <Image source={require("../assets/overcastDark.png")} />

            <Content></Content>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  changeSegmentCreate();
                }}
              >
                <Col style={{ backgroundColor: "transparent", flex: 1 }}>
                  <Title>Create</Title>
                </Col>
              </TouchableOpacity>

              <Col style={{ backgroundColor: "cadetblue", flex: 1 }}>
                <Title>Sign In</Title>
              </Col>
            </Row>
            <Div>
              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Enter Email"
                    returnKeyLabel={"next"}
                    onChangeText={text => setEmail(text)}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Password </Label>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Enter Password"
                    returnKeyLabel={"next"}
                    onChangeText={text => setPassword(text)}
                  />
                </Item>
              </Form>

              <Button
                disabled={!_firstName || !_lastName || !_email}
                onPress={() => {
                  saveProfileInfo();
                }}
                style={{
                  marginTop: 35,
                  marginBottom: 25
                }}
                info
                full
              >
                <Text> Sign In</Text>
              </Button>
            </Div>
          </Cover>
        </Container>
      ) : (
        <Container>
          <Cover>
            <Image source={require("../assets/overcastDark.png")} />

            <Content></Content>
            <Row>
              <Col style={{ backgroundColor: "cadetblue", flex: 1 }}>
                <Title>Create</Title>
              </Col>
              <TouchableOpacity
                onPress={() => {
                  changeSegmentSignIn();
                }}
              >
                <Col style={{ backgroundColor: "transparent", flex: 1 }}>
                  <Title>Sign In</Title>
                </Col>
              </TouchableOpacity>
            </Row>
            <Div>
              <Form>
                <Item floatingLabel>
                  <Label>First Name</Label>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Enter First Name"
                    returnKeyLabel={"next"}
                    onChangeText={text => setFirstName(text)}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Last Name </Label>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Enter Last Name"
                    returnKeyLabel={"next"}
                    onChangeText={text => setLastName(text)}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Enter Email"
                    returnKeyLabel={"next"}
                    onChangeText={text => setEmail(text)}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Phone Number</Label>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Enter Phone Number"
                    returnKeyLabel={"next"}
                    onChangeText={text => setPhoneNumber(text)}
                  />
                </Item>
              </Form>

              <Button
                disabled={!_firstName || !_lastName || !_email}
                onPress={() => {
                  saveProfileInfo();
                }}
                style={{
                  marginTop: 35,
                  marginBottom: 25
                }}
                info
                full
              >
                <Text> Create Profile</Text>
              </Button>
            </Div>
          </Cover>
        </Container>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: " rgba(0, 0, 0, 0.5)"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
    fontFamily: "MontserratSemiBold"
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
    textAlign: "center",
    fontFamily: "MontserratSemiBold"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "MontserratSemiBold"
  }
});

//Whole Card
const Container = styled.View`
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
  background-color: rgba(0, 0, 0, 0.35);
  width: 100%;
  height: 25%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

//LakeName
const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  font-family: "MontserratMedium";
`;

const Div = styled.View`
  margin-top: 15%;
  margin-left: 5%;
  margin-right: 5%;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
`;
const Row = styled.View`
  flex-direction: row;
  margin-top: 35%;
  margin-left: 7%;
  margin-right: 7%;
`;
const Col = styled.View`
  border: 1px white solid;
  flex: 1;
`;
const Image = styled.Image`
  width: 100%;
  height: 25%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
{
  /* <Title>Create Profile</Title>
          <Div>
            <Form>
              <Item floatingLabel>
                <Label>First Name</Label>
                <Input
                  style={{ color: "white" }}
                  placeholder="Enter First Name"
                  returnKeyLabel={"next"}
                  onChangeText={text => setFirstName(text)}
                />
              </Item>
              <Item floatingLabel>
                <Label>Last Name </Label>
                <Input
                  style={{ color: "white" }}
                  placeholder="Enter Last Name"
                  returnKeyLabel={"next"}
                  onChangeText={text => setLastName(text)}
                />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  style={{ color: "white" }}
                  placeholder="Enter Email"
                  returnKeyLabel={"next"}
                  onChangeText={text => setEmail(text)}
                />
              </Item>
            </Form> */
}
