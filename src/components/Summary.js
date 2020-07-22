import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";

const SummaryWrapper = styled.article`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    width: 100vw;
    align-items: center;
    margin: 0 auto;
`
const SummaryTitle = styled.h2`
    // Font Size
    font-size: ${typeScale.header2};
    @media only screen and (min-width: 1600px) { 
        font-size: ${typeScale.header1};
    }
    @media only screen and (max-width: 1024px) {
        font-size: ${typeScale.header3};
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
        background-color: black;
    }
`

export const Summary = () => {
    return (
        <SummaryWrapper>
            <SummaryTitle>We can promise you this:</SummaryTitle>
        </SummaryWrapper>
    );
}
