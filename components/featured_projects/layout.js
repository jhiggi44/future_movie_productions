import InfoField from './info_field'
import Summary from './summary'
import Header from '../styled_elements/header'
import SectionContainer from '../section_container'
import Trailer from './trailer'
  
function Layout({ project, backgroundColor, backgroundImage, children }) {
    return (
        <SectionContainer backgroundColor={backgroundColor} backgroundImage={backgroundImage} >
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

          <Trailer src={ project.trailerEmbed } />
        </SectionContainer>
    )
}

export default Layout;