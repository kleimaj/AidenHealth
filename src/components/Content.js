import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { Illustrations } from '../assets';
import { Section } from './Section';

const ContentContainer = styled.article`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    top: 400px;
    width: 100vw;
    padding: 0px 150px;
    padding-bottom: 80px;
    color: ${props => props.theme.darkToBlond};
    @media only screen and (max-width: 1024px) {
        padding: 0;
        top: 100px;
    }
`
const ContentHeader = styled.h2`
font-size: ${typeScale.header2};
@media only screen and (min-width: 1600px) { 
    font-size: ${typeScale.header1};
}
@media only screen and (max-width: 1024px) {
    font-size: ${typeScale.header3};
    margin: 0 auto;
    text-align: center;
}

text-align: center;
position: relative;
font-family: ${props => props.theme.displayFont};

&::before {
    content: ' ';
    height: 2px;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    width: 60px;
    z-index: 1;
    background-color: #FF6584;
}
// Seans' feedback
padding: 12px;
`
const ContentBottomHeader = styled.h4`
font-size: ${typeScale.header4};
margin: 0;
@media only screen and (min-width: 1600px) { 
    font-size: ${typeScale.header3};
    margin: 0;
    margin-top: 24px;
}
@media only screen and (max-width: 1024px) {
    font-size: ${typeScale.header5};
    margin: 0 auto;
    margin: 0;
    text-align: center;
    padding: 15px;
}

text-align: center;
position: relative;
font-family: ${props => props.theme.primaryFont};
padding-top: 18px;
`
const ContentBottomParagraph = styled.p`
font-size: ${typeScale.header5};
@media only screen and (min-width: 1600px) { 
    font-size: ${typeScale.header5};
}
@media only screen and (max-width: 1024px) {
    font-size: ${typeScale.paragraph};
    margin: 0 auto;
    text-align: center;
}

a {
    color: ${props => props.theme.hyperlinkColor}
}

text-align: center;
position: relative;
font-family: ${props => props.theme.primaryFont};
`

export const Content = ({ isMobile }) => {
    return (
        <ContentContainer>
            <ContentHeader>Only a few steps:</ContentHeader>
            <Section 
                header={"1. Shop & compare"}
                body={"Long term healthily living and healthy diet adaption/ augmentation is the core goal."}
                src={Illustrations.Shop}
                alt={"An illustration of two people stuying a graph"}
                imageFirst={true}
                isMobile={isMobile}
            />
            <Section
                header={"2. Apply today"}
                body={"You’ll need your income information, ID, proof of citizenship or lawful presence, Social Security number and ZIP code."}
                src={Illustrations.Apply}
                alt={"An illustration of a man filling out a form"}
                imageFirst={false}
                isMobile={isMobile}
            />
            <Section 
                header={"3. Pay your bill"}
                body={"Make your first month’s payment online, or you can wait for the bill to come in the mail."}
                src={Illustrations.Pay}
                alt={"An illustration of a woman with a credit card and cash"}
                imageFirst={true}
                isMobile={isMobile}
            />
           <Section 
                header={"You’re covered!"}
                body={"You and your family can enjoy the peace of mind of knowing you have health insurance."}
                src={Illustrations.Success}
                alt={"An illustration of a woman jumping for joy, in front of a life-sized smartphone with a check mark"}
                imageFirst={false}
                isMobile={isMobile}
            />
            <ContentBottomHeader>Need help?</ContentBottomHeader>
            <ContentBottomParagraph>Call <a href="#help">(800) 123-1612</a> or  <a href="#help">Find Local Help</a></ContentBottomParagraph>
        </ContentContainer>
    )
}