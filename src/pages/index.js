import React from "react"

import projects from "../data/projects" 
import Layout from "../components/layout"
import SEO from "../components/seo"

import TrailerLayout from "../components/trailer_layout"
import ProjectCarousel from "../components/project_carousel"

const InfoField = ({header, info}) => (
  <p className="text-lg my-1"><span className="font-bold">{ header }: </span>{ info }</p>
)

const Summary = ({children}) => (
  <p className="text-lg my-4">{ children }</p>
)

const WatchButton = ({href}) => (
  <a href={ href }></a>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TrailerLayout project={ projects.mabelAndGeorge } >
      <h3 className="text-xl font-extrabold my-4 sm:text-2xl">Coming Soon!</h3>
    </TrailerLayout>
    <TrailerLayout project={ projects.thistlewits } >
    </TrailerLayout>
    <div className="max-w-screen-md mx-auto">
      <ProjectCarousel />
    </div>
  </Layout>
)

export default IndexPage
