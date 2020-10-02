import React from "react";
import Container from "../custom/containers/Container";
import { Label } from "../custom/text/text";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Reactotron from "reactotron-react-native";
import { View, Text } from "react-native";

// This should be a react component which receives a payload containing ViewCount figures directly from the firebase slice in the redux state
// and Icon to display of render side-by-side with the counting figures
// If it works this way, you'll need only one such component to all your stats and counters. Then change the file name to Stats
// Simply connect the parent component to fiebase.redux state and sync the postViews, CommenCounts and SharesCount separately
// use the value from payload.postId to connect to to redux using useFirestoreConnect and select & sync that state to this component
function Stat({ payload }) {
  // Reactotron.display({
  //   name: "STAT DATA",
  //   preview: "Who's in payload",
  //   value: payload,
  // });
  const icon = `${payload.icon}`;
  return (
    <Container
      width={"20%"}
      containerPaddingTop={"0px"}
      containerPaddingBottom={"0px"}
      containerMargin={"0px"}
    >
      <MaterialCommunityIcons name={icon} size={28} color="#707070" />
      <Label weight={"bold"} color="#707070" itemStyle="italic">
        {payload.value}
      </Label>
    </Container>
  );
}

export default Stat;
