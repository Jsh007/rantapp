import React from "react";
import { View, Text } from "react-native";
import { styles } from "../common/style/styles";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFILE SCREEN</Text>
    </View>
  );
};

export default UserProfile;

// This Ui component should display a user's Bio Info, GALLERY,  header section.

/* 
Connects to firestore using firestore connect to: 
{
  collection: "users",
  doc:`${userid}',
  subCollections: [
    {collection: "gallery"}
    REMOVE THE BELOW SUBCOLLECTIONS. GET THE STALKER AND STALKING COUNT FROM THE USER DOC
    {collection: "stalkers"} - create a stalkersCount in the user doc which will store the number of stalkers
    {collection: "stalking"}- create a stalkingCount in the user doc which will store the number of stalkings
  ]
  storeAs: "userData"
}
and sync the reducer to pull data from firestore.users.userData.ordered (or data)
const data = select((state)=>state.firestore.userData.ordered)
DESTRUCTURE DATA AND STORE IN A NEW ARRAY AS NEEDED, LIKE SO;
Gallery
const {gallery} = data;
Header
const {stalkersCount, stalkingCount, profileImage ...headerData} = date; 
Bio info
const {school, city, state, about, name ...bioData} = date; 

Then pass:
1. galley to showUserGALLERY
2. headerData to showProfileheader
3.BioData to showprofileinfo
AND Options for viewer of the profile to:
1. Stalk the user - This will include the current user in the user's stalkers subcollection with a blockedStatus of false.
2. Chat or retrieve the gifted chat chat session between the current user and the user. If such doesn't exist, initiate 
the creation of such session. 

*/
