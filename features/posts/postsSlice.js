// MAIN DUTY: Connect, push and retrive data from the Posts collection and subcollections. Also preselect
// data from the corresponding firestore slice (i.e firestore.posts) in the redux state.

// ### IMPORTANT NOTE: ONLY DISPATCH ACTIONS WHEN YOU WANT TO PUSH DATA TO FIREBASE. TO RETIRVE DATA, SIMPLY USE
// USESELECTOR FROM A UI COMPONENT ( A COMPONENT WHICH ONLY DISPLAYS DATA BUT NOT CAPTURE) PASSING IT
// A REFERENCE TO A REDUX STATE. This will BRING SUCH DATA TO THE LOCAL STATE OF THE UI COMPONENT.
// YOU SHOULD ONLY RETREIVE DATA FROM REDUX STATE, NOT DIRECTLY FROM FIREBASE.

// Some Asyn actions
/*
## ADDING COMMENTS - for processing a user's comment to a post
Required parameters: userId, postId (from the post loop), groupId or name, data object/payload to push to firestore.
Auto/provided parameters: commentId, CreatedAt, 
LOCATION: groups/${groupId}/posts/${postId}/comments -> CHANGED TO: posts/${postId}/comments
1. addCommentToPost
2. addTextCommentToPost
3. 
CHANGED: Comments now occupy own top-level collection, nolonger a subcollection under post doc. Now;
creating a comment simply means adding a doc to the comments collection but attaching a userID(as authorId) and postID (ID of the post
    being commented on either gotten from the ui flatlist item key or from the navigation/route props)
STRUCTURE OF THE DOC

##VIEWING COMMENTS.



## ADDING POSTS - for processing a user's post to a group.
Required parameters: userId, groupId, post's data/payload to push to firestore
PAYLOAD STRUCTURE
payload: {
  userId: 1234,
  groupId: 6773,
  data: {
text: "text content of post",
image: "image url of post"
  }
}
TARGET STORAGE LOCATION: posts/
1. addPostToGroup or createPost
2. 
STRUCTURE OF DOC
Auto_Id: {
    PostGroup: {selected group's Id}, - to be selected by current user in the editor
    AuthorId: {current user's Id},
    createdAt: firebase timestamp,
    text: pulled from the editor's multiline text input's state,
    image: the returned url from firebase storage bucket after user's uploaded image was saved 
    postViewsCount: updated/incremented by a cloudfunction which fires eachtime the post is rendered on a device
    try; useEffect(,[]) or useMemo()
    postCommentsCount: Updated/incremented by a cloud function which fires eachtime a new doc is added to the post's
    comments subcollection
    postShareCount: updated/incremented by a cloud function which fires eachtime their is a successful share from a device.
}




## VIEWING POSTS - for processing, retrieval and rendering of a user's authorized posts.
PROCEEDURE: Grab the groupId and User Id from the groupAuth screen and send to the premiumPostsFeed, then use
it to grab a state from the firestore reducer slice of the redux state. e.g if the groupId passed corresponds to
the 'ballers group", connect this component via the firestore reducer to this firestore location; posts/${groupId}, 
then using  useSelector, select this redux state; firestore.posts.${groupId or name} or use what you specified in
 the storeAs. 
 Connect firestore to (using firestoreConnect); Collection: posts, conditions: where postGroup == $groupId
Required parameters: userId, groupId.
REQUIRED CHECKS (by the groupfeed component): 
1. If current user exists in the group's ($groupId) users subcollection. Although this check has already be done by
the groupAuth.
REQUIRED PRESELECTED STATE (Preselected stateclice isn't necessary because we're gonna mostly be selecting from firestore
slice)
1. showgroupposts: (state, groupId) => state.firestore.posts.${groupid}

BOTTOM LINE:
1. ADDING POST: Use addPost to push data retreieved from firebase to the slice's state.
2. SHOWING POSTS: Use useSelector to grab the slice's piece of the redux store state and display on a frontend ui component. Meanwhile,
the slice's state will be retrieved anbd kept updated by the redux-firestore store enhancer. updates/syncing will heppen as docs are created
on the post collection. There's no need to have a aync thunk action creator for pulling/retreiving posts from firestore

NEW ADDITION: deletePost - this should take in the id of the post to delete and that of the group
NEW DECISIONS:
1. The data manipulation functionalities should be carried out by thunk action creators as follows:
- USER LEVEL ACTIONS: addPost, deletePost, updatePost ADMIN-LEVEL ACTION: lockUserFeed (make the post feed unaccessible to a user),
lockDownFeed (make the post feed unaccessible to all users, maybe for maintenance or investigation purposes)
OPERATIONS/UX LEVEL: 
ADDING COUNTS/VALUES TO FIELDS (THUNK FUNCTIONS)
- addPostViewCount, - addCommentCount, -addShareCount - dispatch these action passing it the postId from useMemo or UseEffect in the postIndex
component.
GETTING VALUES/FIELDS
Do this from within the consuming component. Connect it to firebase/firestore, to the posts collection and appropriate doc, then select it from 
the redux store state and display on the component.
2. The status and error reporting functionalities should be carried out by regular actions and dispatched after awaiting the 
results/data from the thunk action as follows (use asyn - await):
- postAdded, - postDeleted, postUpdated (and their error counterpart e.g postAddError, postDeleteError, postUpdateError)

BASIC RULE:
1. DON'T RETRIEVE OR PULL DATA FROM FIRESTORE FOROM WITHIN ANY SLICE. YOU WON'T HAVE WHERE TO SAVE IT, USELESS TO STORE/PUISH IT TO THE 
SLICE'S STATE. DO THE BELOW INSTEAD. 
2. CONNECT THE VARIOUS UI COMPONENTS THAT NEEDS DATA (E.G USER PROFILE SINGLE COMPONENTS, POSTS SINGLE COMPONENTS, STATUS SINGLE COMPONENTS ETC)
TO THE RELEVANT FIREBASE PATH (COLLECTION/ TARGETTING DOC, SUBCOLLECTION AND USING CONDITIONALS). USE REDUX-FIRESTORE FOR THIS
3. NOTIFICATION AND ERROR REPORTING SHOULD BE DONE IN THE EXTRAREDUCER USING THE ASYNC ACTION'S STATUES [.fullfilled] and [.rejected]
*/

