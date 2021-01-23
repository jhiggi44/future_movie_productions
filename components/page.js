import Head from 'next/head'
import styled from 'styled-components'

const Main = styled.main`
  font-family: 'Open Sans', sans-serif;
`;

function Page({ title, children }) {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        { children }
      </Main>
    </div>
  )
}

export default Page;