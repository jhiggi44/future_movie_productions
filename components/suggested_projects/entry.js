import useSWR from 'swr'
import styled from 'styled-components'
import Header from '../styled_elements/header'
import SectionContainer from '../section_container'
import Card from './card'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  width: 100%;
`;

const fetcher = (url) => fetch(url).then((res) => res.json())

function Entry({ title, excluding, backgroundColor }) {
  const { data, error } = useSWR(`/api/projects?excluding=${excluding}`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return(
    <SectionContainer backgroundColor={backgroundColor} textColor="white" >
      <Header>{ title }</Header>
      <FlexContainer>
        { data.map(project => <Card key={project.tag} project={project} />) }
      </FlexContainer>
    </SectionContainer>
  )
}

export default Entry;