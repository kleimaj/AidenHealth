import React from 'react';
import styled from 'styled-components';
import { LogoLight, LogoDark } from '../assets';

const LightWrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
`

export const DefaultLogo = () => {
    return (
        <LightWrapper>
            <LogoLight />
        </LightWrapper>
    )
}