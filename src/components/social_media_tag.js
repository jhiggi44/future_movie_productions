import React from "react"

function SocialMediaTag({logo, href}) {
  return (
    <a href={href} className="w-2/6 p-2 max-w-icon max-h-xs" target="_blank">
        <img src={logo} className="w-full max-h-icon mx-2" />
    </a>
  )
}

export default SocialMediaTag