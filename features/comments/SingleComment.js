import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Reactotron from "reactotron-react-native";
import { Label } from "../common/custom/text/text";
import Container from "../common/custom/containers/Container";
import ImageBackgroundCard from "../common/custom/containers/ImageBackgroundCard";
const SingleComment = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "10%" }}>
        <ImageBackgroundCard
          width={"60px"}
          height={"60px"}
          source={require("../../assets/images/josh9.jpeg")}
          // resizeMode="cover"
          style={{
            // borderWidth: 5,
            // borderColor: "gray",
            borderRadius: 60,
          }}
          imageStyle={{
            borderRadius: 60,
            resizeMode: "cover",
          }}
        />
      </View>
      <View
        style={{
          width: "80%",
          backgroundColor: "#E3E3E3",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Label
          itemAlign={"left"}
          size={"20px"}
          itemAlign={"left"}
          weight={"bold"}
          itemBottomMargin={"5px"}
        >
          Justice Eigbe
        </Label>
        <Label itemAlign={"left"} size={"20px"} lineHeight={"28px"}>
          {data.text}
        </Label>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",

    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});

export default memo(SingleComment);
