import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.primaryColorDarker};

    position: relative;
    top: 400px;
    width: 100vw;
    padding: 24px 0;
`

export const Footer = () => {
    return (
        <FooterWrapper>
            
        </FooterWrapper>
    );
}