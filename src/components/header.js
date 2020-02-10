import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HeaderLogo from "./header_logo"

const Header = ({ siteTitle }) => (
  <header className="m-0 bg-gray-500 container mx-auto p-2">
    <div className="flex flex-row items-center justify-center bg-gray-300 h-24">
      <Link
        style={{
          maxHeight: `100%`,
          maxWidth: `120px`,
          objectFit: `contain`,
        }}
        to="/"
      >
        <HeaderLogo />
      </Link>
      <div className="text-4xl tracking-widest ml-8">{siteTitle}</div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
