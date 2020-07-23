import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    padding: 1.5rem;
    flex-basis: 50%;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    flex-basis: auto;
    flex-basis: calc(33% - 20px);

    @media (max-width: 992px) {
        flex-basis: calc(50% - 20px);
    }
    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;

const Img = styled.img`
    height: 132px;
    width: auto;
    border-radius: 200px;
    background-color: ${(props) => props.bg};
    /*border: 4px solid ${(props) => props.theme.secondary};*/
    padding: 0;
`;

const ImgDiv = styled.div`
    @media (min-width: 768px) and (max-width: 992px) {
        margin: 0 auto 1rem auto;
    }
    @media (max-width: 525px) {
        display: flex;
        justify-content: center;
        flex-basis: 100%;
        margin: 0 auto 1.5rem auto;
    }
`;

const Description = styled.div`
    padding: 0 0 0 0;
`;

const H1 = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 1rem;
`;

const P = styled.p`
    padding: 5px 0;
    margin: 0;
    color: ${(props) => props.theme.textSecondary};
    font-size: 1rem;
`;

const A = styled.a`
    text-decoration: none;
    padding: 0.6rem 0.75rem;
    margin: 10px 0 0 0;
    font-size: 1rem;
    display: block;
    float: left;
    width: auto;
    color: ${(props) => props.theme.buttonText};
    background-color: ${(props) => props.theme.button};
    border-radius: 0.35rem;
    transition: 0.2s;

    &:hover {
        background-color: ${(props) => props.theme.buttonHover};
        cursor: pointer;
    }
`;

export default function EduCard2(props) {
    return (
        <Div className={'box'}>
            <Description>
                <H1>{props.data.name != null ? props.data.name : null}</H1>
                <P>
                    {props.data.degree}
                    {props.data.degree == null ? null : <br />}
                    {props.data.cert}
                    {props.data.cert == null ? null : <br />}
                    {props.data.date}
                    {props.data.date == null ? null : <br />}
                    {props.data.gpa}
                    {props.data.gpb == null ? null : <br />}
                </P>
                <A href={props.data.link}>View Coursework</A>
            </Description>
        </Div>
    );
}
