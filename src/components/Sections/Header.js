import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "../Image"

const Div = styled.div`
  // background-color: ${props => props.theme.foreground};
  height: 61px;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  // border-bottom: 1px solid ${props => props.theme.foregroundBorder};
`

const Flex1 = styled.div`
  display: -webkit-flex;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Flex2 = styled.div`
  display: -webkit-flex;
  display: flex;
  align-items: center;
`

const Span = styled.span`
  color: ${props => props.theme.textPrimary};
  font-size: 1.1rem;
  padding: 0;
  margin: 0;
  text-decoration: none;
`

const Img = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 20px;
  background-color: ${props => props.bg};
  margin: 0;
  padding: 0;
`

const ThemeSpan = styled.span`
  font-size: 1.8rem;
  align-self: center;
  margin: 0 10px;
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  overflow: visible;
  //color: ${props => props.theme.themeToggle};

  &:hover {
    cursor: pointer;
  }
  @media (min-width: 767px) {
    font-size: 1.3rem;
    &:hover {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
`

export default function Header(props) {
  return (
    <Div className="transition box_colors">
      <Flex1 className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Flex2>
            <div
              style={{
                backgroundColor: props.bg,
                borderRadius: "20px",
                margin: "10px",
                height: "35px",
              }}
            >
              <Img>
                <Image filename={"me_white.PNG"} />
              </Img>
            </div>

            <Span className="textPrimary">{props.text}</Span>
          </Flex2>
        </Link>
        <ThemeSpan
          className="icon-contrast"
          onClick={props.toggleTheme}
        ></ThemeSpan>
      </Flex1>
    </Div>
  )
}
