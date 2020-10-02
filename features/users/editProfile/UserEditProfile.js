import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const UserEditProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> EDIT PROFILE</Text>
    </View>
  );
};

export default UserEditProfile;

// Displays teh current user's Bio Info from the Users collection - In edit mode with options to save/update.
