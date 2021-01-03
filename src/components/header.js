import React from "react"

function Header({text}) {
  return (
    <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl">{text}</h2>
  )
}

export default Header