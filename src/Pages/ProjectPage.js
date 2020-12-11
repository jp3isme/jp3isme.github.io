import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Schools } from '../Consts/education_consts';
import { Projects as Projs } from '../Consts/project_consts';
import SkillTag from '../Components/SkillTag';
import ProjectCard from '../Components/Cards/ProjectCard';
import Button from '../Components/Button.js';

const Div = styled.div`
    flex-basis: 50%;
    display: -webkit-flex;
    display: flex;
    display: inherit;
    flex-wrap: wrap;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    flex-basis: calc(50% - 20px);
    overflow: show;
    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const Img = styled.img`
    height: 132px;
    width: auto;
    border-radius: 0.5rem 0.5rem;
    background-color: ${(props) => props.bg};
    /*border: 4px solid ${(props) => props.theme.secondary};*/
    padding: 0;
`;

const ImgDiv = styled.div`
    float: left;
    padding-right: 1.5rem;
    @media (min-width: 768px) and (max-width: 992px) {
        display: flex;
        justify-content: center;
        flex-basis: 100%;
        margin: 0 auto 1.5rem auto;
        float: none;
    }
    @media (max-width: 525px) {
        display: flex;
        justify-content: center;
        flex-basis: 100%;
        margin: 0 auto 1.5rem auto;
        float: none;
    }
`;

const Description = styled.div`
    padding: 0 0 0 0;
    max-width: 75%;
    flex-basis: 75%;
    @media (min-width: 768px) and (max-width: 992px) {
        padding: 0;
    }
    @media (max-width: 525px) {
        padding: 0;
    }
`;
const Courses = styled.div`
    width: max-content;
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
    margin: 1.8rem 0 -0.7rem 10px;
    font-size: 1.3rem;
`;

const H2 = styled.h1`
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
    padding: 0.6rem 0.75rem;
    margin: 1.5rem 0 -5px 0px;
    font-size: 1rem;
    display: block;
    float: left;
    width: auto;
    color: ${(props) => props.theme.buttonText};
    background-color: ${(props) => props.theme.button};
    border: 1px solid ${(props) => props.theme.foregroundBorder};
    border-radius: 0.375rem;
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.buttonHover};
        cursor: pointer;
    }
`;

const FlexDiv = styled.div`
    padding: 0;
    margin: 0;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export default function ProjectPage(props) {
    const [data, setData] = useState({});
    let query = new URLSearchParams(useLocation().search);
    query = query.get('p');

    useEffect(() => {
        window.scrollTo(0, 0);
        setData(Projs[query]);
        console.log(Projs);
        console.log(query);
        console.log(Projs[query]);
        console.log(data);
    }, [data, query]);
    return data === undefined ? null : (
        <div className="container">
            <H1>Project</H1>
            <Div className={'box transition'}>
                {data.img === null ? null : (
                    <ImgDiv>
                        <Img src={data.img} alt="Project Image" />
                    </ImgDiv>
                )}
                <Description>
                    <H2>{data.name != null ? data.name : null}</H2>
                    <P>
                        {data.description}
                        {data.description == null ? null : <br />}
                    </P>
                    <P2>
                        {data.skills !== undefined
                            ? data.skills.map((skill, i) => (
                                  <SkillTag skill={skill} key={skill + i} />
                              ))
                            : null}
                    </P2>
                </Description>
                {data.outlink === null ? null : (
                    <span style={{ width: '100%', display: 'inline-block' }}>
                        <Button
                            className="transition"
                            to={data.outlink}
                            target="_blank"
                        >
                            {data.outLinkText}
                        </Button>
                    </span>
                )}
            </Div>

            {data.gallery === null ? null : (
                <>
                    <H1>Gallery</H1>
                    <Div className={'box transition'}>
                        {data.img === null ? null : (
                            <ImgDiv>
                                <Img src={data.img} alt="Project Image" />
                            </ImgDiv>
                        )}
                        <Description>
                            <H2>{data.name != null ? data.name : null}</H2>
                            <P>
                                {data.description}
                                {data.description == null ? null : <br />}
                            </P>
                            <P2>
                                {data.skills !== undefined
                                    ? data.skills.map((skill, i) => (
                                          <SkillTag
                                              skill={skill}
                                              key={skill + i}
                                          />
                                      ))
                                    : null}
                            </P2>
                        </Description>
                        {data.outlink === null ? null : (
                            <span
                                style={{
                                    width: '100%',
                                    display: 'inline-block',
                                }}
                            >
                                <Button
                                    className="transition"
                                    to={data.outlink}
                                    target="_blank"
                                >
                                    {data.outLinkText}
                                </Button>
                            </span>
                        )}
                    </Div>
                </>
            )}

            {data.documents === null ? null : (
                <>
                    <H1>Documents</H1>
                    <Div className={'box transition'}>
                        {data.img === null ? null : (
                            <ImgDiv>
                                <Img src={data.img} alt="Project Image" />
                            </ImgDiv>
                        )}
                        <Description>
                            <H2>{data.name != null ? data.name : null}</H2>
                            <P>
                                {data.description}
                                {data.description == null ? null : <br />}
                            </P>
                            <P2>
                                {data.skills !== undefined
                                    ? data.skills.map((skill, i) => (
                                          <SkillTag
                                              skill={skill}
                                              key={skill + i}
                                          />
                                      ))
                                    : null}
                            </P2>
                        </Description>
                        {data.outlink === null ? null : (
                            <span
                                style={{
                                    width: '100%',
                                    display: 'inline-block',
                                }}
                            >
                                <Button
                                    className="transition"
                                    to={data.outlink}
                                    target="_blank"
                                >
                                    {data.outLinkText}
                                </Button>
                            </span>
                        )}
                    </Div>
                </>
            )}

            <span style={{ width: '100%', display: 'inline-block' }}>
                <Button to={'/'} onClick={scrollUp}>
                    Go Home
                </Button>
            </span>
        </div>
    );
}

const scrollUp = () => {
    window.scrollTo(0, 0);
};
