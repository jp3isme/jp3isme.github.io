import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    padding: 0rem;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    align-items: flex-end;
    flex-basis: calc(78% - 20px);

    @media (max-width: 991px) {
        flex-basis: 100%;
    }
`;
const ImgDiv = styled.div`
    background-color: ${(props) => props.bg};
    border-radius: 200px;
    margin: 0 0 1.5rem 0;
    height: 140px;
    overflow: visible;
    align-self: baseline;
    @media (max-width: 768px) {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;
const TextDiv = styled.div`
    flex-basis: calc(100% - 140px - 3rem);
    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const Img = styled.img`
    height: 132px;
    width: 132px;
    border-radius: 200px;
    background-color: ${(props) => props.bg};
    border: 4px solid ${(props) => props.theme.secondary};
    margin: 1.5rem;
    padding: 0;
`;

const P = styled.p`
    padding: 0;
    margin: 1.5rem 1.5rem 1.5rem 0;
    font-size: 1rem;
    @media (max-width: 768px) {
        margin: 1.5rem;
    }
`;

export default function Bio(props) {
    return (
        <Div className="box">
            <ImgDiv>
                <Img src={props.img} alt="Logo" />
            </ImgDiv>
            <TextDiv>
                <P>
                    Hi, I'm John-Michael Smith, a Software Engineer currently
                    living in Metro-Atlanta. I studied Computer Science at the
                    University of Georgia as an Honors Student and graduated cum
                    laude in 2019, where I also received a certificate in
                    Applied Data Science.
                </P>
                <P>
                    I enjoy programming primarily in JavaScript and Python, but
                    I have experience with Java and C/C++ as well. I like to
                    make websites and tools that cover my interests in
                    things—such as movies, music, and genealogical research—as
                    well as automating away the boring stuff.
                </P>
            </TextDiv>
        </Div>
    );
}
