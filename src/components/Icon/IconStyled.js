import styled from "styled-components";

const setFontSize = ({ size }) => {
  switch (size) {
    case "small":
      return "18px";
    case "normal":
      return "24px";
    case "big":
      return "36px";
    case "huge":
      return "48px";
    default:
      return "24px";
  }
};

const setFontColor = ({ theme, disabled, light, color }) => {
  if (light && disabled) return "rgba(255, 255, 255, 0.3)";
  if (disabled) return "rgba(0, 0, 0, 0.26)";
  if (light) return "rgba(255, 255, 255, 1)";
  if (color) {
    return color;
  } else {
    return theme.TEXT;
  }
};

export const IconWrapper = styled.i`
  font-family: "Material Icons Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: ${setFontSize};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga";
  color: ${setFontColor};
`;
