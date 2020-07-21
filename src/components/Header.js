import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";


const HeaderWrapper = styled.header`
// CSS
// Contains image
    background-color: #ffffff;
    width: 100vw;
    padding: 0 123px;
`;

const CallToAction = styled.h1`
    font-size: ${typeScale.header1};
    color: ${props => props.theme.textColorOnPrimary};
    width: 895px;
`
const Subheader = styled.p`
    font-size: ${typeScale.paragraph};
    color: ${props => props.theme.textColorOnPrimary};
    width: 370px;
    line-height: 45px;
    margin-bottom: 30px;
`

export const Header = () => {
    return(
        <HeaderWrapper>
            <CallToAction>
                Because Life Is Worth Living
            </CallToAction>
            <Subheader>
            Welcome the only place where the quality of your health insurance 
            is not impacted by the cost that you can afford to pay.
            </Subheader>
            <PrimaryButton>Apply Today</PrimaryButton>
        </HeaderWrapper>
    )
}