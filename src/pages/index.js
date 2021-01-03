import React from "react"

import projects from "../data/projects" 
import Layout from "../components/layout"
import SEO from "../components/seo"

import TrailerLayout from "../components/trailer_layout"
import ProjectCarousel from "../components/project_carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="max-w-6xl mx-auto w-11/12">
      <TrailerLayout project={ projects.mabelAndGeorge } >
        <h3 className="text-xl font-extrabold my-4 sm:text-2xl">Coming Soon!</h3>
      </TrailerLayout>
      <TrailerLayout project={ projects.thistlewits } >
      </TrailerLayout>
      <div>
        <ProjectCarousel />
      </div>
    </div>
  </Layout>
)

export default IndexPage
