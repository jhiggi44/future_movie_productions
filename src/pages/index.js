import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import JumboImage from "../components/jumbo_image"
import SEO from "../components/seo"

import ldsLaurel from "../images/lds_laurel.png"
import lafaLaurel from "../images/lafa_laurel.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="relative">
      <JumboImage />
      <div
        className="absolute container left-0 bottom-0 z-10 mt-64"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 5%, black 95%)",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-5xl text-white font-serif sm:text-4xl">The</div>
          <div className="text-7xl text-white leading-none font-serif sm:text-6xl">
            Thistlewits
          </div>
          <div className="flex flex-row flex-wrap justify-center mt-8">
            <img src={ldsLaurel} className="max-h-laurel m-4" />
            <img src={lafaLaurel} className="max-h-laurel m-4" />
          </div>
          <div className="text-4xl text-white inline border-solid border-white border-4 px-4 m-12">
            <a
              href="https://vimeo.com/387565587/397cabfd3f"
              target="_blank"
              className="no-underline"
            >
              Watch The Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
