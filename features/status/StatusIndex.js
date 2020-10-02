import React from "react";
import { View, Text } from "react-native";
import { styles } from "../common/style/styles";

const statusIndex = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STATUS INDEX - RENDER ON TOP</Text>
    </View>
  );
};

export default statusIndex;

// List of all pending statuses in the App to be displayed on the Top part of the app on the Feed screens.
// This component should only be used to style the base container of teh status list. Specifically,
/*
setting the container width, padding and margin
- It should not pull data or connect to redux.
- it should simply output the children it is wrapping via {props.children}
- The various status type indexs are responsible for pulling up their types of status data,
mapping through and rendering each using the singlestatusitem component.
** They should individually connect to firestore using firestoreConnect and sync;
their respecive status data to the firestiore reducer in teh redux state.
see the respective index file for details:
*/
