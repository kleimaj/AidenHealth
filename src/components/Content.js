import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";
import { Illustrations } from '../assets';

const ContentContainer = styled.article`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    top: 400px;
    width: 100vw;
    padding: 0px 150px;
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
    z-index: 2;
    background-color: #FF6584;
}
`
const Section = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }

    img {
        width: 550px;
        @media only screen and (max-width: 1024px) {
            width: 300px;
            padding: 25px;
        }
    }

`

const SectionHeader = styled.h3`
    font-size: ${typeScale.header3};
    @media only screen and (min-width: 1600px) { 
        font-size: ${typeScale.header2};
    }
    @media only screen and (max-width: 1024px) {
        font-size: ${typeScale.header4};
        margin: 0 auto;
        text-align: center;
    }
    margin: 4px;

    text-align: left;
    position: relative;
    font-family: ${props => props.theme.displayFont};
`
const SectionBodyCopy = styled.p`
    font-size: ${typeScale.paragraph};
    @media only screen and (min-width: 1600px) { 
        font-size: ${typeScale.header5};
        width: 500px;
        line-height: 3rem;
    }
    @media only screen and (max-width: 1024px) {
        margin: 0 auto;
        text-align: center;
        padding: 15px;
        line-height: 2rem;
    }

    text-align: left;
    position: relative;
    font-family: ${props => props.theme.primaryFont};
`
const SectionText = styled.div`

`

export const Content = () => {
    return (
        <ContentContainer>
            <ContentHeader>How We Do It:</ContentHeader>
            <Section>
                <img 
                    src={Illustrations.Shop}
                />
                <SectionText>
                    <SectionHeader>Shop & Compare</SectionHeader>
                    <SectionBodyCopy>Long term healthily living and healthy diet adaption/ augmentation is the core goal.</SectionBodyCopy>
                </SectionText>
            </Section>
            <Section>
            <SectionText>
                    <SectionHeader>Apply Today</SectionHeader>
                    <SectionBodyCopy>You’ll need your income information, ID, proof of citizenship or lawful presence, Social Security number and ZIP code.</SectionBodyCopy>
                </SectionText>
                <img 
                    src={Illustrations.Apply}
                />
            </Section>
            <Section>
            <img 
                    src={Illustrations.Help}
                />
            <SectionText>

                    <SectionHeader>Need Help?</SectionHeader>
                    <SectionBodyCopy>You can get free help on the phone or in your neighborhood. Call (800) 123-9876 or click on the “Find Local Help” button on the home page.</SectionBodyCopy>
                </SectionText>
            </Section>
        </ContentContainer>
    )
}