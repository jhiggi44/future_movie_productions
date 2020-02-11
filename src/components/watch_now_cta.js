import React from "react"

function WatchNowCTA({ href, text, color }) {
  return (
    <div
      style={{ color: color, borderColor: color }}
      className="text-4xl inline border-solid border-4 px-4 my-12 rounded-s mx-auto"
    >
      <a href={href} target="_blank" className="no-underline">
        {text}
      </a>
    </div>
  )
}

export default WatchNowCTA
