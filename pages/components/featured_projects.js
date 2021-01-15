import InfoField from './info_field'
import Summary from './summary'

function convertTitleToPath(title) {
    return title.toLowerCase().split(" ").join("-");
}
  

function TrailerLayout({ project, children }) {
    return (
        <div>
        <a>
            <h2>{ `${project.title} (${project.yearOfRelease})` }</h2>
        </a>
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

function  FeaturedProjects({ projects }) {
    return(
        <div>
            { projects.map((project) => <TrailerLayout project={project} />) }
        </div>
    )
}

export default FeaturedProjects