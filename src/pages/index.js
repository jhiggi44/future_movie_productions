import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jumbotron from "../components/jumbotron"
import ProjectCard from "../components/project_card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-black text-6xl m-12">Projects</h2>
      <ProjectCard
        name="Project 1"
        description="This is a film about blah blah blah..."
        href="https://vimeo.com/387565587/397cabfd3f"
        buttonTxt="Watch Trailer"
      />
      <ProjectCard
        name="Project 2"
        description="This is a film about blah blah blah..."
        href="https://vimeo.com/387565587/397cabfd3f"
        buttonTxt="Learn More"
      />
      <ProjectCard
        name="Project 3"
        description="This is a film about blah blah blah..."
        href="https://vimeo.com/387565587/397cabfd3f"
        buttonTxt="Watch Trailer"
      />
    </div>
  </Layout>
)

export default IndexPage
