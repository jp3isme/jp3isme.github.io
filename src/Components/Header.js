import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    height: 61px;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    display: -webkit-flex;
    display: flex;
    align-items: center;
`;

const Flex = styled.div`
    display: -webkit-flex;
    display: flex;
    align-items: center;
`;

const Span = styled.span`
    color: ${(props) => props.theme.textPrimary};
    font-size: 1.1rem;
    padding: 0;
    margin: 0;
`;

const Img = styled.img`
    height: 35px;
    width: auto;
    border-radius: 20px;
    background-color: ${(props) => props.bg};
    margin: 0;
    padding: 0;
`;

export default function Header(props) {
    return (
        <Div>
            <div className="container">
                <Flex>
                    <div
                        style={{
                            backgroundColor: props.bg,
                            borderRadius: '20px',
                            margin: '10px',
                            height: '35px',
                        }}
                    >
                        <Img src={props.img} alt="Logo" />
                    </div>

                    <Span>{props.text}</Span>
                </Flex>
            </div>
        </Div>
    );
}
