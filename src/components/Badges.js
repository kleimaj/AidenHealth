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
    padding: 20px 0;
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
        padding: 25px;
        flex-direction: column;
        text-align: center;
        margin: 0 auto;
        align-items: center;

        svg {
            width: 50px;
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
    padding: 0 30px;
    text-align: left;
    @media only screen and (max-width: 1024px) {
        padding: 0;
        font-size: ${typeScale.header5};
        text-align: center;
    }
`;

export const Badges = () => {
    //  Qualify for Discounts.
    // Ensure great health coverage.
    return (
        <BadgesWrapper>
            <Badge>
                <PlusIcon />
                <Title>ACA Compliant Plans.</Title>
            </Badge>
            <Badge>
                <PercentIcon/>
                <Title>Quality Discounts.</Title>
            </Badge>
            <Badge>
                <CheckIcon/>
                <Title>Great health coverage.</Title>
            </Badge>
        </BadgesWrapper>
    )
}