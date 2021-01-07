import React from "react"
import Bio from "../components/HomePageComponents/Bio"
import Button from "../components/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About Me" />
      <div className="container">
        <Bio />
        <Button to="/">Go Home</Button>
      </div>
    </Layout>
  )
}
