import React from 'react';
import styled from 'styled-components';
import { typeScale, purple, blond, hotPink } from '../utils';

const Color = styled.div`
    background-color: ${props => props.color};
    width: 200px;
    height: 200px;
    font-size: ${typeScale.paragraph};
    font-family: ${props => props.theme.primaryFont};
    margin: 0;
    text-align: center;
    color: ${props => props.text};
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 800px;
    align-items:center;
`

export const Colors = () => {
    return (
        <Wrapper>
        <Color color={purple[200]} text={"black"}>Primary-100</Color>
        <Color color={purple[300]} text={"white"}>Primary-200</Color>
        <Color color={purple[400]} text={"white"}>Primary-300</Color>
        <Color color={purple[500]} text={"white"}>Primary-400</Color>
        <Color color={blond[500]} text={"black"}>Secondary-100</Color>
        <Color color={blond[200]} text={"black"}>Secondary-200</Color>
        <Color color={blond[300]} text={"black"}>Secondary-300</Color>
        <Color color={blond[400]} text={"black"}>Secondary-400</Color>
        <Color color={hotPink[100]} text={"black"}>Tertiary-100</Color>
        <Color color={hotPink[200]} text={"black"}>Tertiary-200</Color>
        <Color color={hotPink[300]} text={"black"}>Tertiary-300</Color>
        <Color color={hotPink[400]} text={"black"}>Tertiary-400</Color>

        </Wrapper>
    )
}