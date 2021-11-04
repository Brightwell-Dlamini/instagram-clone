import React from "react";
("react-native-safe-area-context");
import HomeScreen from "./screens/HomeScreen";
import SignedInStack from "./screens/Navigation";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return <SignedInStack />;
}
