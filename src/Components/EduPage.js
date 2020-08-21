import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams, useLocation } from 'react-router-dom'
import { Schools } from '../Consts/education_consts'

const Div = styled.div`
    background-color: ${(props) => props.theme.foreground};
    padding: 1.5rem;
    flex-basis: 50%;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    flex-basis: calc(50% - 20px);
    border: 1px solid ${(props) => props.theme.foregroundBorder};

    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const Img = styled.img`
    height: 132px;
    width: auto;
    border-radius: 200px;
    background-color: ${(props) => props.bg};
    /*border: 4px solid ${(props) => props.theme.secondary};*/
    padding: 0;
`;

const ImgDiv = styled.div`
    @media (min-width: 768px) and (max-width: 992px) {
        display: flex;
        justify-content: center;
        flex-basis: 100%;
        margin: 0 auto 1.5rem auto;
    }
    @media (max-width: 525px) {
        display: flex;
        justify-content: center;
        flex-basis: 100%;
        margin: 0 auto 1.5rem auto;
    }
`;

const Description = styled.div`
    padding: 0 0 0 1.5rem;
    @media (min-width: 768px) and (max-width: 992px) {
        padding: 0;
    }
    @media (max-width: 525px) {
        padding: 0;
    }
`;
const About = styled.div`
    padding: 0 0 0 1.5rem;
    @media (min-width: 768px) and (max-width: 992px) {
        padding: 0;
    }
    @media (max-width: 525px) {
        padding: 0;
    }
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

const A = styled.a`
    padding: 0.6rem 0.75rem;
    margin: 10px 0 0 0;
    font-size: 1rem;
    display: block;
    float: left;
    width: auto;
    color: ${(props) => props.theme.buttonText};
    background-color: ${(props) => props.theme.button};
    border: 1px solid ${(props) => props.theme.foregroundBorder};
    border-radius: 0.375rem;

    &:hover {
        background-color: ${(props) => props.theme.buttonHover};
        cursor: pointer;
    }
`;

export default function EduPage(props) {
    const [data, setData] = useState({})
    let query = new URLSearchParams(useLocation().search)
    query = query.get('s')

    useEffect(() => {
        setData(Schools[query]) 
        console.log(Schools)
        console.log(query)
        console.log(Schools[query])
        console.log(data)
    }, [])
    return (
        data == undefined ? null :
        <div className="container">
            <Div className={'box transition'}>
                {data.img == null ? null : (
                    <ImgDiv>
                        <Img src={data.img} alt="School Crest" />
                    </ImgDiv>
                )}
                <Description>
                    <H1>{data.name != null ? data.name : null}</H1>
                    <P>
                        {data.degree}
                        {data.degree == null ? null : <br />}
                        {data.cert}
                        {data.cert == null ? null : <br />}
                        {data.date}
                        {data.date == null ? null : <br />}
                        {data.gpa}
                        {data.gpb == null ? null : <br />}
                    </P>
                </Description>
                <About>

                </About>
            </Div>
        </div>
    );
}
