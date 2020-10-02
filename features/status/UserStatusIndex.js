/*

Sync with:
statuses/ where statusType == User
and authorId == {currentuserId}
StoreAs: "UserStatus"
Then use UseSelector to grab it from the firestore.status.userStatus slice in the redux state
display this after the admin status index at number two spot
*/
