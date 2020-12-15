import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/DashboardScreen";
import LakeList from "../screens/LakeListScreen";
import Contact from "../screens/ContactScreen";
import Profile from "../screens/ProfileScreen";
import Social from "../screens/SocialScreen";
import MapScreen from "../screens/MapScreen";
import HeatMapScreen from "../screens/HeatMapScreen";
import LakeFishingReportScreen from "../screens/LakeFishingReportScreen";
import DiscoverScreen from "../screens/MapCloseUp";
import LakeInfo from "../screens/LakeInfoScreen";
import SignUp from "../screens/SignUpScreen";
import CreateProfile from "../screens/CreateProfileScreen";
import LakeDataEntry from "../screens/LakeDataEntryScreen";
import { SearchBar } from "react-native-elements";
import { Dimensions } from "react-native";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8"
  },
  headerTintColor: "white",
  headerBackTitle: "Back"
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: "Adventures Await",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerTransparent: true
        }}
        name="Lakes"
        component={LakeList}
      />

      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

const LakesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false
        }}
        name="Lakes"
        component={LakeList}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "18"
          }
        }}
        name="LakeInfo"
        component={LakeInfo}
      />

      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "18"
          }
        }}
        name="LakeDataEntry"
        component={LakeDataEntry}
      />

      <Stack.Screen
        options={{
          title: "Lake Images",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "22"
          }
        }}
        name="HeatMapScreen"
        component={HeatMapScreen}
      />
      <Stack.Screen
        options={{
          title: "Fishing Report",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "22"
          }
        }}
        name="LakeFishingReportScreen"
        component={LakeFishingReportScreen}
      />
    </Stack.Navigator>
  );
};
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="SignUp"
        component={SignUp}
      />

      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false
        }}
        name="CreateProfile"
        component={CreateProfile}
      />
      <Stack.Screen
        options={{
          title: "Lake Images",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "22"
          }
        }}
        name="HeatMapScreen"
        component={HeatMapScreen}
      />
    </Stack.Navigator>
  );
};

const MapStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: "Lake Monster"
        }}
        name="DiscoverScreen"
        component={DiscoverScreen}
      />

      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false
        }}
        name="LakeInfo"
        component={LakeInfo}
      />
      <Stack.Screen
        options={{
          title: "Lake Images",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "22"
          }
        }}
        name="HeatMapScreen"
        component={HeatMapScreen}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "18"
          }
        }}
        name="LakeDataEntry"
        component={LakeDataEntry}
      />
    </Stack.Navigator>
  );
};

const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: "Lake Monster"
        }}
        name="MapScreen"
        component={MapScreen}
      />

      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false
        }}
        name="LakeInfo"
        component={LakeInfo}
      />
      <Stack.Screen
        options={{
          title: "Lake Images",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "22"
          }
        }}
        name="HeatMapScreen"
        component={HeatMapScreen}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "18"
          }
        }}
        name="LakeDataEntry"
        component={LakeDataEntry}
      />
    </Stack.Navigator>
  );
};
const SocialStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Social" component={Social} />
    </Stack.Navigator>
  );
};
export {
  MainStackNavigator,
  LakesStackNavigator,
  SocialStackNavigator,
  ProfileStackNavigator,
  MapStackNavigator,
  DiscoverStackNavigator
};
