import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Projects as Projs } from "../Consts/project_consts"
import SkillTag from "../Components/SkillTag"
import Button from "../Components/Button.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/Image"
import MediaCard from "../components/Cards/MediaCard"

const Div = styled.div`
  //flex-basis: 50%;
  //display: -webkit-flex;
  //display: flex;
  //display: inherit;
  //flex-wrap: wrap;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  //flex-basis: calc(50% - 20px);
  overflow: show;
  @media (max-width: 768px) {
    //flex-basis: 100%;
  }
`

const ImgDiv = styled.div`
  float: left;
  padding-right: 1.5rem;
  @media (min-width: 768px) and (max-width: 992px) {
    //display: flex;
    justify-content: center;
    flex-basis: 100%;
    margin: 0 auto 1.5rem auto;
    float: none;
  }
  @media (max-width: 525px) {
    //display: flex;
    justify-content: center;
    flex-basis: 100%;
    margin: 0 auto 1.5rem auto;
    float: none;
  }
`

const Description = styled.div`
  padding: 0 0 0 0;
  //max-width: 75%;
  //flex-basis: 75%;
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
  position: relative;
  top: 5px;
  margin: 0;
  color: ${props => props.theme.textSecondary};
  font-size: 1rem;
`

const P2 = styled.p`
  padding: 10px 0;
  margin: 0;
  color: ${props => props.theme.textSecondary};
  font-size: 1rem;
`
const P3 = styled.p`
  position: relative;
  width: 100%;
  top: 10px;
  margin: 0;
  color: ${props => props.theme.textSecondary};
  font-size: 1rem;
`

const FlexDiv = styled.div`
  padding: 0;
  margin: 0;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  max-height: 1000px;
  @media (max-width: 992px) {
    max-height: 1300px;
  }
  @media (max-width: 576px) {
    max-height: none;
  }
`

export default function ProjectPage(props) {
  const [data, setData] = useState({})
  let params = new URLSearchParams(document.location.search.substring(1))
  let query = params.get("p")

  useEffect(() => {
    // window.scrollTo(0, 0)
    setData(Projs[query])
  }, [data, query])

  return data === undefined ? null : (
    <Layout>
      <SEO title={data.name} />
      <div className="container">
        <H1>Project</H1>
        <Div className={"box transition"}>
          {data.img === null ? null : (
            <ImgDiv>
              {/* <Img src={data.img} alt="Project Image" /> */}
              <Image
                filename={data.img}
                alt="Project Image"
                style={{
                  height: "132px",
                  width: "223px",
                  borderRadius: "0.5rem 0.5rem",
                  backgroundColor: `${props => props.bg}`,
                  /*border: `4px solid ${props => props.theme.secondary}`,*/
                  padding: 0,
                }}
              />
            </ImgDiv>
          )}
          {/* <Description> */}
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
          {data.longer && (
            <>
              <P3>{data.longer}</P3>
            </>
          )}
          {/* </Description> */}
          {data.outlink === null ? null : (
            <span style={{ width: "100%", display: "inline-block" }}>
              <Button className="transition" to={data.outlink} target="_blank">
                {data.outLinkText}
              </Button>
            </span>
          )}
        </Div>

        {data.gallery === null ? null : data.gallery === undefined ? null : (
          <>
            <H1>Gallery</H1>

            <FlexDiv>
              {data.gallery.map(entry => (
                <MediaCard data={entry} />
              ))}
            </FlexDiv>
          </>
        )}

        {data.documents === null ? null : data.documents ===
          undefined ? null : (
          <>
            <H1>Documents</H1>

            <FlexDiv>
              {data.documents.map(entry => (
                <MediaCard data={entry} />
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
