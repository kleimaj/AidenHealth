import styled from 'styled-components';
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const INPUT_MODIFIERS = {
    onDark:() => `
        font-size: ${typeScale.helperText};
        border-bottom: ${props => props.theme.blond};
        color: #A6A6A6;
        background: none;
    `,
}

const LABEL_MODIFIERS = {
    onDark:() => `
        color: ${props => props.theme.blond};
    `
}

export const Label = syled.label`
    font-size: ${typeScale.paragraph};
    color: #4A4B53;

    ${applyStyleModifiers(LABEL_MODIFIERS)};
`
export const Input = styled.input`
    border-radius: 12px;
    font-size: ${typeScale.paragraph};
    background: #F4F5F7;

    ${applyStyleModifiers(INPUT_MODIFIERS)};
`