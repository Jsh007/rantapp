// This components should receive a status ID
/*
Then connect to firestore reducer in the global redux state. The firstoreCVonnec will
 locate: statuses/{$statusId received}/viewers (subcollection)
in firestore and sync it withr edux.
Then you can now use UseSelector to  grab that state and display on a modal
Use:
1. Container - rantSmallCard
2. Buttons (stalk) - rantBtnS: onPress, dispatch the stalkUser action of the usersSlice
*/
