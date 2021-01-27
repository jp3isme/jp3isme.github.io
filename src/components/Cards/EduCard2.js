import React from 'react';
import styled from 'styled-components';
import Button from '../Button.js';

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
    border: 1px solid ${(props) => props.theme.foregroundBorder};

    @media (max-width: 992px) {
        flex-basis: calc(50% - 20px);
    }
    @media (max-width: 768px) {
        flex-basis: 100%;
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

export default function EduCard2(props) {
    return (
        <Div className={'box transition'}>
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
                <Button to={props.data.link} newMargin={'10px 0 0 0'}>
                    View Coursework
                </Button>
            </Description>
        </Div>
    );
}
