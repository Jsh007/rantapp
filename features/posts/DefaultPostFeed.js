import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { styles } from "../common/style/styles";
import Reactotron from "reactotron-react-native";
import SinglePost from "../common/post/SinglePost";
import { LinearGradient } from "expo-linear-gradient";
import Container from "../common/custom/containers/Container";

let postData = [
  {
    postId: "1",
    authorId: 123,
    groupId: 456,
    text: "This is the body of this post. You can read it again and again",
    image: "Image coming soon",
    excerpt: " This is a short excerpt of this post",
    viewsCount: "350k",
    commentsCount: "150k",
    sharesCount: "158k",
    approved: true,
    createdAt: "Today",
  },
  {
    postId: "2",
    authorId: 352,
    groupId: 856,
    text: "This is the body of this post. You can read it again and again",
    image: "Image coming soon",
    excerpt: " This is a short excerpt of this post",
    viewsCount: 300,
    commentsCount: 150,
    sharesCount: 15,
    approved: true,
    createdAt: "Today",
  },
  {
    postId: "3",
    authorId: 352,
    groupId: 856,
    text: "This is the body of this post. Yes, You can read it again and again",
    image: "Image coming soon",
    excerpt: " This is a short excerpt of this post",
    viewsCount: 380,
    commentsCount: 150,
    sharesCount: 1587,
    approved: true,
    createdAt: "Today",
  },
  {
    postId: "4",
    authorId: 352,
    groupId: 856,
    text:
      "This is the body of this post. Yes, You can read it again and again. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto. at ipsa accusamus obcaecati voluptates quidem sapiente vel doloremque. dolore quia dicta, repellendus unde consequuntur aut aperiam possimus. laborum? Voluptatem?",
    image: "Image coming soon",
    excerpt: " This is to a short excerpt of this post",
    viewsCount: "320k",
    commentsCount: "150k",
    sharesCount: "1587k",
    approved: true,
    createdAt: "Today",
  },
];

const DefaultPostFeed = ({ navigation }) => {
  const renderItem = ({ item }) => <SinglePost data={item} />;
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#9C51B6" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#5946B2" }}>
        <LinearGradient
          colors={["#FAFAFA", "#ECECEC"]}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={postData}
            renderItem={renderItem}
            keyExtractor={(item) => item.postId}
            contentContainerStyle={{ paddingVertical: 20 }}
          />
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

export default DefaultPostFeed;
