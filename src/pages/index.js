import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jumbotron from "../components/jumbotron"
import ProjectCard from "../components/project_card"

import movieImg from "../images/movie_still.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-black text-6xl m-12">Projects</h2>
      <div className="flex flex-row flex-wrap justify-center items-center px-32 md:px-4 sm:px-0">
        <ProjectCard
          title="Project 1"
          description="This is a film about blah blah blah..."
          src={movieImg}
          href="https://vimeo.com/387565587/397cabfd3f"
          actionText="Watch Trailer"
          textColor="white"
          buttonColor="blue"
        />
        <ProjectCard
          title="Project 2"
          description="This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah..."
          src={movieImg}
          href="https://vimeo.com/387565587/397cabfd3f"
          actionText="Watch Now"
          textColor="white"
          buttonColor="green"
        />
        <ProjectCard
          title="Project 3"
          description="This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah... "
          src={movieImg}
          href="https://vimeo.com/387565587/397cabfd3f"
          actionText="Learn More"
          textColor="black"
          buttonColor="yellow"
        />
        <ProjectCard
          title="Project 2"
          description="This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah..."
          src={movieImg}
          href="https://vimeo.com/387565587/397cabfd3f"
          actionText="Watch Now"
          textColor="white"
          buttonColor="green"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
