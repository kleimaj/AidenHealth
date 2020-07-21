import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { SecondaryButton, TertiaryButton } from './Buttons';

const DropdownWrapper = styled.div`
    height: calc(100vh - 80px);
    background-color: ${props => props.theme.primaryColorDarker};
    color: ${props => props.theme.textColorOnDark};
    display: flex;
    justify-content: space-between;
    z-index: -1;
    margin-top: 110px;
    width: 100vw;
`

export const Dropdown = ({ showMenu, setShowMenu }) => {
    const animation = useSpring({
        opacity: showMenu ? 1: 0,
        transform: showMenu ? `translateY(0)` : `translateY(-200%)`,
        config: config.stiff
    });
    return (
        <animated.div style={animation}>
        <DropdownWrapper>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                listStyle: 'none'
            }}>
          <li><a><TertiaryButton modifiers="navTertiary">
            How It Works
            </TertiaryButton></a></li>
            <li><a><TertiaryButton modifiers="navTertiary">
            Solutions
            </TertiaryButton></a></li>
            <li><a><TertiaryButton modifiers="navTertiary">
            About Us
            </TertiaryButton></a></li>
          <li><a><SecondaryButton modifiers="navSecondary">
              Apply Today
            </SecondaryButton></a></li>
            </ul>
        </DropdownWrapper>
        </animated.div>
    );
}
