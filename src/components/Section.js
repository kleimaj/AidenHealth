import React from 'react';
import styled from 'styled-components';
import {typeScale} from '../utils';
import useInView from 'react-cool-inview';


const SectionWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }

    .scale {
        transform: scale(1.05);
        transition: all 0.5s ease-in-out;
    }

    img {
        transition: all 0.5s ease-in-out;
        // width: 550px;
        width: 400px;
        padding: 20px;
        @media only screen and (max-width: 1024px) {
            width: 300px;
            padding: 25px;
        }
        @media only screen and (min-width: 1600px) { 
            width: 550px;
        }
    }

`

const SectionHeader = styled.h3`
    font-size: ${typeScale.header3};
    @media only screen and (min-width: 1600px) { 
        font-size: ${typeScale.header2};
    }
    @media only screen and (max-width: 1024px) {
        font-size: ${typeScale.header4};
        margin: 0 auto;
        text-align: center;
    }
    margin: 4px;
    text-align: left;
    position: relative;
    font-family: ${props => props.theme.displayFont};
`
const SectionBodyCopy = styled.p`
    font-size: ${typeScale.paragraph};
    font-size: ${typeScale.header5};
    width: 500px;
        // line-height: 3rem;
    line-height: 2rem;

    @media only screen and (min-width: 1600px) { 
        font-size: ${typeScale.header5};
        width: 500px;
        // line-height: 3rem;
        line-height: 2rem;

    }
    @media only screen and (max-width: 1024px) {
        margin: 0 auto;
        text-align: center;
        width: 320px;
        font-size: ${typeScale.paragraph};
        padding: 15px;
        line-height: 2rem;
    }

    text-align: left;
    position: relative;
    font-family: ${props => props.theme.primaryFont};
`
const SectionText = styled.div`

`
export const Section = ({ 
    header, 
    body, 
    src,
    alt,
    imageFirst,
    isMobile }) => {
    const { ref, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: false,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        rootMargin: "-250px 0px",
    });
    return (
        <SectionWrapper ref={ref}>
        { (imageFirst || isMobile) ?
            <>
            <img
                src={src}
                alt={alt}
                className={inView ? "scale" : ""}
            />
            <SectionText>
                <SectionHeader>{header}</SectionHeader>
                <SectionBodyCopy>{body}</SectionBodyCopy>
            </SectionText>
            </>
            :
            <>
            <SectionText>
                <SectionHeader>{header}</SectionHeader>
                <SectionBodyCopy>{body}</SectionBodyCopy>
            </SectionText>
            <img
                src={src}
                alt={alt}
                className={inView ? "scale" : ""}
            />
            </>
        }
        </SectionWrapper>
    )
}