import React from 'react';
import styled from 'styled-components';

const HamburgerIconWrapper = styled.svg`
    width: 100%;
    height: 100%;
`
const Hamburger = styled.span`
    position: absolute;
    right: 0;
    top: .5rem;
    width: 28px;
    height: 3px;
    background: #fff;
    transition: all 0.5s ease-in-out;
    padding-right: 28px;

    &::before {
            content: '';
            position: absolute;
            top: -8px;
            width: 28px;
            height: 3px;
            background-color: #ffffff;
            transition: all 0.5s ease-in-out;

        }
        
        &::after {
            content: '';
            position: absolute;
            top: 8px;
            width: 20px;
            height: 3px;
            background-color: #ffffff;
            transition: all 0.5s ease-in-out;
        }
`

export const HamburgerIcon=() => (
    // <HamburgerIconWrapper aria-hidden="true">
        <button
            style={{
                margin: '0',
                border: 'none',
                position: 'absolute',
                zIndex: '1',
                right: '2rem',
                top: '1.5rem',
                height: '20px',
                width: '28px',
                background: 'none',
                cursor: 'pointer',
            }}
        >
            <Hamburger />
        </button>
    // </HamburgerIconWrapper>
)