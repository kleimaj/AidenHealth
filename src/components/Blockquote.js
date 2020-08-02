import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { Quote } from "../assets";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 470px;

    @media only screen and (max-width: 1024px) {
        width: 300px;
        padding: 1.5rem 0;
    }
`

const Body = styled.div`
    p {
        font-family: ${props => props.theme.primaryFont};
        font-size: ${typeScale.header5};
        font-style: italic;
        margin: 0;
        padding-left: 12px;
        line-height: 2rem;

        @media only screen and (max-width: 1024px) {
            font-size: ${typeScale.paragraph};
        }
    }
`
const Profile = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
const Persona2 = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-image: url('https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMjA3OTc3N15BMl5BanBnXkFtZTcwNTA1MzY1Mw@@._V1_UY256_CR10,0,172,256_AL_.jpg');
    background-position: center;
    background-size: cover;
`
const Persona = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-image: url('https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ');
    background-position: center;
    background-size: cover;
`
const Bio = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 1.25rem;
    h3 {
        margin: 0;
        font-family: ${props => props.theme.primaryFont};
        font-weight: 500;
    }
    p {
        margin: 0;
        font-family: ${props => props.theme.primaryFont};
        color: ${props => props.theme.gray};
    }
`

export const Blockquote = (props) => {
    return (
        <Wrapper>
            <Body>
                <Quote />
                <p>{ props.content || "I went online and found a doctor that's close to my office - it was so easy. I recommend Aiden to all of my family and friends!"}</p>
            </Body>
            <Profile>
                { props.member ? <Persona /> : <Persona2 />}
                <Bio>
                    <h3>{props.name || 'Marissa Tomei'}</h3>
                    <p>{props.bio || 'Member of Aiden Health'}</p>
                </Bio>
            </Profile>
        </Wrapper>
    )
}
