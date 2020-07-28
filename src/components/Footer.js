import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import {Form, Input, Label} from './Input';

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.primaryColorDarker};
    position: relative;
    top: 400px;
    width: 100vw;
    padding: 24px 0;
`
const FooterTop = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.theme.primaryColorDarker};
    width: 70vw;
    height: 300px;
    border-bottom: 1px solid ${props => props.theme.blond};
`
const FooterHeader = styled.h3`
    font-size: ${typeScale.header3};
    color: ${props => props.theme.blond};
    font-family: ${props => props.theme.displayFont};
`

const FooterBottom = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.theme.primaryColorDarker};
    width: 70vw;
`



export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTop>
                <FooterHeader>Become a friend of Aiden</FooterHeader>
                <div>
                <Label for="email" modifiers={["onDark"]}>Email</Label>
                <Input 
                    type="text" 
                    id="email" 
                    aria-label="Email" 
                    placeholder="Email"
                    modifiers={["onDark"]} />
                </div>
            </FooterTop>
            <FooterBottom>
                
            </FooterBottom>
        </FooterWrapper>
    );
}