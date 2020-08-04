import React from 'react';
import styled from 'styled-components';
import useInView from 'react-cool-inview';
import { typeScale } from "../utils";
import { PlusIcon, PercentIcon, CheckIcon } from '../assets/';

const BadgesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    @media only screen and (max-width: 1024px) {
        margin: 0 auto;
        flex-direction: column;
    }
    .fade-in {
        opacity: 1;
    }
`;

const Badge = styled.div`
transition: all 0.5s ease-in-out;
transition-delay: .${props => props.delay}5s;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: start;
    // padding: 50px;
    padding: 25px 10px;
    // transition: all 0.2s linear;
    flex-direction: column;
    svg {
        width: 65px;
    }
    // Mobile
    @media only screen and (max-width: 1024px) {
        // padding: 25px;
        padding: 10px;
        flex-direction: column;
        text-align: center;
        margin: 0 auto;
        align-items: center;

        svg {
            width: 50px;
            margin: 10px;
        }
    }
    // Large Monitor
    @media only screen and (min-width: 1600px) { 
        // padding: 0 300px;
        padding: 0 50px;
    }

`;

const Title = styled.h3`
    font-size: ${typeScale.header4};
    // padding: 30px;
    // padding: 0 30px;
    text-align: left;
    @media only screen and (max-width: 1024px) {
        padding: 0;
        font-size: ${typeScale.header5};
        text-align: center;
    }
`;
const Body = styled.p`
    font-size: ${typeScale.header5};
    // padding: 0 30px;
    padding-bottom: 30px;
    text-align: center;
    margin-top: 0;
    font-family: ${props => props.theme.primaryFont};
    // width: 305px;
    // line-height: 30.8px;
    line-height: 2rem;
    @media only screen and (max-width: 1024px) {
        font-size: ${typeScale.paragraph};
        padding-bottom: 0;
    }
`

export const Badges = () => {
    const { ref, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: false,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        rootMargin: "-100px 0px",
      });
    //  Qualify for Discounts.
    // Ensure great health coverage.
    return (
        <BadgesWrapper ref={ref} >
            <Badge className={inView ? 'fade-in' : ''} delay={2}>
                <PlusIcon />
                <Title>ACA Compliant Plans.</Title>
                <Body>Aiden is the place where you can get brand-name health insurance under the Patient Protection and Affordable Care Act.</Body>
            </Badge>
            <Badge className={inView ? 'fade-in' : ''} delay={4}>
                <PercentIcon/>
                <Title>Quality Discounts.</Title>
                <Body>Our developed provider offers high-quality, cost-effective discounts and access to physicians and hospitals throughout the USA.</Body>
            </Badge>
            <Badge className={inView ? 'fade-in' : ''} delay={6}>
                <CheckIcon/>
                <Title>Great health coverage.</Title>
                <Body>We offer a broad spectrum of health and wellness programs to ensure our members a healthy plan at every stage in life.</Body>
            </Badge>
        </BadgesWrapper>
    )
}