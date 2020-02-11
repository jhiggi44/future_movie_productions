import React from "react"
import WatchNowCTA from "./watch_now_cta"
import ProjectGallery from "./project_gallery"

function ProjectCard({ name, description, buttonTxt, href }) {
  return (
    <div className="w-4/5 py-8 flex flex-col justify-center items-center">
      <h3 className="text-6xl self-start">{name}</h3>
      <ProjectGallery />
      <div className="text-4xl mt-4">{description}</div>
      <WatchNowCTA
        href={href}
        text={buttonTxt}
        color="black"
        className="flex-initial"
      />
    </div>
  )
}

export default ProjectCard
