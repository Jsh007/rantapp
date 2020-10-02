/*
A custom input component. It will perform the role of (TextInput, PasswordInput, NumberInout, EmailInput) depending
on the props passed to it. If you pass it a password prop, it will act as a password field, if you give it a number prop/attribute
it will behave like a numberInput field. This replaces all other input types. 
*/
import styled from "styled-components/native";
import { dWidth, dHeight } from "../../variables";

const RantInput = styled.TextInput.attrs((props) => ({
  secureTextEntry: props.password ? true : false,
  placeholderTextColor: "#3c3c3d70",
}))`
  font-size: ${(props) => props.fontSize || "16px"};
  background-color: ${(props) => props.backgroundColor || "#3c3c3d"};
  color: ${(props) => props.textColor || "#fff"};
  width: ${(props) => props.width || "80%"};
  letter-spacing: ${(props) => props.letterSpacing || "1px"};
  height: ${(props) => props.height || "auto"};
  border-color: ${(props) => props.borderColor || "#000"};
  border-width: ${(props) => props.borderWidth || "0px"};
  border-radius: ${(props) => props.borderRadius || "60px"};
  padding-left: ${(props) => props.inputPaddingLeft || "0px"};
  padding-right: ${(props) => props.inputPaddingRight || "0px"};
  padding-top: ${(props) => props.inputPaddingTop || "0px"};
  padding-bottom: ${(props) => props.inputPaddingBottom || "0px"};
  margin-top: ${(props) => props.inputTopMargin || "0px"};
  margin-bottom: ${(props) => props.inputBottomMargin || "16px"};
`;

export default RantInput;
