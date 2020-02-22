import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const JumboImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "movie_still.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="z-0 w-full block mt-jtron h-jtron min-h-jtron"
      fluid={data.image.childImageSharp.fluid}
    />
  )
}

export default JumboImage
