import React from "react"

function WatchNowCTA({ href, text, textColor, borderColor, backgroundColor, borderHoverColor, hoverColor }) {
  return (
    <a href={href} target="_blank" className="no-underline w-full">
      <div
        style={{
          border: `5px solid ${borderColor}`,
          backgroundColor: backgroundColor,
          color: textColor,

          "&:hover": {
            backgroundColor: hoverColor,
            borderColor: borderHoverColor
          }
        }}
        className="text-2xl text-center px-8 py-2 rounded-md mx-auto"
      >
        {text}
      </div>
    </a>
  )
}

export default WatchNowCTA
