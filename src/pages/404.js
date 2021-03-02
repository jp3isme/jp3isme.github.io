import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <p>{process.env.GATSBY_GOOGLE_TAG}</p>
    <p>{process.env.GOOGLE_TAG}</p>
  </Layout>
)

export default NotFoundPage
