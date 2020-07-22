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
    border: 2px solid ${theme.textColorOnDark};
    border-color: ${theme.textColorOnDark};
    color: ${theme.textColorOnDark};
    margin: 0 35px;

    &:hover {
        background-color: ${theme.textColorInverted};
        color: ${theme.primaryColorDarker};
    }

    &:focus {
        outline: 3px solid ${theme.textColorOnDark};
        background-color: ${theme.textColorOnDark};
        color: ${theme.primaryColorDarker};
    }

    &:active {
        background-color: ${theme.textColorOnDark};
        color: ${theme.primaryColorDarker};
    }
    `,
    navTertiary: ({ theme }) => `
    background: none;
    color: ${theme.textColorOnDark};

    &:hover {
        color: ${theme.textColorInverted};
        background: none;
    }

    &:focus {
        outline: 3px solid ${theme.textColorOnDark};
    }

    `
};

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 20px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${props => props.theme.primaryColorDarker};
        outline-offset: 2px;
        background-color: ${props => props.theme.primaryColorDarker};
        color: ${props => props.theme.textColorInverted};
    }
    
    &:active {
        background-color: ${props => props.theme.primaryColorActive};
        border-color: ${props => props.theme.primaryColorActive};
        color: ${props => props.theme.textColor};
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

    &:disabled {
        background: none;
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;