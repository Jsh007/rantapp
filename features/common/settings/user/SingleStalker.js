// Display single user along with a block button.
// These sort of components and its simblings should define the actions they wish to peform as functions
//e.g block and pass on to a resuable
// styled custom button as props to simply execute when it pressed.

// Alternatively, to properly use the power of redux, we can define a action to block a user's stalker
/*
in the usersSlice e.g blockUserStalker (stalkerId, userId) - the stalkerId and userId should be passed down from
the stalkerList or you can just get it from the loop's item.
. Then we can dispatch this action from any ui component
using useDispatch(blackuserStalker({itemfromstalkerList, currentuseridfromauth})) - createAsyncThunk only accepts
an object as argument in its dispacth. In this case, we will dispatch this action in a function called blockUser defined
inside here; singleStalker.js and passed down to the custom block button as a prop.
The button would simply execute the function when it is pressed.

** NOTE: DISPATCH REDUX ACTIONS FROM FUNCTIONS IN SINGLEITEMS COMPONENTS AND PASS ON TO CHILD ACTION UI COMPONENTS
LIKE BUTTONS. 
- FINDOUT WHAT PROPS.CHLDREND CAN DO FOR US IN THIS REGARD.
*/
