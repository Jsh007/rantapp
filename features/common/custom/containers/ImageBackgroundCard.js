/* 
Use it to create a component that takes in a background Image, like a profile image or gallery image (not need for it). assign props
that'll let you turn it into squared or rounded in order To accommodate staus card. profile image, group image and others.
When using for profile image & group image; set border-radius: 60px; for status card -   border-radius: 5px
*/
import styled from "styled-components/native";

const ImageBackgroundcard = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "120px"};
  margin: ${(props) => props.containerMargin || "0px"};
  margin-top: ${(props) => props.containerMarginTop || "0px"};
  margin-bottom: ${(props) => props.containerMarginBottom || "0px"};
  margin-left: ${(props) => props.containerMarginLeft || "0px"};
  margin-right: ${(props) => props.containerMarginRight || "0px"};
`;

export default ImageBackgroundcard;
