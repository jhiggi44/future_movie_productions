import InfoField from './info_field'
import Summary from './summary'
import SectionContainer from '../section_container'

function convertTitleToPath(title) {
    return title.toLowerCase().split(" ").join("-");
}
  

function Layout({ project, children }) {
    return (
        <SectionContainer>
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
        </SectionContainer>
    )
}

export default Layout;