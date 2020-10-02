/*
This component should have local state for storage of it's captured text and Image data
postEditor: [postText, setPostText, postImage, setPostImage]= useState({postText:"", postImage:""}).

It should also receive a onSubmit function to fire when it is submitted from where it is used. 
This function should:
1. dispatch: addPostToGroup action of the postslice. It requires these arguments; authorId, groupId, postData
2. The function should receive these arguments; authorId, groupId from the implementing component. In this case, the
PostFeed component where the postEditor is being fired from. authorId should be the current user's Id fom auth, groupId
should be the Id of the group being displayed in the postfeed (premium or default post feeds) 
3. You might want to connect the editor to the appropriate firebase and firsestore slices of the redux state:
i.e firebase.auth
firestore.groups.{$groupId}  
*/
