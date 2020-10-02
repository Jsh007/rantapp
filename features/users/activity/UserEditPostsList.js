import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../common/style/styles";
import Reactotron from "reactotron-react-native";

const UserEditPostsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR LATEST POSTS</Text>
      <Button title="Main Menu" onPress={() => navigation.navigate("Feed")} />
    </View>
  );
};

export default UserEditPostsList;

// Displays all a user's posts and give options to Delete or Hide - In edit mode.
