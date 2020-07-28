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
`
const FooterHeader = styled.h3`
    font-size: ${typeScale.header3};
    color: ${props => props.theme.blond};
    font-family: ${props => props.theme.displayFont};
`

const FooterBottom = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.theme.primaryColorDarker};
    width: 70vw;
`
const NavGroups = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    list-style-type: none;
    margin: 27px 0;
    padding: 0;
`
const NavGroup = styled.li`
    display: flex;
    justify-content:space-evenly;
    flex-direction: column;
`
const GroupHeader = styled.h5`

`
const LinkGroup = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    list-style-type: none;
`
const Link = styled.li`

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
                            <Link>Medicare Advantage</Link>
                            <Link>Individuals & Families</Link>
                            <Link>Businesses</Link>
                            <Link>Discounts and Deals</Link>
                            <Link>COVID-19 Resources</Link>
                            <Link>Advanced Care</Link>
                        </LinkGroup>
                    </NavGroup>
                </NavGroups>
            </FooterBottom>
        </FooterWrapper>
    );
}