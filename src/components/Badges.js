import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { PlusIcon } from '../assets/';

const BadgesWrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 1024px) {
        margin: 0 auto;
    }
`;

const Badge = styled.div`
    display: flex;
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
        padding: 0 300px;
    }
`;

const Title = styled.h3`

`;

export const Badges = () => {
    //  Qualify for Discounts.
    // Ensure great health coverage.
    return (
        <BadgesWrapper>
            <Badge>
                <PlusIcon />
                <Title>ACA Compliance.</Title>
            </Badge>
            {/* <Badge>
                <Icon/>
                <Title>Qualify for Discounts.</Title>
            </Badge>
            <Badge>
                <Icon/>
                <Title>Ensure great health coverage.</Title>
            </Badge> */}
        </BadgesWrapper>
    )
}