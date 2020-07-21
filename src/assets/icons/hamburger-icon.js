import React from 'react';
import styled from 'styled-components';
import './open.scss';

const HamburgerIconWrapper = styled.svg`
    width: 100%;
    height: 100%;
    &::focus {
        outline: none;
    }
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
        &::focus {
            outline: none;
        }
`

const Close = styled.span`
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

const open = `
            transform: rotate(720deg);
            background: transparent;

            &::before {
                transform: rotate(45deg) translate(5px, 8px);
            }
            &::after {
                width: 28px;
                transform: rotate(-45deg) translate((3px, -7px));
            }
`

export const HamburgerIcon=(props) => (
    // <HamburgerIconWrapper aria-hidden="true">
        <button
            onClick={props.onClick}
            style={{
                border: 'none',
                position: 'absolute',
                zIndex: '1',
                right: '2rem',
                top: '1.5rem',
                height: '20px',
                width: '28px',
                background: 'none',
                cursor: 'pointer',
                outline: 'none'
            }}
        >
            <Hamburger className={
            props.open ? 'open' : ''
            }
            />
        </button>
    // </HamburgerIconWrapper>
)