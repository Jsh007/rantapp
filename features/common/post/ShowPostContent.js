import React, { memo } from "react";
import { View, Text } from "react-native";
import Container from "../../common/custom/containers/Container";
import ImageBackgroundCard from "../../common/custom/containers/ImageBackgroundCard";
import Reactotron from "reactotron-react-native";

const ShowPostContent = ({ payload }) => {
  // const imageLink = `${payload.image}`;
  // Reactotron.display({
  //   name: "POST FEED DATA",
  //   preview: "SHOW POST CONTENT",
  //   value: imageLink,
  // });

  return (
    <Container
      width={"100%"}
      justifyContent={"flex-start"}
      // backgroundColor={"gray"}
      containerFlex={1}
      // height={"37px"}
    >
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          lineHeight: 30,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {payload.text}
      </Text>
      <ImageBackgroundCard
        containerMargin={"0px"}
        width={"100%"}
        height={"271px"}
        source={require("../../../assets/images/post-img.png")}
        // resizeMode="cover"
        style={
          {
            // borderWidth: 5,
            // borderColor: "gray",
            // borderRadius: 60,
          }
        }
        imageStyle={{
          // borderRadius: 60,
          resizeMode: "cover",
        }}
      />
    </Container>
  );
};

export default memo(ShowPostContent);
