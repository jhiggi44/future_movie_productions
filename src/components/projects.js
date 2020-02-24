import React from "react"

import ProjectCard from "./project_card"

import chapterXPoster from "../images/chapter_x_poster.jpg"
import thistlewitsPoster from "../images/thistlewits_poster.jpg"
import doublePlayPoster from "../images/double_play_poster.jpg"
import prescriptionLovePoster from "../images/prescription_for_love_poster.jpg"
import matchmakerChristmasPoster from "../images/matchmaker_christmas_poster.jpg"
import fathersKeeperPoster from "../images/our_fathers_keeper_poster.jpg"
import echoBoomersPoster from "../images/echo_boomers_poster.jpg"

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
    <h2 className="text-black text-6xl m-12">Projects</h2>
    <div className="flex flex-row flex-wrap justify-center items-center px-0">
      <ProjectCard
        title="The Thistlewits"
        director="Nathan Smith"
        company="Future Movie Productions"
        nateRole="Executive Producer, Producer, Director, Assembly Editor"
        gayLynnRole="Producer, 1st AD, Production Designer, Extras Casting"
        src={thistlewitsPoster}
        href="https://vimeo.com/387565587/397cabfd3f"
        actionText="Watch Trailer"
      />
      <ProjectCard
        title="Our Father's Keeper"
        director="Rob Diamond"
        company="Rob Diamond Films"
        nateRole="Associate Producer, 2nd AC"
        gayLynnRole="Associate Producer, Craft Service, Catering, PA, Extras Casting"
        src={fathersKeeperPoster}
        href="https://www.youtube.com/watch?v=1nL6lhZ-K2M"
        actionText="Watch Trailer"
      />
      <ProjectCard
        title="Echo Boomers"
        director="Seth Savoy"
        company="Speakeasy"
        nateRole="2nd AC"
        gayLynnRole="PA"
        src={echoBoomersPoster}
        href="https://www.imdb.com/title/tt4353270/"
        actionText="Learn More"
      />
      <ProjectCard
        title="Matchmaker Christmas"
        director="Brian Brough"
        company="Silver Peak Productions"
        nateRole="Craft Service"
        gayLynnRole="Craft Service"
        src={matchmakerChristmasPoster}
        href="https://www.youtube.com/watch?v=dnvrP1_9zak"
        actionText="Watch Trailer"
      />
      <ProjectCard
        title="Prescription For Love"
        director="Brian Brough"
        company="Silver Peak Productions"
        nateRole="Camera PA"
        src={prescriptionLovePoster}
        href="https://www.youtube.com/watch?v=kLtG2u0XbHU"
        actionText="Watch Trailer"
      />
      <ProjectCard
        title="Romance In The Outfield - Double Play"
        director="Rebecca Sternberg"
        company="Star Mountain Films"
        nateRole="1st AC, 2nd AC"
        src={doublePlayPoster}
        href="https://www.youtube.com/watch?v=l8yyJAJa8dQ"
        actionText="Watch Trailer"
      />
    </div>
  </div>
  )
}

export default Projects