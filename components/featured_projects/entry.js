import useSWR from 'swr'
import Layout from './layout';
import TiltedSectionContainer from './tilted_section_container'

const fetcher = (url) => fetch(url).then((res) => res.json())

function renderProjectSection(project, isTilted) {
  if (isTilted) return <Layout project={ project } />

  return (
    <TiltedSectionContainer backgroundColor="#17489E">
        <Layout project={ project } />
    </TiltedSectionContainer>
  )
}

function Entry() {
  const { data, error } = useSWR('/api/projects?only=mabel,thistlewits', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return(
    <div>
      { data.map((project, i) => renderProjectSection(project, i % 2 === 0)) }
    </div>
  )
}

export default Entry;