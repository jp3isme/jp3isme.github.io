import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Schools } from "../Consts/education_consts"
import { Projects as Projs } from "../Consts/project_consts"
import SkillTag from "../components/SkillTag"
import ProjectCard from "../components/Cards/ProjectCard"
import Button from "../components/Button.js"
import Image from "../components/Image"
import uga_crest from "../images/uga_crest_01.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Div = styled.div`
  flex-basis: 50%;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  flex-basis: calc(50% - 20px);

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

const Img = styled.img`
  height: 132px;
  width: auto;
  min-width: 132px;
  border-radius: 200px;
  background-color: rgb(102, 67, 90);
  background-color: rgb(186, 12, 47);
  background-color: ${props => props.theme.background};
  //stroke: rgb(186,12,47);
  /*border: 4px solid ${props => props.theme.secondary};*/
  padding: 5px;
`

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
`

const Description = styled.div`
  padding: 0 0 0 1.5rem;
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0;
  }
  @media (max-width: 525px) {
    padding: 0;
  }
`
const Courses = styled.div`
  width: max-content;
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0;
  }
  @media (max-width: 525px) {
    padding: 0;
  }
`
const About = styled.div`
  padding: 0 0 0 1.5rem;
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0;
  }
  @media (max-width: 525px) {
    padding: 0;
  }
`

const H1 = styled.h1`
  padding: 0;
  margin: 1.8rem 0 -0.7rem 10px;
  font-size: 1.3rem;
`

const H2 = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1rem;
`

const P = styled.p`
  padding: 5px 0;
  margin: 0;
  color: ${props => props.theme.textSecondary};
  font-size: 1rem;
`

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`

const FlexDiv = styled.div`
  padding: 0;
  margin: 0;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

export default function EduPage(props) {
  const [data, setData] = useState({})
  const [useUGA, setUseUGA] = useState(false)
  //let params = new URLSearchParams(document.location.search.substring(1))
  let query = props.location.search.split("=")[1]

  useEffect(() => {
    setData(Schools[query])
    let extension = Schools[query].img.split(".")[1]
    console.log(extension)
    if (extension === "svg") setUseUGA(true)
    else if (useUGA == true) setUseUGA(false)
  }, [data])
  return data === undefined ? null : (
    <Layout>
      <SEO title={data.name} />
      <div className="container">
        <Div className={"box transition"}>
          {data.img === null ? null : (
            <ImgDiv>
              {useUGA ? (
                <Img src={uga_crest} alt="UGA Crest" />
              ) : (
                <Image
                  filename={data.img}
                  alt="School Crest"
                  style={{
                    height: "132px",
                    width: "132px",
                    minWidth: "132px",
                    borderRadius: "200px",
                    backgroundColor: `${props => props.bg}`,
                    /*border: 4px solid ${props => props.theme.secondary},*/
                    padding: 0,
                  }}
                />
              )}
            </ImgDiv>
          )}
          <Description>
            <H2>{data.name != null ? data.name : null}</H2>
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
          <About></About>
        </Div>
        {data.coursework == null ? null : (
          <span>
            <H1>Relevant Courses</H1>
            <span className={""}>
              {data.coursework.map((course, i) => (
                <CourseCard course={course} key={course.name + i} />
              ))}
            </span>
          </span>
        )}
        {data.projects == null ? null : (
          <>
            <H1 style={{ clear: "both", paddingTop: "1.8rem" }}>
              Selected Course Projects
            </H1>
            <FlexDiv>
              {data.projects.map((project, i) => (
                <ProjectCard data={Projs[project]} key={project + i} />
              ))}
            </FlexDiv>
          </>
        )}
        <span style={{ width: "100%", display: "inline-block" }}>
          <Button to={"/"}>Go Home</Button>
        </span>
      </div>
    </Layout>
  )
}

const CourseDiv = styled.div`
  width: max-content;
  max-width: 90%;
  float: left;
  min-height: 82px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  flex-basis: calc(50% - 20px);

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

const H3 = styled(H2)`
  margin-right: 5px;
`

function CourseCard({ course }) {
  return (
    <CourseDiv className={"box transition"}>
      <H3>{course.name}</H3>
      {course.tags.map((skill, i) => (
        <SkillTag skill={skill} key={skill + i} />
      ))}
    </CourseDiv>
  )
}
