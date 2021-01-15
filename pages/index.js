import Head from 'next/head'
import projects from './data.js'

function convertTitleToPath(title) {
  return title.toLowerCase().split(" ").join("-");
}

const InfoField = ({header, info}) => (
  <p><span>{ header }: </span>{ info }</p>
)

const Summary = ({children}) => (
  <p>{ children }</p>
)

function TrailerLayout({ project, children }) {
  return (
    <div>
      <a>
        <h2>{ `${project.title} (${project.yearOfRelease})` }</h2>
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
    </div>
  )
}

function Main() {
  return (
    <main>
      <TrailerLayout project={ projects["mabelAndGeorge"] } />
      <TrailerLayout project={ projects["thistlewits"] } />
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
