import Img from "gatsby-image"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              id
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.sizes
      const original = image.node.childImageSharp.originalImg
      return props.original ? (
        <Img alt={props.alt} fluid={original} style={props.style} />
      ) : (
        <Img alt={props.alt} fluid={imageSizes} style={props.style} />
      )
    }}
  />
)

export default Image
