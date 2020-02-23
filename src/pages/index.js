import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jumbotron from "../components/jumbotron"
import ProjectCard from "../components/project_card"

import movieImg from "../images/movie_still.jpg"

import chapterXPoster from "../images/chapter_x_poster.jpg"
import thistlewitsPoster from "../images/thistlewits_poster.jpg"
import doublePlayPoster from "../images/double_play_poster.jpg"
import prescriptionLovePoster from "../images/prescription_for_love_poster.jpg"
import matchmakerChristmasPoster from "../images/matchmaker_christmas_poster.jpg"
import fathersKeeperPoster from "../images/our_fathers_keeper_poster.jpg"
import echoBoomersPoster from "../images/echo_boomers_poster.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-black text-6xl m-12">Projects</h2>
      <div className="flex flex-row flex-wrap justify-center items-center px-32 md:px-4 sm:px-0">
        <ProjectCard
          title="The Thistlewits"
          description="This is a film about blah blah blah..."
          src={thistlewitsPoster}
          href="https://vimeo.com/387565587/397cabfd3f"
          actionText="Watch Trailer"
          textColor="white"
          buttonColor="blue"
        />
        <ProjectCard
          title="Our Father's Keeper"
          description="This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah..."
          src={fathersKeeperPoster}
          href="https://vimeo.com/387565587/397cabfd3f"
          actionText="Watch Now"
          textColor="white"
          buttonColor="green"
        />
        <ProjectCard
          title="Echo Boomers"
          description="This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah... "
          src={echoBoomersPoster}
          href="https://vimeo.com/387565587/397cabfd3f"
          actionText="Learn More"
          textColor="black"
          buttonColor="yellow"
        />
        <ProjectCard
          title="Matchmaker Christmas"
          description="This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah..."
          src={matchmakerChristmasPoster}
          href="https://vimeo.com/387565587/397cabfd3f"
          actionText="Watch Now"
          textColor="white"
          buttonColor="green"
        />
        <ProjectCard
          title="Prescription For Love"
          description="This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah..."
          src={prescriptionLovePoster}
          href="https://vimeo.com/387565587/397cabfd3f"
          actionText="Watch Now"
          textColor="white"
          buttonColor="green"
        />
        <ProjectCard
          title="Romance In The Outfield - Double Play"
          description="This is a film about blah blah blah... This is a film about blah blah blah... This is a film about blah blah blah..."
          src={doublePlayPoster}
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
