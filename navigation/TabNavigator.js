import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  MainStackNavigator,
  LakesStackNavigator,
  ProfileStackNavigator,
  SocialStackNavigator,
  MapStackNavigator,
  DiscoverStackNavigator
} from "./StackNavigator";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black"
      }}
    >
      {/* <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )
        }}
      /> */}
      <Tab.Screen
        name="Home"
        component={LakesStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-search" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-map" size={size} color={color} />
          )
        }}
      />
      {/* <Tab.Screen
        name="Social"
        component={SocialStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-person" size={size} color={color} />
          )
        }}
      />*/}
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-photos" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
