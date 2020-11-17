import React from 'react';
import styled from 'styled-components';
import SkillTag from '../SkillTag';
import { Link } from 'react-router-dom';

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    padding: 1.5rem;
    min-width: 200px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    flex-basis: calc(33% - 20px);
    border: 1px solid ${(props) => props.theme.foregroundBorder};

    @media (max-width: 991px) {
        flex-basis: calc(50% - 20px);
    }
    @media (max-width: 576px) {
        flex-basis: calc(100%);
    }
`;

const Img = styled.img`
    height: auto;
    width: calc(100% + 3rem);
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: ${(props) => props.bg};
    padding: 0;
    margin: -1.5rem -1.5rem 0.75rem -1.5rem;
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
    border: 1px solid ${(props) => props.theme.foregroundBorder};
    border-radius: 0.35rem;

    &:hover {
        background-color: ${(props) => props.theme.buttonHover};
        cursor: pointer;
    }
`;

const Git = styled(A)`
    font-size: 1.5rem;
    margin: 15px 0px 0 5px;
`;

export default function ProjectCard(props) {
    return (
        <Div className={'box transition'}>
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
                    {props.data.skills.map((skill, i) => (
                        <SkillTag skill={skill} key={skill + i} />
                    ))}
                </P2>
                {props.data.link ? (
                    props.data.external ? (
                        <A
                            className="transition"
                            href={props.data.link}
                            target="_blank"
                        >
                            {props.data.linkText}
                        </A>
                    ) : (
                        <Link to={props.data.link}>
                            <A className="transition">{props.data.linkText}</A>
                        </Link>
                    )
                ) : null}
                {props.data.github ? (
                    <Git
                        className="transition icon-github"
                        href={props.data.github}
                        target="_blank"
                    ></Git>
                ) : null}
            </Description>
        </Div>
    );
}
