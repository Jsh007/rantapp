import React, { memo } from "react";
import { View, Text, FlatList } from "react-native";
import Container from "../common/custom/containers/Container";
import SingleComment from "./SingleComment";

// move to common/comment and import to post index
const ShowCommentsIndex = ({ payload }) => {
  // use payload.postId to sync with the firestore slice using useFirestoreConnect and then retrieve comments using useSelector
  // this would normally be synced and retrieved from the firestore reducer.

  // DO NOT FORGET: To include the author's Image.

  let commentsData = [
    {
      commentId: "1",
      authorId: 352,
      postId: 856,
      text:
        "This is the body of this comment. Yes, You can read it again and again. Lorem ipsum dolor sit amet consectetur adipisicing elit. This is the body of this comment. Yes, You can read it again and again. Lorem ipsum dolor sit amet consectetur adipisicing elit. This is the body of this comment. Yes, You can read it again and again. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      audio: "not available now",
      createdAt: "yesterday",
    },
    {
      commentId: "2",
      authorId: 352,
      postId: 858,
      text:
        "This is the body of this comment. Yes, You can read it again and again. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      audio: "not available now",
      createdAt: "Today",
    },
    {
      commentId: "3",
      authorId: 352,
      postId: 886,
      text:
        "This is the body of this comment. Yes, You can read it again and again. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      audio: "not available now",
      createdAt: "Today",
    },
    {
      commentId: "4",
      authorId: 352,
      authorFname: "Morris",
      authorLname: "Mark",
      postId: 876,
      text:
        "This is the body of this comment. Yes, You can read it again and again. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      audio: "not available now",
      createdAt: "Today",
    },
  ];
  // IMPLEMENTING "SHOW/HIDE CONTENT": Create a local state for showComments. Then the "Show Comments" button should be used to set the state
  // to true or false
  const renderItem = ({ item }) => <SingleComment data={item} />;
  return (
    <Container
      width={"100%"}
      justifyContent={"space-between"}
      containerMarginBottom={"20px"}
      containerMarginTop={"20px"}
    >
      <FlatList
        data={commentsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.commentId}
        contentContainerStyle={{ paddingVertical: 5 }}
      />
    </Container>
  );
};

export default memo(ShowCommentsIndex);

/*
This component should receive a postID from the loop and use it to connect to firebase reducer using useFirestoreConnect. This will sync
firestore data into the redux state and you can then select the postId's slice from the state using useSelector
*/
// Renders and receives data from the singleComments component.
