import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const Alerts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NOTIFICATIONS LIST</Text>
    </View>
  );
};

export default Alerts;

/*
This component should pull and list/dislay all of the current user's notifications and alerts:
- Comments on their posts.
- Someone Stalking them.
- Someone viewing their profile.
The Tab Icon should receive the tital count of alerts as a badge or bubble. The chatfeed should implement same.
*/
