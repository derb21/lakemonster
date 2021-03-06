import React from "react";
import styled from "styled-components";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Form, Item, Button, Text, Input, Label } from "native-base";
import { Video } from "expo-av";

export default function EditProfile({ navigation }) {
  const firstName = global.firstName;
  const lastName = global.lastName;
  return (
    <Container>
      <Cover>
        <Video
          source={require("../assets/appVideo.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 600, height: 900, position: "absolute" }}
        />
        <Content>
          <Div>
            <Form>
              <Item floatingLabel>
                <Label>First Name</Label>
                <Input value={firstName} style={{ color: "white" }} />
              </Item>
              <Item floatingLabel>
                <Label>Last Name</Label>
                <Input value={lastName} style={{ color: "white" }} />
              </Item>
              <Item floatingLabel>
                <Label>Phone Number</Label>
                <Input style={{ color: "white" }} />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input style={{ color: "white" }} />
              </Item>
            </Form>
            <Button
              style={{ marginRight: "auto", marginLeft: "auto", marginTop: 20 }}
              primary
            >
              <Text> Save </Text>
            </Button>
          </Div>
        </Content>
      </Cover>
    </Container>
  );
}
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
  background-color: rgba(0, 0, 0, 0.4);
  margin-top: 15%;
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
