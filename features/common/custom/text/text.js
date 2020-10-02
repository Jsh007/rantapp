// Create ContentText1 - 3, ContentText 1- 3, ContentText 1-3
import styled from "styled-components/native";

// Title texts
export const Title = styled.Text`
  margin: ${(props) => props.itemMargin || "16px"};
  margin-left: ${(props) => props.itemPaddingLeft || "0px"};
  margin-right: ${(props) => props.itemPaddingRight || "0px"};
  margin-top: ${(props) => props.itemPaddingTop || "0px"};
  margin-bottom: ${(props) => props.itemPaddingBottom || "0px"};
  padding: ${(props) => props.itemPadding || "0px"};
  padding-left: ${(props) => props.itemPaddingLeft || "0px"};
  padding-right: ${(props) => props.itemPaddingRight || "0px"};
  padding-top: ${(props) => props.itemPaddingtop || "0px"};
  padding-bottom: ${(props) => props.itemPaddingBottom || "0px"};
  font-size: ${(props) => props.size || "26px"};
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.weight || "bold"};
  text-transform: ${(props) => props.textCase || "capitalize"};
`;

// Body texts
export const ContentText = styled.Text`
  font-size: ${(props) => props.size || "20px"};
  /* margin: 4px; */
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.weight || "normal"};
  text-transform: ${(props) => props.textCase || "capitalize"};
  text-align: ${(props) => props.itemAlign || "left"};
  padding: ${(props) => props.itemPadding || "0px"};
  padding-top: ${(props) => props.itemTopPadding || "0px"};
  padding-bottom: ${(props) => props.itemBottomPadding || "0px"};
  padding-left: ${(props) => props.itemPaddingLeft || "0px"};
  padding-right: ${(props) => props.itemPaddingRight || "0px"};
  margin: ${(props) => props.itemMargin || "0px"};
  margin-bottom: ${(props) => props.itemBottomMargin || "0px"};
  margin-top: ${(props) => props.itemTopMargin || "0px"};
  margin-left: ${(props) => props.itemPaddingLeft || "0px"};
  margin-right: ${(props) => props.itemPaddingRight || "0px"};
  line-height: ${(props) => props.lineHeight || "25px"};
  width: ${(props) => props.width || "auto"};
  font-style: ${(props) => props.itemStyle || "normal"};
`;

export const Label = styled.Text`
  font-size: ${(props) => props.size || "16px"};
  /* margin: 4px; */
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.weight || "normal"};
  text-transform: ${(props) => props.textCase || "capitalize"};
  text-align: ${(props) => props.itemAlign || "left"};
  padding: ${(props) => props.itemPadding || "0px"};
  padding-top: ${(props) => props.itemTopPadding || "0px"};
  padding-bottom: ${(props) => props.itemBottomPadding || "0px"};
  padding-left: ${(props) => props.itemPaddingLeft || "0px"};
  padding-right: ${(props) => props.itemPaddingRight || "0px"};
  margin: ${(props) => props.itemMargin || "0px"};
  margin-bottom: ${(props) => props.itemBottomMargin || "0px"};
  margin-top: ${(props) => props.itemTopMargin || "0px"};
  margin-left: ${(props) => props.itemPaddingLeft || "0px"};
  margin-right: ${(props) => props.itemPaddingRight || "0px"};
  line-height: ${(props) => props.lineHeight || "25px"};
  width: ${(props) => props.width || "auto"};
  font-style: ${(props) => props.itemStyle || "normal"};
`;
