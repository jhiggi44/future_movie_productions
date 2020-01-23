import React from "react"
import logo from "../images/logo.png"

const HeaderLogo = () => {
  return (
    <img
      src={logo}
      style={{ maxHeight: `100%`, maxWidth: `88px`, objectFit: `contain` }}
    />
  )
}

export default HeaderLogo
