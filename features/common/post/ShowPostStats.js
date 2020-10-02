import React from "react";
import Container from "../../common/custom/containers/Container";
import Stat from "../stats/Stat";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const ShowPostStats = ({ payload }) => {
  return (
    <Container
      width={"100%"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      // backgroundColor={"gray"}
      containerFlex={1}
      containerMarginBottom={"10px"}
      containerPaddingLeft={"10px"}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stat payload={payload.views} />
        <Stat payload={payload.shares} />
        <Stat payload={payload.comments} />
      </View>
    </Container>
  );
};

export default ShowPostStats;

// Renders (viewscount, commentscount and sharescount) from stats
// Render the statc component here. then connect this component to the firebase.posts.{$postId} (postId to be received from the loop) state and sync its data
// Then do; const data = useSelector(state => state.firebase.post.postId(received from the loop)). Then  const postViews = data.postViews
// const shareCount = data.shareCount and const commentsCount = data.commensCount
// These variables are what you should pass on to the props of the respective instances of the <stats /> component
// depending on what you want it to do, this way the <stat /> component which received postViews data will render postViews and so on
