import { purple, neutral, yellow, red, green, blond } from "./colors";
import { primaryFont, displayFont } from "./typography";

export const defaultTheme = {
    primaryColor: purple[200],
    primaryColorDarker: purple[400],
    primaryColorHover: purple[150],
    primaryColorActive: purple[200],
    disabled: purple[100],
    textColorOnPrimary: neutral[600],
    textColorOnDark: blond[200],
    blondBackground: blond[500],
    blond: blond[500],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    textOnDisabled: neutral[300],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    primaryFont,
    displayFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}

export const darkTheme = {
    primaryColor: neutral[100],
    primaryColorDarker: purple[400],
    primaryColorHover: neutral[200],
    primaryColorActive: neutral[100],
    disabled: purple[100],
    textColorOnPrimary:  blond[200],
    blondBackground: purple[400],
    blond: blond[500],
    textColorOnDark: purple[400],
    textColor: purple[300],
    textColorInverted: neutral[500],
    textOnDisabled: neutral[300],
    formElementBackground: purple[400],
    textOnFormElementBackground: neutral[100],
    primaryFont,
    displayFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}