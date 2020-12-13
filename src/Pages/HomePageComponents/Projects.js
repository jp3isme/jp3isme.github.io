import React, { useState, useEffect } from 'react';
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
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    max-height: 1000px;
    @media (max-width: 992px) {
        max-height: 1300px;
    }
    @media (max-width: 576px) {
        max-height: none;
    }
`;

const H1 = styled.h1`
    padding: 0;
    margin: 1.8rem 0 -0.7rem 10px;
    font-size: 1.3rem;
`;

export default function Projects() {
    const [orders, setOrders] = useState({
        first: -5,
        second: -4,
        third: -3,
        fourth: -2,
        fifth: -1,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            if (window.innerWidth > 992) {
                let newOrders = {
                    first: -5,
                    second: -4,
                    third: -3,
                    fourth: -2,
                    fifth: -1,
                };
                if (orders != newOrders) setOrders(newOrders);
            } else if (window.innerWidth <= 992 && window.innerWidth > 576) {
                let newOrders = {
                    first: -5,
                    second: -1,
                    third: -3,
                    fourth: -2,
                    fifth: -4,
                };
                if (orders != newOrders) setOrders(newOrders);
            } else {
                let newOrders = {
                    first: -5,
                    second: -1,
                    third: -4,
                    fourth: -2,
                    fifth: -3,
                };
                if (orders != newOrders) setOrders(newOrders);
            }
        }
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return (
        <Div className="container">
            <H1>Projects</H1>
            <FlexDiv>
                <ProjectCard order={orders.first} data={Projs.myMDb} />
                <ProjectCard
                    order={orders.second}
                    data={Projs.eCinemaBooking}
                />
                <ProjectCard order={orders.third} data={Projs.AncestryMap} />
                <ProjectCard
                    order={orders.fourth}
                    data={Projs.ranked_choice_voting}
                />
                <ProjectCard order={orders.fifth} data={Projs.Spoticli} />
            </FlexDiv>
        </Div>
    );
}
