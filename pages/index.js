import Page from './components/page'
import FeaturedProjects from './components/featured_projects/entry'
import projects from './data.js'

// TODO: create a route for all_projects
// TODO: create route for featured_projects
export default function Home() {
  return (
    <Page title="Future Movie Production">
      <FeaturedProjects projects={ [projects["mabelAndGeorge"], projects["thistlewits"]] } />
    </Page>
  )
}
