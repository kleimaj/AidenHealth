import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { Input, Label} from './Input';

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
    @media only screen and (max-width: 1024px) {
        top: 150px;
    }
`
const FooterTop = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.theme.primaryColorDarker};
    width: 70vw;
    height: 300px;
    border-bottom: 1px solid ${props => props.theme.blond};
    
    @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
`
const FooterHeader = styled.h3`
    font-size: ${typeScale.header3};
    color: ${props => props.theme.blond};
    font-family: ${props => props.theme.displayFont};
    @media only screen and (max-width: 1024px) {
        margin: 0;
    }
`

const FooterBottom = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.theme.primaryColorDarker};
    width: 70vw;
    border-bottom: 1px solid #FFF0DB;
`
const NavGroups = styled.ul`
    display: flex;
    width: 70vw;
    justify-content: space-evenly;
    flex-direction: row;
    list-style-type: none;
    margin: 27px 0;
    padding: 0;
    @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
        // flex-direction: column;
    }
`
const NavGroup = styled.li`
    display: flex;
    width: 200px;
    // justify-content:space-evenly;
    flex-direction: column;
    justify-content: flex-start;
    padding: 12px 0;
`
const GroupHeader = styled.h5`
    color: ${props => props.theme.blond};
    font-size: ${typeScale.header5};
    margin: 12px 0;
`
const LinkGroup = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
`
const Link = styled.li`
color: ${props => props.theme.blond};
    p {
        cursor: pointer;
        text-decoration: underline;
        margin: 8px 0;
    }

`
const Copyright = styled.p`
    color: ${props => props.theme.blond};
    font-size: ${typeScale.copyrightText};

`



export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTop>
                <FooterHeader>Become a friend of Aiden</FooterHeader>
                <div>
                <Label for="email" modifiers={["onDark"]}>Email</Label>
                <Input 
                    type="text" 
                    id="email" 
                    aria-label="Email" 
                    placeholder="Email"
                    modifiers={["onDark"]} />
                </div>
            </FooterTop>
            <FooterBottom>
                <NavGroups>
                    <NavGroup>
                        <GroupHeader>Plans</GroupHeader>
                        <LinkGroup>
                            <Link><p>Medicare Advantage</p></Link>
                            <Link><p>Individuals & Families</p></Link>
                            <Link><p>Businesses</p></Link>
                            <Link><p>Discounts & Deals</p></Link>
                            <Link><p>COVID-19 Resources</p></Link>
                            <Link><p>Advanced Care</p></Link>
                        </LinkGroup>
                    </NavGroup>
                    <NavGroup>
                        <GroupHeader>Locations</GroupHeader>
                        <LinkGroup>
                            <Link><p>Los Angeles</p></Link>
                            <Link><p>New York</p></Link>
                            <Link><p>San Francisco Bay Area</p></Link>
                            <Link><p>Seattle</p></Link>
                            <Link><p>Washington DC</p></Link>
                            <Link><p>San Diego</p></Link>
                        </LinkGroup>
                    </NavGroup>
                    <NavGroup>
                        <GroupHeader>About Us</GroupHeader>
                        <LinkGroup>
                            <Link><p>Launch Story</p></Link>
                            <Link><p>20 Year Plan</p></Link>
                            <Link><p>Our Technology</p></Link>
                            <Link><p>Jobs</p></Link>
                            <Link><p>Blog</p></Link>
                            <Link><p>Press</p></Link>
                        </LinkGroup>
                    </NavGroup>
                    <NavGroup>
                        <GroupHeader>Contact Us</GroupHeader>
                        <LinkGroup>
                            <Link><p>(800) 123-1612</p></Link>
                            <Link><p>Chat With Us</p></Link>
                            <Link><p>FAQs</p></Link>
                        </LinkGroup>
                    </NavGroup>
                </NavGroups>
            </FooterBottom>
            <Copyright>&copy; Aiden Health 2020</Copyright>
        </FooterWrapper>
    );
}