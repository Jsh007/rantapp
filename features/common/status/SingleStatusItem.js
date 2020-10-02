// This should be used to render each stauses in the statusIndex.js. It should import ui components
//(rantStatusCard, text, title, statusChip) from
//common/style
// Should be wrapped in a touchableopacity so viewers can press it and have a dialog modal opened.
// or ensure that rantstatuscard comes wrapped with a touchableopacity (PLEASE DON'T DO THIS)
// rantstatuscard should not receive data or events handlers.
// it shouldn't fire any event. To fire event when the rantstatuscard is pressed, wrap it in a touchableopacity or
//touchablewithoutfeedback component and pass a function to its onpress event.
// Hence, the touchableopacity and events should be defined here
/*
rantstatuscard IS SIMPLY A STYLED CONTAINER WHERE STATUS INFO SHOULD BE PRINTED ON. IT IS NOT TO RECEIVE DATA OR FIRE
EVENTS. IT'S JUST A WRAPPER CONTAINER WHICH GIVES RONDED ENDGES AND OTHER STYLES.

It should only display the following info from the object it received in its data prop
1. Name of user.
1b. User's profile image.
2.Total statusitems count (pics and text) - Ensure to have this field in the status docs in firestore
3. The last pic/item in the status object as bg of the status card.
. i.e a field which records the total numbers of contentitems in a status doc
const singleStatusItem = ({data, user, openmodal}) => (
    <touchableWithOutFeedBack onPress={openmodal(data, user)}>
        <rantStatusCard>
            <rantStatusChip> {data.itemsCount}<rantStatusChip>
            <rantTitleS >{user.name}</rantTitleS>
        </rantStatusCard>
    </touchableWithOutFeedBack >

    )
** Findout how to set a bg image in react native using styled component
** From the look of things, the openModal function should be defined when singleStatusItem is being used and passed on
to it in its props like so, <singleStatusItem data={item} user={user} openmodal={openModal(data, user)}/>
We are giving it placeholder arguments of data and user. Then passing the real aruguments received via props
from within the singleStatusItem component at the
point of implementation.
*/
/*
DISPLAYING STATUS DETAIL MODAL:
Define a function inside the which Opens a modal showing details of the status:
1. Auto carousel of the content. You may assign a setTimeOut of 30s per content item and when a status content items have
been seen, move to the next status
2. If the status belongs to the logged in user, show a viewers button and viewers count.

// The function should take in the current item in the returned status array while mapping through.
// as you print the singleStatusItem component bind the function you have defined above to it's onpress event handler
// or simply bind it to that of the parent which would propagate it to each individual singlestatusitem
*/
