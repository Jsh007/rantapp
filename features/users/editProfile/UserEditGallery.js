import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../common/style/styles";

const UserEditGallery = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> EDIT GALLERY</Text>
    </View>
  );
};

export default UserEditGallery;

//Displays the current user's data from his gallery subcollection - In Edit mode with options to save/update.
// This component should render the images pulled from the user's storage bucket with the imageurls pulled from
// his gallery subcollection.
// There should be options to rearrange by dragging, delete and upload more images ( max of 10)
/*
- In the preview, all uploaded images should be nicely displayed in a carousel.
- Each uploaded Image should be nicely printed in custom Image thumbnail underneat the prieviw along with a delete btn.
- There should be a custom stylish upload button further down.

** See your notes on rebranded gallery edit for details.
*/
