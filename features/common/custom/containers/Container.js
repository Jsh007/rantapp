import styled from "styled-components/native";

const Container = styled.View`
  flex: ${(props) => props.containerFlex || "1"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  margin: ${(props) => props.containerMargin || "0px"};
  margin-top: ${(props) => props.containerMarginTop || "0px"};
  margin-bottom: ${(props) => props.containerMarginBottom || "0px"};
  margin-left: ${(props) => props.containerMarginLeft || "0px"};
  margin-right: ${(props) => props.containerMarginRight || "0px"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  width: ${(props) => props.width || "80%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.containerPadding || "0px"};
  padding-top: ${(props) => props.containerPaddingTop || "0px"};
  padding-bottom: ${(props) => props.containerPaddingBottom || "0px"};
  padding-left: ${(props) => props.containerPaddingLeft || "0px"};
  padding-right: ${(props) => props.containerPaddingRight || "0px"};
  border-radius: ${(props) => props.radius || "0"};
  overflow: ${(props) => props.overflow || "hidden"};
`;

export default Container;
