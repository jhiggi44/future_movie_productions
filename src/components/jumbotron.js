import React from "react"

import JumboImage from "../components/jumbo_image"
import ldsLaurel from "../images/lds_laurel.png"
import lafaLaurel from "../images/lafa_laurel.png"
import Laurel from "./laurel"
import WatchNowCTA from "./watch_now_cta"

function Jumbotron() {
  return (
    <div className="relative container mx-auto">
      <JumboImage />
      <div
        className="absolute container h-full h-100 left-0 bottom-0 z-10 mt-64"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgb(76,81,191,.4) 5%, black 95%)",
        }}
      >
        <div className="flex h-full flex-col justify-end items-center">
          <h1 className="text-5xl text-white font-serif sm:text-4xl">The</h1>
          <h1 className="text-7xl text-white leading-none font-serif sm:text-6xl">
            Thistlewits
          </h1>
          <div className="flex flex-row flex-wrap justify-center mt-8">
            <Laurel src={ldsLaurel} />
            <Laurel src={lafaLaurel} />
          </div>
          <div className="inline my-12">
            <WatchNowCTA
              href="https://vimeo.com/387565587/397cabfd3f"
              text="Watch The Trailer"
              textColor="white"
              backgroundColor="transparent"
              borderColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
