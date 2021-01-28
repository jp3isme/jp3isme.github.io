import React from "react"
import styled from "styled-components"
import Tag from "../Tag"

const Div = styled.div`
  // background-color: ${props => props.theme.foreground};
  height: auto;
  /*width: 100%;*/
  padding: 0.25rem 10px 0.5rem 10px;
  margin: 1.5rem 0 0 0;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  // box-shadow: 0 100vh 0 100vh ${props => props.theme.foreground};
  // border-top: 1px solid ${props => props.theme.foregroundBorder};
  overflow: hidden;

  padding-bottom: 0.5rem;
  @media (max-width: 992px) {
    padding-bottom: 0.9rem;
  }
  @media (max-width: 576px) {
    padding-bottom: 0.9rem;
  }
  border-bottom: none;
`

const Socials = styled.div`
  margin: 10px;
  padding: 0;
  font-size: 0.85rem;
  overflow: visible;
`

const P = styled.p`
  // color: ${props => props.theme.textSecondary};
  font-size: 0.85rem;
  padding: 0;
  margin: 10px;
  text-decoration: none;
  display: block;
`

export default function Footer(props) {
  return (
    <Div className="transition box_colors">
      <div className="container">
        <Socials>
          <Tag
            text={"Resume"}
            link={
              // process.env.PUBLIC_URL +
              `/documents/John-Michael_Smith_Resume.pdf`
            }
          />
          <span>&#32;</span>
          <Tag text={"jp3isme@gmail.com"} link={"mailto:jp3isme@gmail.com"} />
        </Socials>
        <P>{props.text}</P>
      </div>
    </Div>
  )
}
