/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Sections/Header"
import Footer from "./Sections/Footer"
import styled from "styled-components"
import Context from "../store/context"
import { GlobalStyle } from "../components/theme/globalStyle"
import { ThemeProvider } from "styled-components"
import "../../public/fonts/style.css"

const Body = styled.div`
  //background: ${props => props.theme.background};
  padding: 0;
  margin: 0;
  // width: 100vw;
  height: 100%;
  //color: ${props => props.theme.textPrimary};
  transition: 0;
`

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {}, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={state.theme}>
        <GlobalStyle />
        <Body className={"body"}>
          <Header
            className="transition"
            img={process.env.PUBLIC_URL + `./me_white.png`}
            text={"John-Michael H. Smith"}
            bg={"white"}
            toggleTheme={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
          />
          <main>{children}</main>
          <Footer
            text={"© 2020 John-Michael H. Smith"}
            email={"jp3isme@gmail.com"}
            resume={
              process.env.PUBLIC_URL + `./John-Michael_Smith_Resume_S2020.pdf`
            }
          />
        </Body>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
