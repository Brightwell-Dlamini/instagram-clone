import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/LoginScreen/LoginForm";
const INSTAGRAM_LOGO =
  "https://runlaughlin.com/wp-content/uploads/2018/03/instagram-run-laughlin.png";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: INSTAGRAM_LOGO,
            height: 100,
            width: 100,
          }}
        />
      </View>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
