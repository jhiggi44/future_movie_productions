import React from "react"
import { Link } from "gatsby"

function convertTitleToPath(title) {
  return title.toLowerCase().split(" ").join("-");
}

const InfoField = ({header, info}) => (
  <p className="text-lg my-1"><span className="font-bold">{ header }: </span>{ info }</p>
)

const Summary = ({children}) => (
  <p className="text-lg my-4">{ children }</p>
)

function TrailerLayout({ project, children }) {
  return (
    <div className="flex flex-col max-w-screen-md overflow-hidden items-center md:items-start mx-auto">
      <Link to={ convertTitleToPath(project.title) }>
        <h2 className="text-2xl font-extrabold sm:text-4xl mt-8">{ `${project.title} (${project.yearOfRelease})` }</h2>
      </Link>
      <Summary>{ project.summary }</Summary>
      <InfoField 
        header="Director" 
        info={ project.director } 
      />
      <InfoField 
        header="Writer" 
        info={ project.writer } 
      />
      <InfoField 
        header="Stars" 
        info={ project.cast.join(", ") }
      />

      { children }

      <iframe className="mt-4 w-11/12 h-video rounded-sm max-w-screen-md sm:h-video-lg" src={ project.trailerEmbed }></iframe>
    </div>
  )
}

export default TrailerLayout