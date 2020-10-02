import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { styles } from "../common/style/styles";

const PremiumPostFeed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GROUP FEED WITH SPECIAL AUTH SCREEN</Text>
    </View>
  );
};

export default PremiumPostFeed;

//

/*This component should display posts from the premium groups preselected in the groupSlice
1. This component should receive a payload containing (groupId, groupName and userId) from the groupcheckpoint auth screen
if the user has joined (and thus able to press the read button).
2. There should be a DropDownSelect component which sets/updates a local state named "filter"
const [filter, setFilter] = useState("allnetwork"); The default valaue is allnetwork. However, when the onChange  event
of this dropdownSelect is fired, the setFilter should take in the value of the dropdownselect and update the filter const
with it. The dropdown select should have the following options;  mynetwork, allnetworks. 
These should be used in a where clause with teh following expectations:
- allnetworks - default, posts are fetched as they hit firestore on a first com, first served basis. i.e first posted are
fetched first and displayed last in the feed (asc).
- Mynetwork - Only posts by users who exists in the user's stalkers and stalking subcollections will be fetched. 
You might accomplish this by extracting the userid from data returned from the both subcollections, then merging them into
a single array. Then loop through and for each item (i.e userid) in the array, fetch docs from the posts collection
where the "postGroup == ${item}" orderBy == createdAt


** You might also want to do a dropdown select for quick actions: "latest posts", "commented", "my city" 

2. The groupsName received shoud be used to filter the types of posts to fetch (or select from the firestore state)
since posts are now in a firstlevel collection, this should be used in the where clause e.g
collection("posts").where("postGroup == ${received groupName}").doc()
UPDATES:
We are gonna receive a groupId on the route pass down from the groupAuth screen.
we'll use this to connect to the firestore reducer slice in the redux state;
{
  collection: "posts",
  where: ["postGroup", "==" ,"groupId"] OR "groupName"
  storeAs: `${groupName}Feed`
}

Then select that state using UseSelector()
The returned data should be printed using the singlePost component
*/
