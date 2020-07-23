import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import JokeTag from './JokeTag';

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    padding: 1.5rem;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    flex-basis: calc(22% - 20px);
    min-width: 191px;

    @media (max-width: 991px) {
        flex-basis: 35%;
    }
    @media (max-width: 767px) {
        flex-basis: 45%;
    }
    @media (max-width: 575px) {
        flex-basis: 100%;
    }
`;

const H1 = styled.h1`
    margin: 0px 0 8px 0;
    padding: 0;
    font-size: 0.85rem;
`;

const P = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.85rem;
    line-height: 1.75;
`;

const Hr = styled.hr`
    margin: 12px 0;
    padding: 0;
    border: 1px solid #454158;
`;

export default function Links(props) {
    return (
        <Div className="box">
            <H1>Links</H1>
            <P>
                {props.socials.map((social) => (
                    <>
                        <Tag text={social.text} link={social.link} />
                        <span>&#32;</span>
                    </>
                ))}
                <JokeTag setup={'Google+'} punchline={'Kidding!'} />
                <Hr />
                <H1>Contacts</H1>
                <P>
                    <Tag
                        text={props.contacts.email}
                        link={'mailto:' + props.contacts.email}
                    />
                    <span>&#32;</span>
                    <Tag
                        text={props.contacts.phone}
                        link={'tel:' + props.contacts.phone}
                    />
                </P>
            </P>
        </Div>
    );
}
