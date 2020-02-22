import React from "react"

function WatchNowCTA({ href, text, textColor, borderColor, backgroundColor }) {
  return (
    <a href={href} target="_blank" className="no-underline w-full">
      <div
        style={{
          border: `5px solid ${borderColor}`,
          backgroundColor: backgroundColor,
          color: textColor,
        }}
        className="text-3xl text-center px-8 py-2 rounded-sm mx-auto"
      >
        {text}
      </div>
    </a>
  )
}

export default WatchNowCTA
