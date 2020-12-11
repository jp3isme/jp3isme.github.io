import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../../Components/Cards/ProjectCard';
import { Projects as Projs } from '../../Consts/project_consts';
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

export default function Projects(props) {
    return (
        <Div className="container">
            <H1>Projects</H1>
            <FlexDiv>
                <ProjectCard data={Projs.myMDb} />
                <ProjectCard data={Projs.AncestryMap} />
                <ProjectCard data={Projs.Spoticli} />
                <ProjectCard data={Projs.eCinemaBooking} />
                <ProjectCard data={Projs.ranked_choice_voting} />
            </FlexDiv>
        </Div>
    );
}
