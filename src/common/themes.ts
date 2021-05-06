import baseStyled, { ThemedStyledInterface } from "styled-components";

export const vouchLight = {
  name: "main",
  colors: {
    text: "#082842",
  },
  color: {
    primaryActive: "#34bebd",
    secondaryActive: "#082842",
    primaryDisabled: "#f2f2f2",
    mainHighlight: "#34bebd",
    alternateBackground: "#f2f2f2",
    mainBodyText: "#082842",
    highlightBodyText: "#ffffff",
    disabledBodyText: "#000000",
  },
};

export const vouchDark = {
  name: "mainDark",
};

export type VouchLightTheme = typeof vouchLight;
export type VouchDarkTheme = typeof vouchDark;

export default baseStyled as ThemedStyledInterface<VouchLightTheme>;
