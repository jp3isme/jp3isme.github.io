import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    height: 61px;
    /*width: 100%;*/
    padding: 0 10px;
    margin: 1.5rem auto;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    box-shadow: 0 100vh 0 100vh ${(props) => props.theme.foreground};
`;

const Flex = styled.div`
    display: -webkit-flex;
    display: flex;
    align-items: center;
`;

const Span = styled.span`
    color: ${(props) => props.theme.textSecondary};
    font-size: 0.85rem;
    padding: 0;
    margin: 10px;
`;

const Img = styled.img`
    height: 35px;
    width: auto;
    border-radius: 20px;
    background-color: ${(props) => props.bg};
    margin: 0;
    padding: 0;
`;

export default function Footer(props) {
    return (
        <Div>
            <div className="container">
                <Flex>
                    <Span>{props.text}</Span>
                </Flex>
            </div>
        </Div>
    );
}
