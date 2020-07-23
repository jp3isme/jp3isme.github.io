import React from 'react';
import styled from 'styled-components';
import SkillTag from './SkillTag';

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    padding: 1.5rem;
    min-width: 200px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    flex-basis: calc(33% - 20px);

    @media (max-width: 991px) {
        flex-basis: calc(50% - 20px);
    }
    @media (max-width: 576px) {
        flex-basis: calc(100%);
    }
`;

const Img = styled.img`
    height: 100px;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: ${(props) => props.bg};
    padding: 0;
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

const P2 = styled.p`
    padding: 5px 0 0 0;
    margin: 0;
    color: ${(props) => props.theme.textSecondary};
    font-size: 1rem;
`;

const A = styled.a`
    text-decoration: none;
    padding: 0.6rem 0.75rem;
    margin: 15px 0 0 0;
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

export default function ProjectCard(props) {
    return (
        <Div className={'box'}>
            {props.data.img == null ? null : (
                <Img
                    src={props.data.img}
                    alt={`Project Image (${props.data.name})`}
                />
            )}
            <Description>
                <H1>{props.data.name != null ? props.data.name : null}</H1>
                <P>{props.data.description}</P>
                <P2>
                    {props.data.skills.map((skill) => (
                        <>
                            <SkillTag skill={skill} />
                            <span>&#32;</span>
                        </>
                    ))}
                </P2>
                {props.data.link ? (
                    <A href={props.data.link} target={props.data.target}>
                        {props.data.linkText}
                    </A>
                ) : null}
            </Description>
        </Div>
    );
}
