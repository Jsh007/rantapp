/*
A custom touchableopacity component. export and import into other styled components to give it shape and form and allow for
event listening. Pass it props to change its shape (eg: borderRadius), size, color, bgcolor and behaviour. 
Use this to build buttons and more
*/
import styled from "styled-components/native";
import { dWidth, dHeight } from "../../variables";

const RantTouchableOpacity = styled.TouchableOpacity`
  height: ${(props) => props.height || "0px"};
  width: ${(props) => props.width || dWidth("90%")};
  border-radius: ${(props) => props.radius || "60px"};
  justify-content: ${(props) => props.contentJustify || "center"};
  align-items: ${(props) => props.contentAlign || "center"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  /* margin-top: 16px; */
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  padding: ${(props) => props.paddingAll || "0px"};
  padding-top: ${(props) => props.paddingTop || "0px"};
  padding-bottom: ${(props) => props.paddingBottom || "0px"};
  border-width: ${(props) => props.borderSize || "0px"};
  border-color: ${(props) => props.borderColor || "#000"};
`;

export default RantTouchableOpacity;
