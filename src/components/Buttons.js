import styled from 'styled-components';
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small:() => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
        border-radius: 25px;
    `,
    center:() => `
    margin: 0 auto;
    display: block;
    `,
    warning: ({ theme }) => `
    ${console.log(theme)}
        background-color: ${theme.status.warningColor};
        color: ${theme.textColorInverted};

        &:hover {
            background-color: ${theme.status.warningColorHover};
            color: ${theme.textColorInverted};

        }

        &:focus {
            outline: 3px solid ${theme.status.warningColorHover};
            background-color: ${theme.status.warningColorHover};
        }

        &:active {
            background-color: ${theme.status.warningColorActive};
        }
    `,
    secondaryButtonWarning: (theme) => `
        background: none;
        border: 2px solid ${theme.status.warningColor};
        border-color: ${theme.status.warningColor};

        &:hover {
            background-color: ${theme.status.warningColorHover};
        }

        &:focus {
            outline: 3px solid ${theme.status.warningColorHover};
            background-color: ${theme.status.warningColorHover};
        }

        &:active {
            background-color: ${theme.status.warningColorActive};
        }
    `,
    tertiaryButtonWarning: ({theme}) => `
        background: none;
        color: ${theme.status.warningColor};

        &:hover {
            background-color: ${theme.status.warningColorHover};
            color: ${theme.textColorInverted};

        }

        &:focus {
            outline: 3px solid ${theme.status.warningColorHover};
            background-color: ${theme.status.warningColorHover};
        }

        &:active {
            background-color: ${theme.status.warningColorActive};
        }
    `,
    error: ({theme}) => `
    background-color: ${theme.status.errorColor};
        color: ${theme.textColorInverted};

        &:hover {
            background-color: ${theme.status.errorColorHover};
            color: ${theme.textColorInverted};
        }

        &:focus {
            outline: 3px solid ${theme.status.errorColorHover};
            background-color: ${theme.status.errorColorHover};
        }

        &:active {
            background-color: ${theme.status.errorColorActive};
        }
    `,
    secondaryButtonError: ({theme}) => `
    background: none;
    border: 2px solid ${theme.status.errorColor};
    border-color: ${theme.status.errorColor};
    color: ${theme.textColor};

    &:hover {
        background-color: ${theme.status.errorColorHover};
        color: ${theme.textColorInverted};

    }

    &:focus {
        outline: 3px solid ${theme.status.errorColorHover};
        background-color: ${theme.status.errorColorHover};
    }

    &:active {
        background-color: ${theme.status.errorColorActive};
    }
    `,
    tertiaryButtonError: ({theme}) => `
    background: none;
        color: ${theme.status.errorColor};

        &:hover {
            background-color: ${theme.status.errorColorHover};
        }

        &:focus {
            outline: 3px solid ${theme.status.errorColorHover};
            background-color: ${theme.status.errorColorHover};
        }

        &:active {
            background-color: ${theme.status.errorColorActive};
        }
    `,
    success: ({theme}) => `
    background-color: ${theme.status.successColor};
        color: ${theme.textColorInverted};

        &:hover {
            background-color: ${theme.status.successColorHover};
            color: ${theme.textColorInverted};
        }

        &:focus {
            outline: 3px solid ${theme.status.successColorHover};
            background-color: ${theme.status.successColorHover};
        }

        &:active {
            background-color: ${theme.status.successColorActive};
        }
    `,
    secondaryButtonSuccess: ({theme}) => `
    background: none;
    border: 2px solid ${theme.status.successColor};
    border-color: ${theme.status.successColor};
    color: ${theme.textColor};

    &:hover {
        background-color: ${theme.status.successColorHover};
        color: ${theme.textColorInverted};
    }

    &:focus {
        outline: 3px solid ${theme.status.successColorHover};
        background-color: ${theme.status.successColorHover};
    }

    &:active {
        background-color: ${theme.status.successColorActive};
    }
    `,
    tertiaryButtonSuccess: ({theme}) => `
    background: none;
        color: ${theme.status.successColor};

        &:hover {
            background-color: ${theme.status.successColorHover};
            color: ${theme.textColorInverted};
        }

        &:focus {
            outline: 3px solid ${theme.status.successColorHover};
            background-color: ${theme.status.successColorHover};
        }

        &:active {
            background-color: ${theme.status.successColorActive};
        }
    `,
    navSecondary: ({theme}) => `
    // border: 2px solid ${theme.textColorOnDark};
    // border-color: ${theme.textColorOnDark};
    // color: ${theme.textColorOnDark};
    border: 2px solid ${theme.primaryColorDarker};
    border-color: ${theme.primaryColorDarker};
    margin: 0 35px;
    transition: all 0.2s linear;


    &:hover {
        background-color: ${theme.primaryColorDarker};
        color: ${theme.blond};
        transition: all 0.2s linear;
    }

    &:focus {
        outline: 3px solid ${theme.primaryColorDarker};
        background-color: ${theme.textColorOnDark};
        color: ${theme.primaryColorDarker};
    }

    &:active {
        background-color: ${theme.textColorOnDark};
        // text-decoration: underline;
        color: ${theme.primaryColorDarker};
    }
    `,
    navSecondaryInverted: ({ theme }) => `
    border: 2px solid ${theme.primaryColorDarker};
    border-color: ${theme.primaryColorDarker};
    background-color: ${theme.primaryColorDarker};
    color: ${theme.blond};
    margin: 0 15px;
    transition: all 0.2s linear;


    &:hover {
        background-color: none;
        color: ${theme.textColorInverted};
        transition: all 0.2s linear;
    }

    &:focus {
        outline: 3px solid ${theme.primaryColorDarker};
        background-color: ${theme.primaryColor};
        color: ${theme.primaryColorDarker};
    }

    &:active {
        background-color: ${theme.textColorOnDark};
        // text-decoration: underline;
        color: ${theme.primaryColorDarker};
    }
    `,
    navTertiary: ({ theme }) => `
    background: none;
    // color: ${theme.textColorOnDark};
    transition: all 0.2s linear;

    &:hover {
        // color: ${theme.textColorInverted};
        // text-decoration: underline;
        background: none;
        transition: all 0.2s linear;

    }
    &:focus:after {
        background: #F871AD;
    }
    &:active:after {
        width: 100%;
    }

    &:focus {
        // outline: 3px solid ${theme.textColorOnDark};
        background: none;
        color: #F871AD;
    }
    &:active {
        background: none;
        border: none;
        border-color: none;
        outline: none;
    }

    `
};

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 20px;
    min-width: 140px;
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
    transition: background-color 0.2s linear, color 0.2s linear;
    position: relative;
    z-index: 1;

    &:hover {
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorInverted};
    }

    &:focus {
        outline: 3px solid ${props => props.theme.primaryColorDarker};
        outline-offset: 2px;
        background-color: ${props => props.theme.primaryColorDarker};
        color: ${props => props.theme.textColorInverted};
    }
    
    &:active {
        border-color: ${props => props.theme.primaryColorActive};
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorInverted};
    }
`;

// Inherit all properties from parent Button
export const PrimaryButton = styled(Button)`
// CSS
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: black;

    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${props => props.theme.primaryColorDarker};
    color: ${props => props.theme.primaryColorDarker}; 

    &:disabled {
        background: none;
        color: ${props => props.theme.disabled};
        border-color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${props => props.theme.primaryColorDarker}; 
    // color: ${props => props.theme.textColorOnDark};
    transition: all 0.2s linear;

    &:hover {
        color: ${props => props.theme.primaryColor};
        background: none;
        transition: all 0.2s linear;

    }

    &:focus {
        // outline: 3px solid ${props => props.theme.textColorOnDark};
        border: none;
        outline: none;
        // border-bottom: 3px solid ${props => props.theme.primaryColorDarker};
        transition: all 0.2s linear;
    }

    &:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: ${props => props.theme.primaryColor};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      &:hover:after { 
        width: 100%; 
        left: 0; 
      }
      &:focus:after {
          width: 100%;
          left: 0;
      }

    &:disabled {
        background: none;
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;