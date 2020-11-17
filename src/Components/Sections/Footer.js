import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    height: auto;
    /*width: 100%;*/
    padding: 0.25rem 10px 0.5rem 10px;
    margin: 1.5rem 0 0 0;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    box-shadow: 0 100vh 0 100vh ${(props) => props.theme.foreground};
    border-top: 1px solid ${(props) => props.theme.foregroundBorder};
`;

const Flex = styled.div`
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const Ul = styled.ul`
    line-height: 0.75rem;
    list-style: none;
    margin-left: -2rem;

    li {
        padding: 1.5px 5px;
        border-radius: 0.375rem;
    }
`;

const Span = styled.span`
    color: ${(props) => props.theme.textSecondary};
    font-size: 0.85rem;
    padding: 0;
    margin: 10px;
`;

const A = styled.a`
    color: ${(props) => props.theme.textSecondary};
    font-size: 0.85rem;
    padding: 0;
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    overflow: visible;

    &:hover {
        color: ${(props) => props.theme.buttonTextHover};
        background-color: ${(props) => props.theme.buttonHover};
    }
`;

const P = styled.p`
    color: ${(props) => props.theme.textSecondary};
    font-size: 0.85rem;
    padding: 0;
    margin: 10px;
    text-decoration: none;
    display: block;
`;

export default function Footer(props) {
    return (
        <Div className="transition">
            <div className="container">
                <Ul>
                    <li>
                        <A href={props.resume}>&middot; resume</A>
                    </li>
                    <li>
                        <A href={'mailto:' + props.email}>
                            &middot; {props.email}
                        </A>
                    </li>
                    <li>
                        <P>{props.text}</P>
                    </li>
                </Ul>
            </div>
        </Div>
    );
}
