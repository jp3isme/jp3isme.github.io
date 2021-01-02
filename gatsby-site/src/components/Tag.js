import React from 'react';
import styled from 'styled-components';

const A = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.textHighlight};
    background-color: ${(props) => props.theme.mutedSecondary};
    border-radius: 0.375rem;
    padding: 1.5px 5px;
    white-space: nowrap;

    &:hover {
        color: ${(props) => props.theme.buttonTextHover};
        background-color: ${(props) => props.theme.buttonHover};
    }
`;

export default function Tag(props) {
    return (
        <A className="transition" href={props.link} target="_blank">
            {props.text}
        </A>
    );
}
