import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";
import { Illustrations } from '../assets';


const HeaderWrapper = styled.header`
// CSS
// Contains image
    // background-color: #ffffff;
    // height: 100vh;
    width: 100vw;
    padding: 0px 150px;
    // margin-top: calc(10vh + 200px);
    // margin-top: 400px;
    margin-top: 100px;
    @media only screen and (min-width: 1600px) { 
        padding: 0 300px;
        margin-top: 100px;
    }
    @media only screen and (max-width: 1024px) {
        // height: 40vh;
        margin-top: 100px;
    }
`;

const CallToAction = styled.h1`
    font-size: ${typeScale.header1};
    color: ${props => props.theme.textColorOnPrimary};
    font-family: ${props => props.theme.displayFont};
    background: none;
    width: 895px;
    position: relative;
    z-index:1;
    @media only screen and (min-width: 1600px) { 
        font-size: ${typeScale.jumbo};
    }
`
const Subheader = styled.p`
    font-size: ${typeScale.header5};
    color: ${props => props.theme.textColorOnPrimary};
    width: 480px;
    line-height: 45px;
    background: none;
    margin-bottom: 30px;
    position: relative;
    z-index:1;
`

const MobileHeaderWrapper = styled.header`
// CSS
// Contains image
    // height: 80vh;
    width: 100vw;
    // position: absolute;
    position: relative;
    padding: 25px;
    margin-top: 100px;
`;

const MobileCallToAction = styled.h1`
    font-size: ${typeScale.header2};
    color: ${props => props.theme.textColorOnPrimary};
    font-family: ${props => props.theme.displayFont};
    text-align: center;
    background: none;
    // width: 895px;
    position: relative;
    z-index:1;
`
const MobileSubheader = styled.p`
    font-size: ${typeScale.paragraph};
    color: ${props => props.theme.textColorOnPrimary};
    text-align: left;
    margin: 0 auto;
    padding: 25px;
    width: 80vw;
    line-height: 30px;
    background: none;
    // margin-bottom: 30px;
    position: relative;
    z-index:1;
`

export const Header = ({ isMobile, isDesktop, showModal, setShowModal }) => {
    if (isMobile) {
        return (
            <MobileHeaderWrapper>
                <MobileCallToAction>
                    Because Life Is Worth Living
                </MobileCallToAction>
                <img 
                    src={Illustrations.HeroImage} 
                    alt="Sign up for an account" 
                    aria-hidden="true" 
                    style={{
                        width: 'calc(100% / 7 + 250px)',
                        position: 'relative',
                        margin: '0 auto',
                        display: 'block',
                        zIndex: '0'
                    }}
                />
                <MobileSubheader>
                Welcome to the only place where the quality of your health insurance 
                is not impacted by the cost that you can afford to pay.
                </MobileSubheader>
                <PrimaryButton 
                    modifiers={['center', 'large']}
                    onClick={() => setShowModal(!showModal)}
                >
                Apply Today
                </PrimaryButton>
            </MobileHeaderWrapper>
        )
    }
    return(
        <HeaderWrapper>
            <CallToAction>
                Because Life Is Worth Living
            </CallToAction>
            <Subheader>
            Welcome to the only place where the quality of your health insurance 
            is not impacted by the cost that you can afford to pay.
            </Subheader>
            <PrimaryButton 
                modifiers={"large"}
                onClick={() => setShowModal(!showModal)}
                 >
                Apply Today
            </PrimaryButton>
            { isDesktop ? (
                <img 
                    src={Illustrations.HeroImage} 
                    alt="Sign up for an account" 
                    aria-hidden="true" 
                    style={{
                        width: '800px',
                        position: 'absolute',
                        top: '250px',
                        paddingBottom: '50px',
                        right: '250px',
                    }}
                /> 
            ) : (
                <img 
                    src={Illustrations.HeroImage} 
                    alt="Sign up for an account" 
                    aria-hidden="true" 
                    style={{
                        width: '800px',
                        position: 'absolute',
                        top: '250px',
                        paddingBottom: '50px',
                        right: '50px',
                    }}
            />
            )}
        </HeaderWrapper>
    )
}