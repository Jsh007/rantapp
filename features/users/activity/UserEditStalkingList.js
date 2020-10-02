import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const UserEditStalkingList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOU'RE STALKING : </Text>
    </View>
  );
};

export default UserEditStalkingList;

// Displays list of a user's stalking and give option to block and unstalk - In edit mode.
