import React, { useState, useEffect } from "react";
import { StyleSheet, ActionSheetIOS, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/EvilIcons";
import { Font } from "expo";
import { Button, Toast } from "native-base";
import SignInAPI from "../api/signIn";
import LakeList from "../screens/LakeListScreen";
import styled from "styled-components";

function FavoriteCard(props, { navigation }) {
  const [heart, setHeart] = useState(false);
  const [initializedToken, setInitializedToken] = useState(false);

  useEffect(() => {
    // if (global.show == "true") {
    //   setInitialized(false);
    // }

    if (global.token !== null) {
      setInitializedToken(true);
    }
    if (props.fav != 0) {
      setHeart(true);
      console.log("props.fav", props.fav);
    }
    return () => {
      //cleanup
    };
  }, []);

  //Mark as Favorite
  const markFav = async () => {
    if (initializedToken == true) {
      console.log("Mark Favorite Lake List Screen", props.title);
      setHeart(true);

      const response = await SignInAPI.setFavorites(props.siteid);
      console.log("response", response.data);
      // let favorites = response.data;
      // setFavorites(favorites);

      // await SecureStore.setItemAsync("favorites", favorites);

      // const fav = await SecureStore.getItemAsync("favorites");
      // console.log("favorites lake info screen", fav);
    } else {
      navigation.navigate("SignUp");
      console.log("goToSignUp", goToSignUp);
    }
  };

  //Remove Favorite
  const favRemove = async () => {
    setHeart(false);
    const response = await SignInAPI.removeFavorites(props.siteid);
    console.log("response", response.data);
  };

  var webcams = "";
  if (props.webcams != 0) {
    webcams = props.webcams + " webcams";
  }

  var checkins = "";
  if (props.checkins) {
    if (props.checkins != 0) {
      checkins = props.checkins + " checkins today";
    }
  }

  return (
    <Container>
      <Content>
        {/* <BorderTop></BorderTop> */}

        <HeaderCard>
          <Header>
            <HeaderCardTXT>
              {firstName} {lastName}
            </HeaderCardTXT>
          </Header>

          <HeaderCardContent>
            <ButtonRow>
              <ButtonCol>
                <TouchableOpacity onPress={() => Linking.openURL(website)}>
                  <HelpTxt>Contact Us</HelpTxt>
                </TouchableOpacity>
              </ButtonCol>
              <ButtonCol>
                <SignOutBtn token={global.token}></SignOutBtn>
              </ButtonCol>
            </ButtonRow>
          </HeaderCardContent>
        </HeaderCard>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 165
  }
});
const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
  margin: 2px 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
`;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Content = styled.View`
  display: flex;
`;
//Background Image
const Image = styled.Image`
  width: 100%;
  height: 85%;
  position: absolute;
  top: 0;
  left: 0;
`;

//LakeName

const BorderTop = styled.View`
  margin: 5%;
  margin-top: 5%;
  border: 1px white solid;
`;

const Border = styled.View`
  margin: 5%;
  border: 1px white solid;
`;
const InsideTopDiv = styled.View`
  margin-top: 18%;
  width: 85%;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderCardTXT = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 2%;
`;
//Container Information Start
const HeaderCard = styled.View`
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.35);
`;
const HeaderCardContent = styled.View`
  padding: 2px 16px;
  background-color: white;
  border-radius: 15px;
`;
const Header = styled.View`
  padding: 2px 16px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.2);
`;
const ButtonRow = styled.View`
  flex-direction: row;
  padding: 5%;
`;
const ButtonCol = styled.View`
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 10;
  padding-top: 10;
  border-radius: 25;
  background-color: lightblue;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
`;
const HelpTxt = styled.Text`
  font-size: 18px;
  text-align: center;
  padding-bottom: 3%;
  color: black;
  font-family: Verdana;
  margin: 7px;
`;

export default FavoriteCard;
