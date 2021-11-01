import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
