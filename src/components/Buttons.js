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
    `,
    warning: ({ props }) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.textColorInverted};

        &:hover {
            background-color: ${props.theme.status.warningColorHover};
            color: ${props.theme.textColorInverted};

        }

        &:focus {
            outline: 3px solid ${props.theme.status.warningColorHover};
            background-color: ${props.theme.status.warningColorHover};
        }

        &:active {
            background-color: ${props.theme.status.warningColorActive};
        }
    `,
    secondaryButtonWarning: (props) => `
        background: none;
        border: 2px solid ${props.theme.status.warningColor};
        border-color: ${props.theme.status.warningColor};

        &:hover {
            background-color: ${props.theme.status.warningColorHover};
        }

        &:focus {
            outline: 3px solid ${props.theme.status.warningColorHover};
            background-color: ${props.theme.status.warningColorHover};
        }

        &:active {
            background-color: ${props.theme.status.warningColorActive};
        }
    `,
    tertiaryButtonWarning: ({props}) => `
        background: none;
        color: ${props.theme.status.warningColor};

        &:hover {
            background-color: ${props.theme.status.warningColorHover};
            color: ${props.theme.textColorInverted};

        }

        &:focus {
            outline: 3px solid ${props.theme.status.warningColorHover};
            background-color: ${props.theme.status.warningColorHover};
        }

        &:active {
            background-color: ${props.theme.status.warningColorActive};
        }
    `,
    error: ({props}) => `
    background-color: ${props.theme.status.errorColor};
        color: ${props.theme.textColorInverted};

        &:hover {
            background-color: ${props.theme.status.errorColorHover};
            color: ${props.theme.textColorInverted};
        }

        &:focus {
            outline: 3px solid ${props.theme.status.errorColorHover};
            background-color: ${props.theme.status.errorColorHover};
        }

        &:active {
            background-color: ${props.theme.status.errorColorActive};
        }
    `,
    secondaryButtonError: ({props}) => `
    background: none;
    border: 2px solid ${props.theme.status.errorColor};
    border-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColor};

    &:hover {
        background-color: ${props.theme.status.errorColorHover};
        color: ${props.theme.textColorInverted};

    }

    &:focus {
        outline: 3px solid ${props.theme.status.errorColorHover};
        background-color: ${props.theme.status.errorColorHover};
    }

    &:active {
        background-color: ${props.theme.status.errorColorActive};
    }
    `,
    tertiaryButtonError: ({props}) => `
    background: none;
        color: ${props.theme.status.errorColor};

        &:hover {
            background-color: ${props.theme.status.errorColorHover};
        }

        &:focus {
            outline: 3px solid ${props.theme.status.errorColorHover};
            background-color: ${props.theme.status.errorColorHover};
        }

        &:active {
            background-color: ${props.theme.status.errorColorActive};
        }
    `,
    success: ({props}) => `
    background-color: ${props.theme.status.successColor};
        color: ${props.theme.textColorInverted};

        &:hover {
            background-color: ${props.theme.status.successColorHover};
            color: ${props.theme.textColorInverted};
        }

        &:focus {
            outline: 3px solid ${props.theme.status.successColorHover};
            background-color: ${props.theme.status.successColorHover};
        }

        &:active {
            background-color: ${props.theme.status.successColorActive};
        }
    `,
    secondaryButtonSuccess: ({props}) => `
    background: none;
    border: 2px solid ${props.theme.status.successColor};
    border-color: ${props.theme.status.successColor};
    color: ${props.theme.textColor};

    &:hover {
        background-color: ${props.theme.status.successColorHover};
        color: ${props.theme.textColorInverted};
    }

    &:focus {
        outline: 3px solid ${props.theme.status.successColorHover};
        background-color: ${props.theme.status.successColorHover};
    }

    &:active {
        background-color: ${props.theme.status.successColorActive};
    }
    `,
    tertiaryButtonSuccess: ({props}) => `
    background: none;
        color: ${props.theme.status.successColor};

        &:hover {
            background-color: ${props.theme.status.successColorHover};
            color: ${props.theme.textColorInverted};
        }

        &:focus {
            outline: 3px solid ${props.theme.status.successColorHover};
            background-color: ${props.theme.status.successColorHover};
        }

        &:active {
            background-color: ${props.theme.status.successColorActive};
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