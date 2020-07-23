import React from 'react';
import styled from 'styled-components';
import EduCard from './EduCard';
import EduCard2 from './EduCard2';

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

const UGA = {
    img: process.env.PUBLIC_URL + `./uga_crest.png`,
    name: 'University of Georgia (Honors)',
    degree: 'Computer Science, B.S.',
    cert: 'Certificate in Applied Data Science',
    date: 'Fall 2017 - Spring 2019',
    gpa: 'GPA: 3.72, Cum Laude',
    coursework: [
        { name: 'Software Engineering', tags: ['Java'] },
        { name: 'Intro To Scientific Computing', tags: ['MATLAB'] },
        { name: 'Num Sim for Sci and Engineering', tags: ['MATLAB'] },
        { name: 'Artificial Intelligence', tags: ['Java', 'Masters'] },
        { name: 'Data Science I', tags: ['Python'] },
        { name: 'Data Mining', tags: ['Python', 'scikit-learn', 'Masters'] },
        { name: 'Computing, Ethics, and Society', tags: [] },
        { name: 'Operating Systems', tags: ['UNIX', 'C'] },
        { name: 'Human-Computer Interaction', tags: ['Masters'] },
        { name: 'Systems Programming', tags: ['UNIX', 'C++'] },
        { name: 'Introduction to Theory of Computing', tags: [] },
    ],
};

const KSU = {
    img: process.env.PUBLIC_URL + `./ksu_crest.png`,
    name: 'Kennesaw State University',
    date: 'Fall 2015 - Spring 2017',
    gpa: 'GPA: 3.83',
    coursework: [
        { name: 'Programming Principles I', tags: ['Java'] },
        { name: 'Programming Principles II', tags: ['Java'] },
        { name: 'Data Structures', tags: ['C++'] },
        { name: 'Computer Architecture & Communication', tags: [] },
        { name: 'Intro to Database Systems', tags: ['SQL', 'Dia'] },
        { name: 'User-Centered Design', tags: [] },
        { name: 'Discrete Mathematics', tags: [] },
        { name: 'Linear Algebra I', tags: [] },
        { name: 'Calculus I', tags: [] },
        { name: 'Statistics I', tags: [] },
    ],
};

export default function Education(props) {
    return (
        <Div className="container">
            <H1>Education</H1>
            <FlexDiv>
                <EduCard data={UGA} />
                <EduCard2 data={KSU} />
            </FlexDiv>
        </Div>
    );
}
