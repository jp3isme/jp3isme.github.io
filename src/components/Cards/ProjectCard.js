import React, { useEffect } from "react"
import styled from "styled-components"
import SkillTag from "../SkillTag"
import Button from "../Button.js"
import Image from "../Image"

const Div = styled.div`
  order: ${props => props.order};
  background-color: ${props => props.theme.foreground};
  padding: 1.5rem;
  min-width: 200px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  max-width: calc(33% - 20px);
  border: 1px solid ${props => props.theme.foregroundBorder};

  @media (max-width: 991px) {
    max-width: calc(50% - 20px);
  }
  @media (max-width: 576px) {
    max-width: calc(100%);
  }
`

const Img = styled(Image)``

const Description = styled.div`
  padding: 0 0 0 0;
`

const H1 = styled.h1`
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

const P2 = styled.p`
  padding: 5px 0 0 0;
  margin: 0;
  color: ${props => props.theme.textSecondary};
  font-size: 1rem;
`

const Git = styled.a`
  text-decoration: none;
  padding: 0.6rem 0.75rem;
  margin: 15px 0px 0 5px;
  font-size: 1.5rem;
  display: block;
  float: left;
  width: auto;
  color: ${props => props.theme.buttonText};
  background-color: ${props => props.theme.button};
  border: 1px solid ${props => props.theme.foregroundBorder};
  border-radius: 0.35rem;

  &:hover {
    background-color: ${props => props.theme.buttonHover};
    cursor: pointer;
  }
`

export default function ProjectCard(props) {
  useEffect(() => {}, [props])
  return (
    <Div className={"box transition"} order={props.order}>
      {props.data.img == null ? null : (
        // <Img
        //   filename={props.data.img}
        //   alt={`Project Image (${props.data.name})`}
        // />
        <Image
          filename={props.data.img}
          style={{
            height: "auto",
            width: "calc(100% + 3rem)",
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "0.5rem 0.5rem 0 0",
            backgroundColor: `${props => props.bg}`,
            padding: 0,
            margin: "-1.5rem -1.5rem 0.75rem -1.5rem",
          }}
          alt={`Project Image (${props.data.name})`}
        />
      )}
      <Description>
        <H1>{props.data.name != null ? props.data.name : null}</H1>
        <P>{props.data.description}</P>
        
        <P2>
          {props.data.skills.map((skill, i) => (
            <SkillTag skill={skill} key={skill + i} />
          ))}
        </P2>
        {props.data.link ? (
          <Button
            to={props.data.link}
            target={props.data.target}
            newMargin={"15px 0 0 0"}
          >
            {props.data.linkText}
          </Button>
        ) : null}
        {props.data.github ? (
          <Git
            className="transition icon-github"
            href={props.data.github}
            target="_blank"
          ></Git>
        ) : null}
      </Description>
    </Div>
  )
}
