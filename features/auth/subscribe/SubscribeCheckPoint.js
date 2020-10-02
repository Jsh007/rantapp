import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const SubscribeCheckPoint = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SUBSCRIBE NOTICE</Text>
    </View>
  );
};

export default SubscribeCheckPoint;

// checks if the user has a valid subscription else prints a persistent modalbox containing info stating that he has no active
// subscription with a "pay now" button. or just push or navigate to subscription stack nav. (made up of
// the following screen flows: paymentForm->(Success confirmation dialog box and naviagting to rootStack Nav after 1min
// Failure confirmation ModalBox and closes after 1min, thus returning back to the form))
// should be the first screen in the Subscribe stack nav. Pressing pay should navigate to paystack's payment form.
// A cloud function should run every 3-5 hours to confirm that a logged in user still has active subscription.
