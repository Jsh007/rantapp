/*
The Editors should have localstates:
1. textEditor: [textComment, setTextComment]= useState("").
2. audioEditor: [audioComment, setaudioComment] = useState("");

- They both should receive a function which dispatches the appropriate action
1. textEditor: should receive createTextComment(textComment) - then do dispatch(addTextComment(textComment))
2. audioEditor: should receive createAudioComment(audioComment) - then do dispatch(addAudioComment(audioComment))
*/
