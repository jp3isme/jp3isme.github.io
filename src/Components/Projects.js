import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Div = styled.div`
    padding: 0;
    margin: 0;
`;

const FlexDiv = styled.div`
    padding: 0;
    margin: 0;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`;

const H1 = styled.h1`
    padding: 0;
    margin: 1.8rem 0 -0.7rem 10px;
    font-size: 1.3rem;
`;

const myMDb = {
    img: null,
    name: 'myMDb',
    description:
        'An IMDb-like web app for viewing trending TV shows, movies, and people (actors, directors, etc) with data sourced from themoviedb.org API. Users can create an account and save their favorite shows, movies, and people',
    skills: [
        'React',
        'Node.js',
        'Express.js',
        'JavaScript',
        'MongoDB',
        'CSS',
        'Heroku',
    ],
    link: 'https://mymdbapp.herokuapp.com',
    linkText: 'Visit myMDb',
    target: '_blank',
};

const AncestryMap = {
    img: null,
    name: 'AncestryMap',
    description:
        "A genealogical tool utilizing GEDCOMs for visualizing ancestors' birth locations by generation",
    skills: ['React', 'Node.js', 'Electron.js', 'JavaScript', 'CSS'],
    link: ' ',
    linkText: 'View Details',
    target: '',
};

const eCinemaBooking = {
    img: null,
    name: 'eCinemaBooking',
    description:
        'An online movie-ticket booking service developed as a course project',
    skills: ['Java', 'JBoss / WildFly', 'FreeMarker', 'MySQL', 'HTML', 'CSS'],
    link: ' ',
    linkText: 'View Details',
    target: '',
};

const Spoticli = {
    img: null,
    name: 'Spoticli (contributor)',
    description:
        'An open-source command line interface (CLI) for controlling Spotify. Project by Jacob Chambers',
    skills: ['Python'],
    link: 'https://github.com/wjacobc/spoticli',
    linkText: 'View on GitHub',
    target: '_blank',
};

export default function Projects(props) {
    return (
        <Div className="container">
            <H1>Projects</H1>
            <FlexDiv>
                <ProjectCard data={myMDb} />
                <ProjectCard data={AncestryMap} />
                <ProjectCard data={Spoticli} />
                <ProjectCard data={eCinemaBooking} />
            </FlexDiv>
        </Div>
    );
}
