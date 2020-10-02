import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const UserEditCommentsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Your latest Comments</Text>
    </View>
  );
};

export default UserEditCommentsList;

// Displays the current user's comments and give options to delete or hide - In edit mode.
