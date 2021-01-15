import Head from 'next/head'
import FeaturedProjects from './components/featured_projects/entry'
import projects from './data.js'

// TODO: create a route for all_projects
// TODO: create route for featured_projects
function Main() {
  return (
    <main>
      <FeaturedProjects projects={ [projects["mabelAndGeorge"], projects["thistlewits"]]} />
    </main>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Future Movie Productions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}
