import React from "react"
import SocialMediaTag from "./social_media_tag"

import imdbLogo from "../images/imdb_logo.png"
import facebookLogo from "../images/facebook_logo.png"
import companyTag from "../images/company_tag.png"
import fmpLogo from "../images/logo.png"

const year = new Date().getFullYear().toString();
const copyright = `© Future Move Productions ${year}`;

function Footer() {
  return (
    <div>
      <div className="flex flex-col flex-no-wrap items-center justify-center bg-gray-800 py-4 md:flex-row ">
        <div className="flex flex-row items-end">
          <SocialMediaTag logo={imdbLogo} href="https://www.imdb.com/name/nm9739798/" />
          <SocialMediaTag logo={facebookLogo} href="google" />
          <SocialMediaTag logo={fmpLogo} href="google" />
        </div>  
        <p className="font-bold text-white text-9xl text-blue-200 lg:text-9xl sm:text-sm md:text-lg">FUTURE MOVIE PRODUCTIONS</p>
      </div>
    </div>
  )
}

export default Footer