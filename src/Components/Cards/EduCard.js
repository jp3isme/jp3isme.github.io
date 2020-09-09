import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
    flex-basis: calc(50% - 20px);
    border: 1px solid ${(props) => props.theme.foregroundBorder};

    @media (max-width: 768px) {
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
        display: flex;
        justify-content: center;
        flex-basis: 100%;
        margin: 0 auto 1.5rem auto;
    }
    @media (max-width: 525px) {
        display: flex;
        justify-content: center;
        flex-basis: 100%;
        margin: 0 auto 1.5rem auto;
    }
`;

const Description = styled.div`
    padding: 0 0 0 1.5rem;
    @media (min-width: 768px) and (max-width: 992px) {
        padding: 0;
    }
    @media (max-width: 525px) {
        padding: 0;
    }
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

const A = styled.p`
    padding: 0.6rem 0.75rem;
    margin: 10px 0 0 0;
    font-size: 1rem;
    display: block;
    float: left;
    width: auto;
    color: ${(props) => props.theme.buttonText};
    background-color: ${(props) => props.theme.button};
    border: 1px solid ${(props) => props.theme.foregroundBorder};
    border-radius: 0.375rem;

    &:hover {
        background-color: ${(props) => props.theme.buttonHover};
        cursor: pointer;
    }
`;

export default function EduCard(props) {
    return (
        <Div className={'box transition'}>
            {props.data.img == null ? null : (
                <ImgDiv>
                    <Img src={props.data.img} alt="School Crest" />
                </ImgDiv>
            )}
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
                <Link to={props.data.link}>
                    <A className="transition">
                        View Coursework
                    </A>
                </Link>
            </Description>
        </Div>
    );
}
