import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const UserEditStalkersList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> YOUR STALKERS</Text>
    </View>
  );
};

export default UserEditStalkersList;

// Displays list of a user's stalkers and give option to block - In edit mode.
