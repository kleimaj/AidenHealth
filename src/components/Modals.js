import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { useSpring, animated, config } from 'react-spring';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton, SecondaryButton } from './Buttons';
import { Input, Label } from './Input';
import { applyStyleModifiers } from "styled-components-modifiers";

const MODAL_MODIFIERS = {
    mobileView:() => `
        width: 300px;
    `,
}
const ModalWrapper = styled.div`
    width: 800px;
    height: 580px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 7;
    border-radius: 2px;
    // @media only screen and (max-width: 1200px) { 
    //     width: 300px;
    // }
    ${applyStyleModifiers(MODAL_MODIFIERS)};
`
const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
    font-family: ${props => props.theme.primaryFont};
    margin: 0;
`

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    font-family: ${props => props.theme.primaryFont};
    max-width: 70%;
    margin-top: 25px;
    text-align: center;
`
const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 40px;
    top: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`

export const SignInWrapper = styled.div`
width: 800px;
height: 580px;
box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
background-color: ${props => props.theme.formElementBackground};
color: ${props => props.theme.textOnFormElementBackground};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: absolute;
z-index: 7;
border-radius: 2px;

// @media only screen and (max-width: 1200px) { 
//     width: 300px;
// }
${applyStyleModifiers(MODAL_MODIFIERS)};

`
export const FormContainer = styled.form`
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;

h3 {
    position: relative;
    bottom: 20px;
}
`
export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    // padding: 2rem;
    button {
        margin: 1rem;
    }
`

export const SignUpModal = ({ showModal, setShowModal, isMobile, storyBook }) => {
    const animation = useSpring({
        opacity: showModal ? 1: 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        zIndex: showModal ? '2' : `-1`,
        config: config.stiff,
        left: 'calc(35% - 100px)',
        position: storyBook ? 'relative' : 'fixed',
        // position: isMobile ? 'relative' : 'fixed',
        right: '0',
        top: '100px',
        // margin: '0 auto',
        // textAlign: 'center',
    });
    return (
        <animated.div style={animation}>
        <ModalWrapper
            modifiers={isMobile ? ['mobileView'] : []}>
        { isMobile ?
        <img 
        src={Illustrations.SignUp} 
        alt="Sign up for an account" 
        aria-hidden="true" 
        style={{
            width: '300px'
        }}
    />
        : 
        <img 
        src={Illustrations.SignUp} 
        alt="Sign up for an account" 
        aria-hidden="true" 
        style={{
            width: '450px'
        }}
    />
        }
            {/* <img 
                src={Illustrations.SignUp} 
                alt="Sign up for an account" 
                aria-hidden="true" 
                style={{
                    width: '450px'
                }}
            /> */}
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpText>Sign up today to get access!</SignUpText>
            <PrimaryButton>Sign up!</PrimaryButton>
            <CloseModalButton 
              aria-label="Close modal"
              onClick={() => setShowModal(false)}
              >
                <CloseIcon />
            </CloseModalButton>
        </ModalWrapper>
        </animated.div>
    )
}

export const SignInModal = ({ showModal, setShowModal, isMobile, storyBook }) => {
    const animation = useSpring({
        opacity: showModal ? 1: 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        zIndex: showModal ? '2' : `-1`,
        config: config.stiff,
        left: 'calc(35% - 200px)',
        position: storyBook ? 'relative' : 'fixed',
        // position: isMobile ? 'fixed' : 'relative',
        right: '0',
        top: '100px',
        // margin: '0 auto',
        // textAlign: 'center',
    });
    return (
        <animated.div style={animation}>
        <SignInWrapper
            modifiers={isMobile ? ['mobileView'] : []}>
            <FormContainer>
            <SignUpHeader>Sign In</SignUpHeader>
            <div>
            <Label htmlFor="email_modal">Email</Label>
            <Input type="text" id="email_modal" aria-label="email input" placeholder="email@example.com" modifiers="large" />
            </div>
            <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" autocomplete="on" aria-label="password input" placeholder="password" modifiers="large" />
            </div>
            <ButtonGroup>
                <SecondaryButton>Sign up</SecondaryButton>
                <PrimaryButton>Log In</PrimaryButton>
            </ButtonGroup>
            </FormContainer>
            <CloseModalButton 
              aria-label="Close modal"
              onClick={() => setShowModal(false)}
              >
                <CloseIcon />
            </CloseModalButton>
            <img 
                src={Illustrations.SignIn} 
                alt="Sign up for an account" 
                aria-hidden="true" 
                style={{
                    width: '330px'
                }}
            />
        </SignInWrapper>
        </animated.div>
    )
}