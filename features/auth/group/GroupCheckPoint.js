import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const GroupCheckPoint = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GROUP AUTHSCREEN AND LISTS</Text>
    </View>
  );
};

export default GroupCheckPoint;

// Check if current user has joined some groups and list them at the top under "Your groups" and with a "read" btn
// else list under "Join Group" heading with a "join" btn.
// should be the the first screen in the group feed stack Nav when coming from the default/base tab nav.
// Note this auth only apply to premium groups. The default/base groups "Rant base" isn't authenticated so users can
// read it without having to join.
// Basically, this should keep check on the user's permision to access groups and which groups.
