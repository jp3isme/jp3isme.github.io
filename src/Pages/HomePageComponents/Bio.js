import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Button from '../../Components/Button.js';

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    padding: 1.5rem;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    align-items: flex-start;
    flex-basis: calc(78% - 20px);
    border: 1px solid ${(props) => props.theme.foregroundBorder};

    @media (max-width: 991px) {
        flex-basis: 100%;
    }
`;
const ImgDiv = styled.div`
    background-color: ${(props) => props.bg};
    border-radius: 200px;
    margin: 0 0 1.5rem 0;
    height: 140px;
    overflow: visible;
    align-self: baseline;
    @media (max-width: 768px) {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;
const TextDiv = styled.div`
    flex-basis: calc(100% - 140px - 1.5rem);
    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const Img = styled.img`
    height: 132px;
    width: 132px;
    border-radius: 200px;
    background-color: ${(props) => props.bg};
    border: 4px solid ${(props) => props.theme.secondary};
    margin: 0 1.5rem 0 0;
    padding: 0;
`;

const P = styled.p`
    padding: 0;
    margin: 0 0 1.2rem 0;
    font-size: 1rem;
    @media (max-width: 768px) {
        margin: 0 0 1.2rem 0;
    }
    margin: 0;
    font-size: 1rem;
    @media (max-width: 768px) {
        margin: 0;
    }
`;

const Br = styled.div`
    content: ' ';
    display: block;
    height: 15px;
`;

export default function Bio(props) {
    let location = useLocation();

    return (
        <Div className={'box transition'}>
            <ImgDiv>
                <Img
                    src={props.img || process.env.PUBLIC_URL + `./me_white.png`}
                    alt="Logo"
                />
            </ImgDiv>
            <TextDiv>
                <P>
                    Hi, I'm John-Michael Smith, a Software Engineer currently
                    living in Metro-Atlanta. I studied Computer Science at the
                    University of Georgia as an Honors Student and graduated cum
                    laude in 2019, where I also received a certificate in
                    Applied Data Science.
                </P>
                <Br />
                <P>
                    I enjoy programming primarily in JavaScript and Python, but
                    I have experience with Java and C/C++ as well. I like to
                    take on projects that cover my interests in things—such as
                    movies, music, and genealogical research—as well as
                    automating tasks with python
                </P>
                {location.pathname === '/about' ? null : (
                    <Button to={'/about'} newMargin={'1.5rem 0 0 0'}>
                        More About Me
                    </Button>
                )}
            </TextDiv>
        </Div>
    );
}
