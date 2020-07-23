import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { Badges } from "./Badges";

const SummaryWrapper = styled.article`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    width: 100vw;
    padding: 0px 150px;
    top: 400px;
    // padding-top: 300px;
    // margin-top: 100px;

    @media only screen and (max-width: 1024px) {
        position: relative;
        padding: 25px;
        flex-direction: column;
        top: 0;
    }
    @media only screen and (min-width: 1600px) { 
        // padding: 0 300px;
        top: 350px;
    }
`
const SummaryTitle = styled.h2`
    // Font Size
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
        z-index: 1;
        background-color: #FF6584;
    }
`

export const Summary = () => {
    return (
        <SummaryWrapper>
            <SummaryTitle>We can promise you this:</SummaryTitle>
            <Badges />
        </SummaryWrapper>
    );
}
