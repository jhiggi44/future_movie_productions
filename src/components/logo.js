import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const Logo = () => {
  return (
    <Link
      className="ml-4"
      style={{
        maxWidth: `82px`,
        objectFit: `contain`,
      }}
      to="/"
    >
      <img src={logo} />
    </Link>
  )
}

export default HeaderLogo
