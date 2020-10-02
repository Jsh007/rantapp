/*
This component is responsible for pulling up statuses of type admin from the firestore.status slice 
of the redux state and displaying each item returned using singleStatusItem 

It should connect to firestore using firestoreconnect as follows:
status collection, docs where statusType == admin
This would sync the admin statuses to the firestore.status slice of the redux state, you can now use 
useSelector to grab it, map through and pass on to the singleStatusItem for printing.
Sync with:
statuses/ get docs where statusType == "admin"
StoreAs: "adminStatus"
Then use UseSelector to grab it from the firestore.status.adminstatus slice in the redux state
*/
/*
Do:
const selector = useSelector();
const data = selector((state)=> state.firestore.adminstatus.ordered)
or
const data = selector((state)=> state.firestore.adminstatus.data)
cost user = firestore.auth().user;

** Modal definition:
const showStatusInModal = (data, user) => (
    modal.open(
    <modalheading >
    `${user.name} Status Update`
    </modalheading >
    <modalBody>
    <carousel content = {data.content}/>
    <eyeIcon onPress = {() => (<showStatusViewers stausId={data.id} />)}
    </modalBody>
    <modalFooter>
    Footer here
    </modalFooter>

)
Then in the loop, pass on the modal execution function and other data to the singleStatusItem component like so;

<singleStatusItem data={item} user={user} openmodal={showStatusInModal(data, user)}/>
*/
