/* MAIN DUTY:

1. Connect to the users collection, get the current user's info and Check if he is a mod, if no; set the 
modStatus to null. if yes, set it to true. You can simply save the user's modStatus into this slice's state.

NOTE: The various Ui components dispatching Mod actions should be connected to the Firestore.Users.{currentUserId}
Then his Mod status should be under SURVELLANCE, if it changes to false, he should be denied access to teh pages.

-> SOME PRESELECTED DATA FROM REDUX STATE.
In the respective mod workbench ui components; after verifying that the user is a mod, and while his modStatus remains
true, then using useSelector, grab the below preselected slices for each groupID found the user's modGroups array.
- Then grab the preselected getGroupInfo slice from the groups features and print the groupname, membershipCount, 
grouImage ( maybe modlist) in the header part of the listing ( using a group header component or just plain text components) 
1. getGroupPendingUsers - This should select all users with a approvedStatus of false from each group this user is
a mod in. This should pull data from the firestore slice of the 
redux store (firstore.groups.groupId.pendingUsers or use the value of storeAs). Render using the modPendingUsers component which in turn should render the singleSettingsItem component in
common/settings with the custom Mod action buttons in it.
2. getGroupPendingPosts - 
3. getPendingStatuses -

-> SOME ACTIONS.
1. approveUser: 
2. approvepost:
3. deletePost:
4.deleteUser: 

This slice should listen on the following slices via [extrareducers]; - postsSlice, groupsSlice, statusSlice. There should be asyn/thunk
action creators that'll take in a usersId (to check if current user is a mod) and groupId ( to retrieve all pending users and posts)
*/
