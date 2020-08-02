import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
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
`
const ContentBottomHeader = styled.h4`
font-size: ${typeScale.header4};
margin: 0;
@media only screen and (min-width: 1600px) { 
    font-size: ${typeScale.header3};
    margin: 0;
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
const Section = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }

    img {
        // width: 550px;
        width: 400px;
        padding: 20px;
        @media only screen and (max-width: 1024px) {
            width: 300px;
            padding: 25px;
        }
        @media only screen and (min-width: 1600px) { 
            width: 550px;
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
    font-size: ${typeScale.header5};
    width: 500px;
        // line-height: 3rem;
    line-height: 2rem;

    @media only screen and (min-width: 1600px) { 
        font-size: ${typeScale.header5};
        width: 500px;
        // line-height: 3rem;
        line-height: 2rem;

    }
    @media only screen and (max-width: 1024px) {
        margin: 0 auto;
        text-align: center;
        width: 320px;
        font-size: ${typeScale.paragraph};
        padding: 15px;
        line-height: 2rem;
    }

    text-align: left;
    position: relative;
    font-family: ${props => props.theme.primaryFont};
`
const SectionText = styled.div`

`

export const Content = ({ isMobile }) => {
    return (
        <ContentContainer >
            <ContentHeader>How We Do It:</ContentHeader>
            <Section>
                <img 
                    src={Illustrations.Shop}
                    alt="An illustration of two people stuying a graph"
                />
                <SectionText>
                    <SectionHeader>Shop & Compare</SectionHeader>
                    <SectionBodyCopy>Long term healthily living and healthy diet adaption/ augmentation is the core goal.</SectionBodyCopy>
                </SectionText>
            </Section>
            <Section>
                { isMobile ? (
                <>
                    <img 
                        src={Illustrations.Apply}
                        alt="An illustration of a man filling out a form"
                    />
                    <SectionText>
                        <SectionHeader>Apply Today</SectionHeader>
                        <SectionBodyCopy>You’ll need your income information, ID, proof of citizenship or lawful presence, Social Security number and ZIP code.</SectionBodyCopy>
                    </SectionText>
                </>
                ) :
                (
                <>
                    <SectionText>
                        <SectionHeader>Apply Today</SectionHeader>
                        <SectionBodyCopy>You’ll need your income information, ID, proof of citizenship or lawful presence, Social Security number and ZIP code.</SectionBodyCopy>
                    </SectionText>
                    <img 
                        src={Illustrations.Apply}
                        alt="An illustration of a man filling out a form"
                    />
                </>
                )}

            </Section>
            {/* <Section>
            <img 
                    src={Illustrations.Help}
                    alt="An illustration of two people talking on the phone"
                />
            <SectionText>

                    <SectionHeader>Need Help?</SectionHeader>
                    <SectionBodyCopy>You can get free help on the phone or in your neighborhood. Call (800) 123-9876 or click on the “Find Local Help” button on the home page.</SectionBodyCopy>
                </SectionText>
            </Section> */}
            <Section>
            { isMobile ? (
                <>
                    <img 
                        src={Illustrations.Pay}
                        alt="An illustration of a woman with a credit card and cash"
                    />
                    <SectionText>
                        <SectionHeader>Pay Your Bill</SectionHeader>
                        <SectionBodyCopy>You may be able to make your first month’s payment online, or you can wait for the bill to come in the mail.</SectionBodyCopy>
                    </SectionText>
                </>
                ) :
                (
                <>
                 <img 
                        src={Illustrations.Pay}
                        alt="An illustration of a woman with a credit card and cash"
                    />
                    <SectionText>
                        <SectionHeader>Pay Your Bill</SectionHeader>
                        <SectionBodyCopy>You may be able to make your first month’s payment online, or you can wait for the bill to come in the mail.</SectionBodyCopy>
                    </SectionText>
                    {/* <img 
                        src={Illustrations.Pay}
                        alt="An illustration of a woman with a credit card and cash"
                    /> */}
                </>
                )}
                </Section>
            <Section>
            {isMobile ? (
                <>
                <img 
                        src={Illustrations.Success}
                        alt="An illustration of a woman jumping for joy, in front of a life-sized smartphone with a check mark"
                />
                <SectionText>
                <SectionHeader>You’re Covered!</SectionHeader>
                <SectionBodyCopy>You and your family can enjoy the peace of mind of knowing you have health insurance.</SectionBodyCopy>
                </SectionText>
                </>
                ) : (
                    <>
                <SectionText>

                <SectionHeader>You’re Covered!</SectionHeader>
                <SectionBodyCopy>You and your family can enjoy the peace of mind of knowing you have health insurance.</SectionBodyCopy>
                </SectionText>
                <img 
                    src={Illustrations.Success}
                    alt="An illustration of a woman jumping for joy, in front of a life-sized smartphone with a check mark"
                />
                    </>
                )}
                
            </Section>
            <ContentBottomHeader>Need Help?</ContentBottomHeader>
            <ContentBottomParagraph>Call <a href="#help">(800) 123-1612</a> or  <a href="#help">Find Local Help</a></ContentBottomParagraph>
        </ContentContainer>
    )
}