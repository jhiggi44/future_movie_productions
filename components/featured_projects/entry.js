import useSWR from 'swr'
import Layout from './layout';
import TiltedSectionContainer from './tilted_section_container'

const patternUrl = "https://www.transparenttextures.com/patterns/binding-dark.png";
// const patternUrl = "https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png";

const fetcher = (url) => fetch(url).then((res) => res.json())

function renderProjectSection(project, isTilted) {
  if (isTilted) return <Layout project={ project } backgroundColor="#C2BF9D" backgroundImage={`url(${patternUrl})`}/>

  return (
    <TiltedSectionContainer backgroundColor="white" toBackGroundColor="#083F9E">
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