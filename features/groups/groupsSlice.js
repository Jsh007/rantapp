// MAIN DUTY: Process member's Joining, leaving a group.

/*
JoNING A GROUP:
This action would write the current user's name into a group's users subcollection. The Id of teh groups passed on
to the action determins which group's user's subcollection the user's info gets written into. or you can just have the groupSlice do this.
*/

/*
-> SOME ACTIONS (ASYNC)

1. addUserToGroup - should be dispatched anytime a user is joining a group by self. This action will include
a approveStatus: false in the entry. Then a mod or admin is expected to come change teh approvedStatus to true after
proper review of the join application.
2. putUserInGroup - to be fired when admin is manually adding a user to group. This action will include a
 approvedStatus: true by default.
 3. removeUserFromGroup - To be fired either when a user opt to leave a group or when he is deleetd from a group.
 This function would simply delete teh user's info from the group.
*/
