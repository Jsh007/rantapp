import React from "react";
import { View, Text } from "react-native";
import { styles } from "../common/style/styles";

const ModPendingUsers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PENDING USERS - MOD</Text>
    </View>
  );
};

export default ModPendingUsers;

/*
MAIN DUTY: Import the const getGroupPendingUsers from modSlice.js. 
grab the current user's firestore doc, retreive his modGroups array. map through and for every item in it,
Use useSelctor to grab data from getGroupPendingUsers pasing it the groupId in the loop. This should retun only the
pending users of that group.
Then display/render the returned data on the <singleSettingsItem payload={payload}/> by passing the returned data to it.

remember: always use payload as props name to send data to a child component. This way you can destructure from it
in the child component's prop like so; {name, image, } instead of doing; props.payload.name

** This also apply to other major mod UI components - modpendingPosts, modpendingstatus
*/
