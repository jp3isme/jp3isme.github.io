import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ProjectCard from "../Cards/ProjectCard"
import { Projects as Projs } from "../../Consts/project_consts"
const Div = styled.div`
  padding: 0;
  //margin: 0;
`

const FlexDiv = styled.div`
  padding: 0;
  margin: 0;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  max-height: 1100px;
  @media (max-width: 992px) {
    max-height: 1500px;
  }
  @media (max-width: 576px) {
    max-height: none;
  }
`

const H1 = styled.h1`
  padding: 0;
  margin: 1.8rem 0 -0.7rem 10px;
  font-size: 1.3rem;
`

export default function Projects() {
  const [orders, setOrders] = useState({
    first: -7,
    second: -6,
    third: -5,
    fourth: -4,
    fifth: -3,
    sixth: -2,
    seventh: -1,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (window.innerWidth > 992) {
        let newOrders = {
          first: -6,
          second: -1,
          third: -5,
          fourth: -2,
          fifth: -1,
          sixth: -3,
          seventh: -4,
        }
        if (orders != newOrders) setOrders(newOrders)
      } else if (window.innerWidth <= 992 && window.innerWidth > 576) {
        let newOrders = {
          first: -7,
          second: -2,
          third: -4,
          fourth: -3,
          fifth: -5,
          sixth: -6,
          seventh: -1,
        }
        if (orders != newOrders) setOrders(newOrders)
      } else {
        let newOrders = {
          first: -7,
          second: -2,
          third: -5,
          fourth: -3,
          fifth: -5,
          sixth: -4,
          seventh: -6,
        }
        //if (orders != newOrders) setOrders(newOrders)
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return (
    <Div className="container">
      <H1>Projects</H1>
      <FlexDiv>
        {/* <ProjectCard order={orders.first} data={Projs.myMDb} />
        <ProjectCard order={orders.second} data={Projs.CinemaEBooking} />
        <ProjectCard order={orders.third} data={Projs.AncestryMap} />
        <ProjectCard order={orders.fourth} data={Projs.ranked_choice_voting} />
        <ProjectCard order={orders.fifth} data={Projs.Spoticli} />
        <ProjectCard order={orders.sixth} data={Projs.MyPortfolio} />
        <ProjectCard order={orders.seventh} data={Projs.filmSchedules} /> */}
        <ProjectCard data={Projs.myMDb} /> {/**1 */}
        <ProjectCard data={Projs.AncestryMap} /> {/**3 */}
        <ProjectCard data={Projs.filmSchedules} /> {/**7 */}
        <ProjectCard data={Projs.MyPortfolio} /> {/**6 */}
        <ProjectCard data={Projs.ranked_choice_voting} /> {/**4 */}
        <ProjectCard data={Projs.CinemaEBooking} /> {/**2 */}
        <ProjectCard data={Projs.Spoticli} /> {/**5 */}
      </FlexDiv>
    </Div>
  )
}
