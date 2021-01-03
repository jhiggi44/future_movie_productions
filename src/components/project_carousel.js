import React from "react"

import fathersKeeper from "../images/posters/fathers_keeper.png"
import romanceInOutfield from "../images/posters/romance_in_outfield.png"

function Project({ src }) {
    return (
        <div className="max-w-xs min-w-card">
            <img src={src} />
        </div>
    )
}

function ProjectCarousel() {
  return (
    <div className="flex flex-row max-w-screen-md overflow-x-auto mx-auto">
        <Project src={fathersKeeper} />
        <Project src={romanceInOutfield} />
        <Project src={fathersKeeper} />
        <Project src={romanceInOutfield} />
    </div>
  )
}

export default ProjectCarousel