import React, { memo } from "react";
import { View, Text } from "react-native";
import Container from "../../common/custom/containers/Container";
import ImageBackgroundCard from "../../common/custom/containers/ImageBackgroundCard";

// Pull in data from teh currently logged in user's auth state
const ShowPostHeader = ({ payload }) => {
  return (
    <Container
      width={"100%"}
      flexDirection={"row"}
      justifyContent={"flex-start"}
      // backgroundColor={"gray"}
      containerFlex={1}
      containerMargin={"0px"}
      // height={"37px"}
    >
      <View>
        <ImageBackgroundCard
          containerMarginTop={"10px"}
          containerMarginBottom={"10px"}
          containerMarginLeft={"10px"}
          containerMarginRight={"10px"}
          width={"60px"}
          height={"60px"}
          source={require("../../../assets/images/josh9.jpeg")}
          // resizeMode="cover"
          style={{
            borderRadius: 60,
          }}
          imageStyle={{
            borderRadius: 60,
            resizeMode: "cover",
          }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Justice Eigbe</Text>
        <Text style={{ fontSize: 15 }}>{payload.post.date}</Text>
      </View>
    </Container>
  );
};

export default memo(ShowPostHeader);
