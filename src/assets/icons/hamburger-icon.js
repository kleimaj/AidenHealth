import React from 'react';
import styled from 'styled-components';
import './open.scss';

const Hamburger = styled.span`
    position: absolute;
    right: 0;
    top: .5rem;
    width: 28px;
    height: 3px;
    // background: #fff;
    background-color: ${props => props.theme.primaryColorDarker};
    transition: all 0.5s ease-in-out;
    padding-right: 28px;

    &::before {
            content: '';
            position: absolute;
            top: -8px;
            width: 28px;
            height: 3px;
            background-color: ${props => props.theme.primaryColorDarker};
            transition: all 0.5s ease-in-out;

        }
        
        &::after {
            content: '';
            position: absolute;
            top: 8px;
            width: 20px;
            height: 3px;
            // background-color: #ffffff;
            background-color: ${props => props.theme.primaryColorDarker};
            transition: all 0.5s ease-in-out;
        }
        &::focus {
            outline: none;
        }
`

export const HamburgerIcon=(props) => (
    // <HamburgerIconWrapper aria-hidden="true">
        <button
            onClick={props.onClick}
            title="dropdown menu button"
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