import React, { memo, useMemo } from "react";
import Container from "../custom/containers/Container";
import ShowPostHeader from "./ShowPostHeader";
import ShowPostContent from "./ShowPostContent";
import ShowPostStats from "./ShowPostStats";
import ShowCommentsIndex from "../../comments/ShowCommentsIndex";
import ShowCommentEditor from "../../comments/ShowCommentEditor";
import Reactotron from "reactotron-react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import RantButton from "../../common/custom/buttons/Button";
// import {
//     dWidth,
//     dHeight,
//     btnShadow,
//     inputShadow,
//     Logo,
//   } from "../../common/variables";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SinglePost = ({ data }) => {
  // memoize data; arrays, objects and functions defined within the component
  const statData = useMemo(() => {
    return {
      views: {
        icon: "eye-outline",
        value: data.viewsCount,
        postId: data.postId,
      },
      shares: {
        icon: "chat-outline",
        value: data.sharesCount,
        postId: data.postId,
      },
      comments: {
        icon: "share-outline",
        value: data.commentsCount,
        postId: data.postId,
      },
    };
  }, [statData]);

  const headerData = useMemo(() => {
    return {
      auth: {},
      post: {
        date: data.createdAt,
      },
    };
  }, [headerData]);

  const postData = useMemo(() => {
    return {
      image: "../../../assets/images/post-img.png",
      text: data.text,
    };
  }, []);
  const commentIndexData = {
    postId: data.postId,
  };

  return (
    <View style={styles.tempContainer}>
      <ShowPostHeader payload={headerData} />
      <ShowPostContent payload={postData} />
      <ShowPostStats payload={statData} />
      <RantButton
        title="See all Rants..." // concatinate a template string containing the commenst count here. This should toggle a showComments
        // state on the single post on or off, if on, the below commentsIndex should be displayed else it should be hidden or comments should
        // be retrieved or not retrieved
        // onPress={() => handleSubmit({ email, password }, fbref)}
        // backgroundColor={"#383839"}
        width={"80%"}
        height={"40px"}
        borderRadius={"0px"}
        textColor={"#707070"}
        textAlign={"left"}
        contentJustify={"flex-start"}
        itemStyle={"italic"}
        // fontWeight={"bold"}
        fontSize={"20px"}
        // textCase={"uppercase"}
        // borderSize={"2px"}
        borderColor={"#9F9F9F"}
        buttonMarginTop={"10px"}
        buttonMarginBottom={"10px"}
      />
      <ShowCommentsIndex payload={commentIndexData} />
      <ShowCommentEditor />
    </View>
  );
};

const styles = StyleSheet.create({
  tempContainer: {
    flex: 1,
    width: wp("100%"),
    backgroundColor: "#fff",
    marginBottom: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(SinglePost);

//Render all the necessary single post components (showpostheader, showpostcontent, showpoststats,
//showpostcommentindex, commentEditor from common/comment).
// in turn, it should be rendered in both the defaultgroupfeed or premiumgroupfeed components inside the data loop.
/*
TODO:ADOPT THE PATTERN IN USERPROFILE.JS
SUMMARY:
It should connect and listen to a specific doc in the posts/${postId} collection/doc
Then subcollections:

See userProfile component for reference.

This component has the following parts:
1. Top bar - renders; poster's profileImage, name, time posted (in moments ago formate)
2. Content area - renders; post image and Text
3. Stats Bar - Located below the content area - renders; postViewsCount, sharesCount and CommentsCount
4. Comments area - renders; Total comments at the top part and list of comments; i.e commentsIndex just below that. it renders each
available comment - audio or text
 
*/
