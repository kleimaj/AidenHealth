import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { PlusIcon } from '../assets/';

const BadgesWrapper = styled.div`
    display: flex;
`;

const Badge = styled.div`

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