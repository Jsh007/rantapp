import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const UserEditStatus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UPLOAD/EDIT YOUR STATUS</Text>
    </View>
  );
};

export default UserEditStatus;

// Displays a user's status updates ( images and text) - In edit mode.
/*
-The images should be pulled from the user's storage bucket folder using the imageurls stored in each of the doc
in his Status subcollection and rendered nicely in a custom image component.
The text should be pulled directly from his status docs - See your notes on Rebranded status EDIT screen for users 
for details on the layout ( epect to stack them under these categories; Image Updates and Text Updates)
- There should be options to rearrange by dragging, delete and upload more images ( max of 10).
- In the preview, both image and text statuses should be displayed in a stack list each with a delete button and 
a Expiring info. See your notes on statuses.
-When a status is uploaded, a CreatedTime and expiryTime should be recorded. The status should automatically be deleted
by a cloud function when the current time exceeds the ExpiryTime
- There should be "Upload" and "Compose" buttons. OnPress, the compose should open up a modal where the user can 
input text and "save" while the upload should open the device's images explorer where he can select just one picture.
*/
