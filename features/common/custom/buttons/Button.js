// Use for all btn sizes, pass it a width, height, bg color, border radius, text color, box-shadow, button label and more
import React from "react";
import { Label } from "../text/text";
import RantTouchableOpacity from "../basic/RantTouchableOpacity";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RantButton = ({
  title,
  onPress,
  width,
  height,
  backgroundColor,
  textColor,
  borderRadius,
  fontWeight,
  fontSize,
  textCase,
  customStyle,
  buttonMarginTop,
  buttonMarginBottom,
  buttonPaddingTop,
  buttonPaddingBottom,
  borderSize,
  borderColor,
  textAlign,
  contentJustify,
  itemStyle,
  buttonIcon,
  paddingAll,
}) => (
  <RantTouchableOpacity
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    radius={borderRadius}
    onPress={onPress}
    style={customStyle}
    marginTop={buttonMarginTop}
    marginBottom={buttonMarginBottom}
    paddingTop={buttonPaddingTop}
    paddingBottom={buttonPaddingBottom}
    borderSize={borderSize}
    borderColor={borderColor}
    contentJustify={contentJustify}
    paddingAll={paddingAll}
  >
    {title && (
      <Label
        color={textColor}
        weight={fontWeight}
        size={fontSize}
        textCase={textCase}
        itemAlign={textAlign}
        itemStyle={itemStyle}
      >
        {title}
      </Label>
    )}
    {buttonIcon && (
      <MaterialCommunityIcons name={buttonIcon} size={34} color="#fff" />
    )}
  </RantTouchableOpacity>
);
export default RantButton;
