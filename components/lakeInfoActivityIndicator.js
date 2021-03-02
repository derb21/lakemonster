import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";

function LakeInfoActivityIndicator(props, { navigation }) {
  useEffect(() => {
    return () => {};
  }, []);

  const signOut = async () => {};
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />

      <Text style={styles.infoText}>Loading Lake Information, Please Wait</Text>
    </View>
  );
}

export default LakeInfoActivityIndicator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    height: "100%",
    width: "75%",
    borderRadius: 25,
    paddingTop: "6%",
    marginRight: "auto",
    marginLeft: "auto"
  },
  infoText: {
    color: "white",
    textAlign: "center",
    paddingTop: "5%",
    fontSize: 28
  }
});
