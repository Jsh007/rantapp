import styled from "styled-components/native";
import { paddingTop } from "../../variables";

// Pass the platform and statusbar values to it as props at the point of rendering/usage or right here
// This should be saved in a variable and passed into the prop like so;
// const paddingTop = Platform.OS === "android" ? StatusBar.currentHeight : 0;
// HTo be the root view of all of our components/screens
const SafeAreaView = styled.SafeAreaView`
  flex: ${(props) => props.flex || "1"};
  background-color: ${(props) => props.backgroundColor || "#fafafa"};
  /* padding-top: ${paddingTop}; */
  justify-content: center;
  align-items: center;
`;

export default SafeAreaView;
