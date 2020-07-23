import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";
import { Illustrations } from '../assets';

const ContentContainer = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    top: 400px;
    width: 100vw;
    // padding: 0px 150px;
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

text-align: left;
position: relative;
font-family: ${props => props.theme.displayFont};

&::before {
    content: ' ';
    height: 2px;
    position: absolute;
    top: 0;
    width: 60px;
    z-index: 2;
    background-color: #FF6584;
}
`

export const Content = () => {
    return (
        <ContentContainer>
            <ContentHeader>How We Do It:</ContentHeader>
        </ContentContainer>
    )
}