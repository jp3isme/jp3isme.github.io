import React from "react"
import styled from "styled-components"
import Button from "../Button.js"
import { Link } from "gatsby"
import uga_crest from "../../images/uga_crest_0.svg"

const Div = styled.div`
  // background-color: ${props => props.theme.foreground};
  padding: 1.5rem;
  flex-basis: 50%;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  flex-basis: calc(50% - 20px);
  // border: 1px solid ${props => props.theme.foregroundBorder};

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

const Img = styled.span`
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(/documents/uga_crest_1.svg);
  height: 132px;
  min-width: 132px;
  width: auto;
  border-radius: 200px;
  // background-color: ${props => props.bg};
  /*border: 4px solid ${props => props.theme.secondary};*/
  // padding: 5px;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: optimizeQuality;
  // background-color: ${props => props.theme.background};
`

const ImgDiv = styled.div`
  border-radius: 200px;
  height: 131px;
  max-width: 131px;
  padding: 5px;
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

const H1 = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1rem;
`

const P = styled.p`
  padding: 5px 0;
  margin: 0;
  // color: ${props => props.theme.textSecondary};
  font-size: 1rem;
`

export default function EduCard(props) {
  return (
    <Div className={"box transition"}>
      {props.data.img == null ? null : (
        <ImgDiv className={"img"}>
          {/* <Image filename={props.data.img} /> */}
          <Img src={uga_crest} viewBox="0 0 612 612" className={"edu_crest"} />
        </ImgDiv>
      )}
      <Description>
        <H1>{props.data.name != null ? props.data.name : null}</H1>
        <P>
          {props.data.degree}
          {props.data.degree == null ? null : <br />}
          {props.data.cert}
          {props.data.cert == null ? null : <br />}
          {props.data.date}
          {props.data.date == null ? null : <br />}
          {props.data.gpa}
          {props.data.gpa == null ? null : <br />}
        </P>
        <Button to={props.data.link} newMargin={"10px 0 0 0"}>
          View Coursework
        </Button>
      </Description>
    </Div>
  )
}
