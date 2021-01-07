import React from 'react';
import styled from 'styled-components';

const S = styled.span`
    text-decoration: none;
    color: ${(props) => props.theme.textSkillTag};
    background-color: ${(props) => props.theme.skillTag};
    border-radius: 0.375rem;
    padding: 1.5px 5px;
    margin: 2.5px 5px 2.5px 0px;
    font-size: 0.85rem;
    line-height: 1.75;
    display: inline-flex;
    /*transition: 0.3s;

    &:hover {
        color: ${(props) => props.theme.foreground};
        background-color: ${(props) => props.theme.buttonHover};
    }*/
`;

export default function SkillTag(props) {
    return <S className="transition">&middot; {props.skill}</S>;
}
