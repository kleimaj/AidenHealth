import React from 'react';
import styled from 'styled-components';
import { LogoLight, LogoDark } from '../assets';

const LightWrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 25px;
`

const DarkWrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 25px;
    background: #202B8A;
`

export const DefaultLogo = () => {
    return (
        <LightWrapper>
            <LogoLight />
        </LightWrapper>
    )
}

export const DarkLogo = () => {
    return (
        <DarkWrapper>
            <LogoDark />
        </DarkWrapper>
    )
}