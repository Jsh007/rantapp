/*
A custom touchablewithoutfeedback component. export and import into other styled components to give it shape and form and allow for
event listening. Pass it props to change it's shape (eg: borderRadius), size, color, bgcolor and behaviour. 
*/

import styled from "styled-components/native";
import { dWidth, dHeight } from "../../variables";

const RantTouchableWithoutFeedback = styled.RantTouchableWithoutFeedback`
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || dWidth("90%")};
  border-radius: ${(props) => props.radius || "60px"};
  justify-content: ${(props) => props.contentJustify || "center"};
  align-items: ${(props) => props.contentAlign || "center"};
  background-color: ${(props) => props.backgroundColor || "#000"};
  /* margin-top: 16px; */
  margin-top: ${(props) => props.marginTop || "16px"};
  margin-bottom: ${(props) => props.marginBottom || "16px"};
  /* box-shadow: 0px 0px 5px black */
`;

export default RantTouchableWithoutFeedback;
