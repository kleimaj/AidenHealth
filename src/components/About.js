import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { Illustrations } from '../assets';
import { PrimaryButton } from './Buttons';

const AboutWrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.blondBackground};

    position: relative;
    top: 400px;
    width: 100vw;
    padding: 24px 0;
    img {
        width: 300px;
        margin: 0;
    }

    @media only screen and (max-width: 1024px) {
        img {
            width: 200px;
        }
        top: 150px;
    }
`
const Header = styled.h2`
// Font Size
font-size: ${typeScale.header2};
@media only screen and (min-width: 1600px) { 
    font-size: ${typeScale.header1};
}
@media only screen and (max-width: 1024px) {
    font-size: ${typeScale.header3};
    margin: 0 auto;
    text-align: center;
}

text-align: left;
position: relative;
font-family: ${props => props.theme.displayFont};

&::before {
    content: ' ';
    height: 2px;
    position: absolute;
    top: 0;
    width: 60px;
    z-index: 1;
    background-color: #FF6584;
}
`

const Body = styled.p`
    font-size: ${typeScale.paragraph};
    @media only screen and (min-width: 1600px) { 
        font-size: ${typeScale.header5};
        width: 500px;
        // line-height: 3rem;
        line-height: 2rem;

    }
    @media only screen and (max-width: 1024px) {
        margin: 0 auto;
        text-align: center;
        padding: 15px;
        line-height: 2rem;
    }

    text-align: center;
    position: relative;
    font-family: ${props => props.theme.primaryFont};
`

export const About = () => {
    return (
        <AboutWrapper>
            <Header>Who We Are</Header>
            <img 
                src={Illustrations.Hospital}
                alt="An illustration of a hospital."
            />
            <Body>Aiden Health, founded in 2014, provides health care services designed to meet the unique and changing needs of all we serve.</Body>
            <PrimaryButton modifiers="large">Learn More</PrimaryButton>
        </AboutWrapper>
    );
}