import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="NewPostScreen"
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
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;

const styles = StyleSheet.create({});
