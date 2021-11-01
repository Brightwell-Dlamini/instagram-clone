import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "../images/like.svg",
    likedImageUrl: "../images/liked.svg",
  },
  { name: "Comment", imageUrl: "../../images/comment.svg" },
  { name: "Share", imageUrl: "../images/share.svg" },
  { name: "Save", imageUrl: "" },
];
const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};
const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <TouchableOpacity>
      <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
    </TouchableOpacity>
  </View>
);
const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);
//const PostFooter =( { post })=>();
const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 6,
    borderWidth: 1.5,
    borderColor: "#ff8501",
  },
});
export default Post;
