import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { Quote } from "../assets";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 470px;
`

const Body = styled.div`
    p {
        font-family: ${props => props.theme.primaryFont};
        font-size: ${typeScale.header5};
        font-style: italic;
        margin: 0;
        padding-left: 12px;
    }
`
const Profile = styled.div`

`

export const Blockquote = () => {
    return (
        <Wrapper>
            <Body>
                <Quote />
                <p>A part of the reason we decided to start Aiden Health was to make healthcare more accessible to younger and older individuals.</p>
            </Body>
            <Profile>
                
            </Profile>
        </Wrapper>
    )
}
