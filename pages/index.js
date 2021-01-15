import Head from 'next/head'

function Main() {
  return (
    <main>
      THE MAIN SECTION
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
