import React from "react";
import styled from "styled-components";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Drawer } from "native-base";
import { ScrollView, Linking } from "react-native";

const CardD = props => (
  <Container>
    <Content>
      <Card>
        <Body>
          {/* <Image source={{ uri: props.image }} /> */}

          <Text>
            {props.state}, {props.city}, {props.zip}
          </Text>
          <Text></Text>
          <Button
            title="Website"
            light
            onPress={() => Linking.openURL(props.website)}
          >
            <Text>Website</Text>
          </Button>
          <Button
            light
            onPress={() =>
              Linking.openURL(
                "https://maps.google.com/?q=" +
                  props.lat +
                  "," +
                  props.lon +
                  "&ll=" +
                  props.lat +
                  "," +
                  props.lon +
                  "&z=10"
              )
            }
            title="Get Directions"
          ></Button>
          <Text>{props.description}</Text>
        </Body>
      </Card>
    </Content>
  </Container>
);
const Container = styled.View`
  background: white;
  width: 99%;
  height: 62%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Card = styled.View`
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
const Button = styled.Button``;

//LakeName
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5%;
  text-align: center;
`;
const Body = styled.View``;
const Distance = styled.Text`
  color: white;
  font-size: 16px;
  padding-bottom: 8%;
  margin-left: 20px;
`;
const Image = styled.Image`
  width: 100%;
  height: 50%;
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
  height: 70%;
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

const Text = styled.Text`
  margin: 5px;
`;
const TextAir = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 5%;
  font-weight: 600;
  padding-right: 6%;
  margin-left: 20px;
`;
export default CardD;
