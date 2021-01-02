import React from "react"
import styled from "styled-components"
import Bio from "../components/HomePageComponents/Bio"
import Education from "../components/HomePageComponents/Education"
import Links from "../components/HomePageComponents/Links"
import Projects from "../components/HomePageComponents/Projects"
import Layout from "../components/layout"

const Div = styled.div`
  padding: 0;
  margin: 0;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const socials = [
  {
    text: "Resume",
    link: process.env.PUBLIC_URL + `./John-Michael_Smith_Resume_S2020.pdf`,
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/john-michael-smith",
  },
  {
    text: "GitHub",
    link: "https://github.com/jp3isme",
  },
  {
    text: "Instagram",
    link: "https://www.instagram.com/Jp3isme",
  },
  {
    text: "Twitter",
    link: "https://twitter.com/Jp3isme",
  },
  {
    text: "GoodReads",
    link: "https://www.goodreads.com/user/show/64860063-john-michael-smith",
  },
]

const contacts = {
  email: "jp3isme@gmail.com",
  phone: "(678) 943-5352",
}

export default function HomePage() {
  return (
    <Layout>
      <Div className="container">
        <Bio bg={""} />
        <Links socials={socials} contacts={contacts} />
      </Div>
      <Education />
      <Projects />
    </Layout>
  )
}
