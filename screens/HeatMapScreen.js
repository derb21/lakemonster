import styled from "styled-components";
import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
//import ImageViewer which will help us to zoom Image
import ImageViewer from "react-native-image-zoom-viewer";
import { white } from "color-name";

export default function HeatMapScreen({ navigation, route }) {
  const { heatMap, naturalImg } = route.params;
  const images = [
    {
      url: heatMap
    },
    {
      url: naturalImg
    }
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageViewer imageUrls={images} renderIndicator={() => null} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
});
//Whole Card
const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