/*
There's no need to populate a slice's local state(except that of users coz a user's notification messages doesn't exist in firestore).
Hence, no need for regular actions. Only provide thunk actions that'll update/push data to firestore.
To retrieve data from the appropriate piece of firestore reducer use useFirestoreConnect from redux-firestore in the ui component that needs
such data
ONLY FETCH DATA FROM WITHIN A SLICE FILE FROM OTHER REMOTE SERVICES APART FROM FIREBASE. FIRESTORE DATA MUST BE FETCHED VIA REDUX-FIRESTORE
FROM WITHIN A UI COMPONENT


CALCULATING POSTVIEW: dispatch the addPostViewCount inside a useEffect,[] for each post in the loop

BASIC OPERATION:
We're doing CRUD. The Create, Update and Delete is implemented in the slice file while the Read is being done in the respective Ui components via
redux-firestore's useFirestoreConnect and useslector
*/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: "idle",
    posts: [],
    1: {
      authorid: 123,
      groupid: 456,
      text: "This is the body of this post. You can read it again and again",
      image: "Image coming soon",
      excerpt: " This is a short excerpt of this post",
      viewscount: 300,
      commentscount: 150,
      sharescount: 15,
      approved: true,
      createdAt: "today",
    },
    2: {
      authorid: 352,
      groupid: 856,
      text: "This is the body of this post. You can read it again and again",
      image: "Image coming soon",
      excerpt: " This is a short excerpt of this post",
      viewscount: 300,
      commentscount: 150,
      sharescount: 15,
      approved: true,
      createdAt: "today",
    },
  },
  reducers: {},
  extraReducers: {},
});
/*
PAYLOAD STRUCTURE
COMING FROM FRONTEND UI COMPONENT
payload: {
  userId: 1234,
  groupId: 6773,
  data: {
text: "text content of post",
image: "image url of post"
  }
}
BASICALLY, THE PLAIN ACTION CREATORS (under the reducers key) should only track the progress/process state.
Recommended tracked statuses: Starting..., received..., error/failed... or use the async thunk statuses in the extra reducers

*/

// To handle post creation
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (
    receivedArg,
    { dispatch, getState, extra, requestId, signal, rejectWithValue }
  ) => {
    // Dispatch process start action here
    try {
      // dispatch the postAdded action from the usersSlice passing it the response from firestore. Retrieve at the point of dispatch from
      // the slice's piece of redux store using useSelector
      // Dispatch data received action here
    } catch (error) {
      // dispatch error action here
    }
  }
);

// To handle post Editing/updating
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (
    receivedArg,
    { dispatch, getState, extra, requestId, signal, rejectWithValue }
  ) => {
    try {
      // dispatch the postUpdated action from the usersSlice passing it the response from firestore. Retrieve at the point of dispatch from
      // the slice's piece of redux store using useSelector
    } catch (error) {
      // dispatch the postAdd error of the usersSlice
    }
  }
);

// To handle post deletion
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (
    receivedArg,
    { dispatch, getState, extra, requestId, signal, rejectWithValue }
  ) => {
    try {
      // dispatch the postDeleted action from the usersSlice passing it the response from firestore. Retrieve at the point of dispatch from
      // the slice's piece of redux store using useSelector
    } catch (error) {
      // dispatch the postAdd error of the usersSlice
    }
  }
);

// OTHER ASYCN THUNKS:
// - addPostViewsCount, - addPostShareCount, -postCommentsCount will be pulled from the ui component, s
/*
DISPLAYING Comments: The comments index ui component should be connected to the comments collection and all docs with a postId field == the received
ID (I.e Id of the post in the loop). Then check their type, if audio; render using the single audioComment component. if text; render using
the singleComment component
*/

// export const {} = postsSlice.actions;
export default postsSlice.reducer;
