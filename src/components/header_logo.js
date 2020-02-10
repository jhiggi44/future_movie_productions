import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const HeaderLogo = () => {
  return (
    <Link
      style={{
        maxHeight: `100%`,
        maxWidth: `120px`,
        objectFit: `contain`,
      }}
      to="/"
    >
      <img src={logo} />
    </Link>
  )
}

export default HeaderLogo
