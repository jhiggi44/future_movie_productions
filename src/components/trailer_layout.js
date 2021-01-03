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
    <div className="w-full" >
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

      <iframe src={ project.trailerEmbed }></iframe>
    </div>
  )
}

export default TrailerLayout