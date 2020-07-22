import styled from 'styled-components';
// import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const NAVBAR_MODIFIERS = {
    mobile:() => `
    width: 40%;
    position: relative;

    span {
        padding-right: 0px;
    }
    span::before {
        transform: translateX(-14px);
    }
    span::after {
        transform: translateX(-14px);
    }
    `,
    docs:() => `
    position: relative;
    `
}

export const Navbar = styled.nav`
// CSS
    background-color: ${props => props.theme.primaryColorDarker};
    color: ${props => props.theme.textColorInverted};
    padding-left: 1rem;
    padding-top: 1rem;
    border-radius: 0 0 5px 5px;
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    justify-content: space-between;
    z-index: 5;

    h1 {
        margin: 0;
        width: 200px;
    }

    a {
        color: ${props => props.theme.textColorInverted};
        text-decoration: none;
        padding: 10px 15px;
        text-align: center;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
    }

    ${applyStyleModifiers(NAVBAR_MODIFIERS)};
`;