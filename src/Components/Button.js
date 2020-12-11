import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const A = styled.a`
    padding: 0.6rem 0.75rem;
    margin: ${(props) => props.newMargin || '1.5rem 0 0 10px'};
    font-size: 1rem;
    display: block;
    float: left;
    width: auto;
    color: ${(props) => props.theme.buttonText};
    background-color: ${(props) => props.theme.button};
    border: 1px solid ${(props) => props.theme.foregroundBorder};
    border-radius: 0.375rem;
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.buttonHover};
        cursor: pointer;
    }
`;

const Lin = styled(Link)`
    padding: 0.6rem 0.75rem;
    margin: ${(props) => props.newMargin || '1.5rem 0 0 10px'};
    font-size: 1rem;
    display: block;
    float: left;
    width: auto;
    color: ${(props) => props.theme.buttonText};
    background-color: ${(props) => props.theme.button};
    border: 1px solid ${(props) => props.theme.foregroundBorder};
    border-radius: 0.375rem;
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.buttonHover};
        cursor: pointer;
    }
`;

export default function Button(props) {
    console.log(props.newMargin);

    return (
        <>
            {props.target === '_blank' ? (
                <A href={props.to} target="_blank" newMargin={props.newMargin}>
                    {props.children}
                </A>
            ) : (
                <Lin to={props.to} newMargin={props.newMargin}>
                    {props.children}
                </Lin>
            )}
        </>
    );
}
