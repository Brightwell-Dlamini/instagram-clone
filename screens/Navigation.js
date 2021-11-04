import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        //options={screenOptions}
      />
      <Stack.Screen
        name="NewPostScreen"
        component={NewPostScreen}
        //options={screenOptions}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        //options={screenOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;

const styles = StyleSheet.create({});
