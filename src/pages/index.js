import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jumbotron from "../components/jumbotron"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <Projects />
  </Layout>
)

export default IndexPage
