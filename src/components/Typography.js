import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';

const Jumbo = styled.h1`
        font-size: ${typeScale.jumbo};
        font-family: ${props => props.theme.primaryFont};
`

const H1 = styled.h1`
        font-size: ${typeScale.header1};
        font-family: ${props => props.theme.primaryFont};
`

const H2 = styled.h2`
        font-size: ${typeScale.header2};
        font-family: ${props => props.theme.primaryFont};
`

const H3 = styled.h3`
        font-size: ${typeScale.header3};
        font-family: ${props => props.theme.primaryFont};
`

const H4 = styled.h4`
        font-size: ${typeScale.header4};
        font-family: ${props => props.theme.primaryFont};
`

const H5 = styled.h5`
        font-size: ${typeScale.header5};
        font-family: ${props => props.theme.primaryFont};
`

const P = styled.p`
        font-size: ${typeScale.paragraph};
        font-family: ${props => props.theme.primaryFont};
`
const HelperText = styled.p`
        font-size: ${typeScale.helperText};
        font-family: ${props => props.theme.primaryFont};
`
const Copyright = styled.p`
        font-size: ${typeScale.copyrightText};
        font-family: ${props => props.theme.primaryFont};
`


const DisplayJumbo = styled.h1`
        font-size: ${typeScale.jumbo};
        font-family: ${props => props.theme.displayFont};
`

const DisplayH1 = styled.h1`
        font-size: ${typeScale.header1};
        font-family: ${props => props.theme.displayFont};
`

const DisplayH2 = styled.h2`
        font-size: ${typeScale.header2};
        font-family: ${props => props.theme.displayFont};
`

export const TypeScale = () => {
    return (
        <>
            <Jumbo>Jumbo - 3.815em (61.04px)</Jumbo>
            <H1>Header1 - 3.052em (48.83px)</H1>
            <H2>Header2 - 2.441em (39.06px)</H2>
            <H3>Header3 - 1.953em (31.25px)</H3>
            <H4>Header4 - 1.563em (25px)</H4>
            <H5>Header5 - 1.25em (20px)</H5>
            <P>Paragraph - 1em (16px)</P>
            <HelperText>Helper Text - 0.8em (12.8px)</HelperText>
            <Copyright>Copyright Text - 0.7em (12px)</Copyright>
        </>
    )
}

export const DisplayScale = () => {
    return (
        <>
            <DisplayJumbo>DM Serif Display - 3.815em</DisplayJumbo>
            <DisplayH1>DM Serif Display - 3.052em</DisplayH1>
            <DisplayH2>DM Serif Display - 2.441em</DisplayH2>
        </>
    )
}