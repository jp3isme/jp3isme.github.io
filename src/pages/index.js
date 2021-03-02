import React from "react"
import styled from "styled-components"
import Bio from "../components/HomePageComponents/Bio"
import Education from "../components/HomePageComponents/Education"
import Links from "../components/HomePageComponents/Links"
import Projects from "../components/HomePageComponents/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Div = styled.div`
  padding: 0;
  //margin: 0;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const socials = [
  {
    text: "Resume",
    link: `/documents/John-Michael_Smith_Resume.pdf`,
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
console.log(process.env.GATSBY_GOOGLE_TAG)

export default function HomePage(props) {
  return (
    <Layout>
      <SEO title="Home" />
      <Div className="container">
        <Bio bg={""} location={props.location} />
        <Links socials={socials} contacts={contacts} />
      </Div>
      <Education />
      <Projects />
    </Layout>
  )
}
