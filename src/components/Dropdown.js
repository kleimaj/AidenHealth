import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { SecondaryButton, TertiaryButton } from './Buttons';

const DropdownWrapper = styled.div`
    // height: calc(100vh - 85px);
    // height: calc(100vh - 250px);
    background-color: ${props => props.theme.primaryColorDarker};
    color: ${props => props.theme.textColorOnDark};
    display: flex;
    justify-content: space-between;

    border-radius: 0 0 5px 5px;

    // left: 0;
    // overflow: scroll;
    // position: absolute;
    // top: 80px;
    // width: 100%;

    z-index: 1;
    position: relative;
    left: 0;
    margin-top: -5px;
    width: 100vw;

    // Storybook settings
    @media only screen and (min-width: 1000px) {
        width: 320px;
        margin: 0 auto;
      }

    ul {
        margin-top: 25px;
    }
    li {
        padding: 15px 0;
    }
`

export const Dropdown = ({ showMenu, setShowMenu, showModal, setShowModal }) => {
    const animation = useSpring({
        opacity: showMenu ? 1: 0,
        transform: showMenu ? `translateY(0)` : `translateY(-200%)`,
        zIndex: '2',
        position: 'fixed',
        top: '80px'
    });
    return (
        <animated.div style={animation}>
        <DropdownWrapper>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                listStyle: 'none'
            }}>
          <li><a href="#works"><TertiaryButton modifiers="navTertiary">
            How It Works
            </TertiaryButton></a></li>
            <li><a href="#solutions"><TertiaryButton modifiers="navTertiary">
            Solutions
            </TertiaryButton></a></li>
            <li><a href="#about"><TertiaryButton modifiers="navTertiary">
            About Us
            </TertiaryButton></a></li>
          <li style={{
              margin: '15px',
              position: 'relative',
              bottom: '0'
          }}><a><SecondaryButton 
                    modifiers={["navSecondary"]}
                    onClick={() => {
                        setShowModal(!showModal)
                        setShowMenu(!showMenu)}}>
              Apply Today
            </SecondaryButton></a></li>
            </ul>
        </DropdownWrapper>
        </animated.div>
    );
}
