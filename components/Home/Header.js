import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconsContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/small/16/000000/filled-plus-2-math.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconsContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/16/000000/like--v1.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconsContainer}>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}></Text>
        </View>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/16/000000/facebook-messenger--v1.png",
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#ff3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
export default Header;
