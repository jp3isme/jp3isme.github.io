import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Image from "../components/Image"
import SEO from "../components/seo"

export default function ImagePage(props) {
  const [data, setData] = useState({})

  // let params = new URLSearchParams(document.location.search.substring(1))
  // let query = params.get("p")
  let query = props.location.search.split("=")[1]

  useEffect(() => {
    // window.scrollTo(0, 0)
    setData(query)
    console.log(query)
  }, [data, query])

  return (
    // <Layout>
    <>
      <SEO title={data} />

      <Image filename={data} />
    </>
    // </Layout>
  )
}
