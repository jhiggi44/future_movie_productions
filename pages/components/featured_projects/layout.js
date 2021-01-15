import styled from 'styled-components'
import devices from '../devices'

import InfoField from './info_field'
import Summary from './summary'
import Header from '../styled_elements/header'
import SectionContainer from '../section_container'

const Trailer = styled.iframe`
  width: 100%;
  height: 292px;
  margin: 16px 0;

  @media ${devices.sm} {
    height: 348px;
  }

  @media ${devices.md} {
    height: 424px;
  }

  @media ${devices.lg} {
    height: 518px;
  }
`;

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

          <Trailer src={ project.trailerEmbed } />
        </SectionContainer>
    )
}

export default Layout;