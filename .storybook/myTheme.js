import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "gray",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "#202B8A",

  // Form colors
  inputBg: "white",
  inputBorder: "gray",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Aiden Health",
  brandUrl: "https://jacobkleiman.com/AidenHealth",
  brandImage: "https://potty-angel-react.s3-us-west-2.amazonaws.com/aiden-light.svg"
});