import styled from 'styled-components';
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const INPUT_MODIFIERS = {
    onDark:() => `
        border-bottom: 1px solid #FFF5C7;
        border-radius: 0px;
        color: #FFF5C7;
        background: none;
        padding: 12px 0;
    `,
}
const FORM_MODIFIERS = {
    onDark:() => `
        background-color: #23315E;
    `
}
const LABEL_MODIFIERS = {
    onDark:() => `
        color:  #FFF5C7;
        padding: 0;
    `,
    onError:() => `
        color: #D0454C;
    `
}

export const Label = styled.label`
    font-family: ${props => props.theme.primaryFont};
    font-size: ${typeScale.helperText};
    color: #737581;
    display: block;
    // margin: 10px 0;
    padding: 12px;

    ${applyStyleModifiers(LABEL_MODIFIERS)};
`

export const Error = styled.span`
    font-family: ${props => props.theme.primaryFont};
    font-size: ${typeScale.helperText};
    color: #737581;
    display: block;
    padding: 12px;
    color: #D0454C;
`
export const Input = styled.input`
    border-radius: 12px;
    border: none;
    padding: 12px 20px;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${typeScale.paragraph};
    background: #F4F5F7;
    display: block;

    ${applyStyleModifiers(INPUT_MODIFIERS)};
`

export const Form = styled.form`
    padding: 20px;
    
    ${applyStyleModifiers(FORM_MODIFIERS)};
`