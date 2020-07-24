import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { PlusIcon, PercentIcon, CheckIcon } from '../assets/';

const BadgesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    @media only screen and (max-width: 1024px) {
        margin: 0 auto;
        flex-direction: column;
    }
`;

const Badge = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    // padding: 50px;
    padding: 25px 10px;
    // transition: all 0.2s linear;
    flex-direction: column;
    svg {
        width: 65px;
    }
    // &:hover {
    //     transition: all 0.2s linear;
    //     transform: translateY(-10px);
    // }
    // Mobile
    @media only screen and (max-width: 1024px) {
        // padding: 25px;
        padding: 10px;
        flex-direction: column;
        text-align: center;
        margin: 0 auto;
        align-items: center;

        svg {
            width: 50px;
            margin: 10px;
        }
    }
    // Large Monitor
    @media only screen and (min-width: 1600px) { 
        // padding: 0 300px;
        padding: 0 50px;
    }
`;

const Title = styled.h3`
    font-size: ${typeScale.header4};
    // padding: 30px;
    // padding: 0 30px;
    text-align: left;
    @media only screen and (max-width: 1024px) {
        padding: 0;
        font-size: ${typeScale.header5};
        text-align: center;
    }
`;
const Body = styled.p`
    font-size: ${typeScale.header5};
    // padding: 0 30px;
    padding-bottom: 30px;
    text-align: left;
    margin-top: 0;
    font-family: ${props => props.theme.primaryFont};
    // width: 305px;
    line-height: 30.8px;
    @media only screen and (max-width: 1024px) {
        font-size: ${typeScale.paragraph};
        padding-bottom: 0;
    }
`

export const Badges = () => {
    //  Qualify for Discounts.
    // Ensure great health coverage.
    return (
        <BadgesWrapper>
            <Badge>
                <PlusIcon />
                <Title>ACA Compliant Plans.</Title>
                <Body>Aiden is the place where you can get brand-name health insurance under the Patient Protection and Affordable Care Act.</Body>
            </Badge>
            <Badge>
                <PercentIcon/>
                <Title>Quality Discounts.</Title>
                <Body>Our developed provider offers high-quality, cost-effective discounts and access to physicians and hospitals throughout the USA.</Body>
            </Badge>
            <Badge>
                <CheckIcon/>
                <Title>Great health coverage.</Title>
                <Body>We offer a broad spectrum of health and wellness programs to ensure our members a healthy plan at every stage in life.</Body>
            </Badge>
        </BadgesWrapper>
    )
}