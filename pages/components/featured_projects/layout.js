import InfoField from './info_field'
import Summary from './summary'
import Header from '../styled_elements/header'
import SectionContainer from '../section_container'

function convertTitleToPath(title) {
    return title.toLowerCase().split(" ").join("-");
}
  

function Layout({ project, children }) {
    return (
        <SectionContainer>
          <a>
              <Header>{ `${project.title} (${project.yearOfRelease})` }</Header>
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