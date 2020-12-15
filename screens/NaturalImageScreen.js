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

export default function NaturalImageScreen({ navigation, route }) {
  const { img } = route.params;

  return (
    <Container>
      <Image source={{ uri: img }} />
    </Container>
  );
}

//Whole Card
const Container = styled.View`
  background: black;
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
