import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../common/custom/containers/Container";
import ImageBackgroundCard from "../common/custom/containers/ImageBackgroundCard";
import RantInput from "../common/custom/forms/RantInput";
import RantButton from "../common/custom/buttons/Button";

const ShowCommentEditor = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          // alignContent: "center",
        }}
      >
        {/* They each should be in their individual components: CommentEditor and audioEditor. the import and consum them here. They should have their own local states and the
        data they capture ( text and audion respectively) should  then be pushed to firestore by dispatching an action from the commentsSlice 
        or postSlice */}
        <RantInput
          placeholder="Rant here"
          width={"80%"}
          backgroundColor={"#ccc"}
          borderColor={"#ccc"}
          borderRadius={"30px"}
          textColor={"#000"}
          fontSize={"16px"}
          borderWidth={"2px"}
          multiline
          inputPaddingTop={"10px"}
          inputPaddingBottom={"10px"}
          inputPaddingLeft={"20px"}
        />
        <RantButton
          // title="record"
          //   onPress={}
          buttonIcon={"microphone"}
          backgroundColor={"#F17122"}
          width={"50px"}
          height={"50px"}
          borderRadius={"30px"}
          textColor={"#fff"}
          fontWeight={"bold"}
          fontSize={"18px"}
          textCase={"uppercase"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    marginBottom: 20,
  },
});

export default memo(ShowCommentEditor);

// Renders; Comments TextEditor and AudioEditor
