import Page from '../components/page'
import FeaturedProjects from '../components/featured_projects/entry'
import SuggestedProjects from '../components/suggested_projects/entry'
import TiltedSectionContainer from '../components/featured_projects/tilted_section_container'

// TODO: create a route for all_projects
// TODO: create route for featured_projects
export default function Home() {
  return (
    <Page title="Future Movie Production">
      <FeaturedProjects />
      <SuggestedProjects 
        title="Other Projects" 
        excluding="mabel,thistlewits"
        backgroundColor="#083F9E"
      />
      <TiltedSectionContainer backgroundColor="#0D56D4" fromBackgroundColor="#083F9E" flip={ true } transitionHeight="12px" hasBottomTransition={false}>
        <footer style={{ fontSize: ".8rem", textAlign: "right", padding: "8px 24px", color: "#EBDB0C" }}>
          © {new Date().getFullYear()}, Future Movie Productions
        </footer>
      </TiltedSectionContainer>
    </Page>
  )
}
