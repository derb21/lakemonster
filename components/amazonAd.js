import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "native-base";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Linking,
  Dimensions
} from "react-native";

import { useNavigation } from "@react-navigation/native";

function AmazonAd(props) {
  const navigation = useNavigation();

  const [show, setShow] = useState(true);

  useEffect(() => {
    return () => {
      //cleanup
    };
  }, []);
  const goToAd = async () => {
    Linking.openURL(
      "https://www.amazon.com/gp/product/B08LMFNLJK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08LMFNLJK&linkCode=as2&tag=lakemonster0d-20&linkId=58145d8595a4e03258d7b6e7dbf4ecb7"
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={goToAd}>
        <AdDiv>
          <Row>
            <Col>
              <Title>Amazon</Title>
            </Col>
            <Col>
              <AdHeader>Advertisement</AdHeader>
            </Col>
          </Row>
          <Image
            source={{
              uri:
                "https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B08LMFNLJK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=lakemonster0d-20"
            }}
            style={{
              width: "50%",
              height: 200,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <InfoText>
            Hyperlite State 2.0 Mens Wakeboard 140, Remix Bindings
          </InfoText>
        </AdDiv>
      </TouchableOpacity>
    </View>
  );
}

export default AmazonAd;

const styles = StyleSheet.create({
  icon: {
    fontSize: 37,

    color: "white",
    marginTop: 9,
    marginLeft: 7
  },
  iconRed: {
    fontSize: 37,
    color: "red",
    marginTop: 9,
    marginLeft: 7
  }
});
const Row = styled.View`
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 2%;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 25px;
  border: 1px solid white;
`;
const Col = styled.View`
  flex: 1;
  width: 100%;
`;
const Border = styled.View`
  border: 1px gray solid;
`;
const AdDiv = styled.View`
  margin: 2%;

  height: 100%;
  width: 100%;
`;
const InfoText = styled.Text`
  color: cadetblue;
  font-size: 17px;
  text-align: center;
  font-family: "Montserrat";
  padding-left: 1%;
  padding-right: 1%;
`;
const Title = styled.Text`
  color: black;
  font-size: 22px;
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 4%;
  font-family: "MontserratRegular";
`;
const AdHeader = styled.Text`
  color: black;
  font-size: 15px;
  margin-top: 15%;
  margin-left: 20%;
  font-family: "MontserratRegular";
`;
