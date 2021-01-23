import useSWR from 'swr'
import Header from '../styled_elements/header'
import SectionContainer from '../section_container'
import Card from './card'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Entry({ title, excluding }) {
  const { data, error } = useSWR(`/api/projects?excluding=${excluding}`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return(
    <SectionContainer>
      <Header>{ title }</Header>
        { data.map(project => <Card project={project} />) }
    </SectionContainer>
  )
}

export default Entry;