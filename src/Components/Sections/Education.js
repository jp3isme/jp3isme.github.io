import React from 'react';
import styled from 'styled-components';
import EduCard from '../Cards/EduCard';
import EduCard2 from '../Cards/EduCard2';
import { UGA, KSU } from '../../Consts/education_consts';

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
