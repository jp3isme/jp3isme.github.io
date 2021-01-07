/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Sections/Header"
import Footer from "./Sections/Footer"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./theme/globalStyle"
import {
  lightTheme as lightTheme,
  darkTheme2 as darkTheme,
} from "../components/theme/Themes"

const Layout = ({ children }) => {
  const time = new Date().getHours()
  const [theme, setTheme] = useState(
    time > 7 && time < 21 ? lightTheme : darkTheme
  )

  let toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  useEffect(() => {}, [theme])

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          className="transition"
          img={process.env.PUBLIC_URL + `./me_white.png`}
          text={"John-Michael H. Smith"}
          bg={"white"}
          toggleTheme={toggleTheme}
        />
        <main>{children}</main>
        <Footer
          text={"© 2020 John-Michael H. Smith"}
          email={"jp3isme@gmail.com"}
          resume={
            process.env.PUBLIC_URL + `./John-Michael_Smith_Resume_S2020.pdf`
          }
        />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
