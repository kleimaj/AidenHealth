import React from 'react';
import styled from 'styled-components';
import { 
    PlusIcon, PercentIcon, CheckIcon,
    Facebook,
    Youtube,
    Twitter,
    Instagram } from '../assets'

const Wrapper = styled.div`
display: flex;
width: 100vw;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
flex-direction: row;
`
const NavIcons = styled.div`
display: flex;
width: 30vw;
align-items: center;
justify-content: space-evenly;
background-color: #202B8A;
height: 100px;
`

export const Badges = () => {
    return (
        <Wrapper>
            <PlusIcon />
            <PercentIcon />
            <CheckIcon />
        </Wrapper>
    )
}

export const SocialIcons = () => {
    return (
    <NavIcons>
        <Facebook />
        <Youtube />
        <Twitter />
        <Instagram />
    </NavIcons>
    )
}