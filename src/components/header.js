import PropTypes from "prop-types"
import React from "react"

import HeaderLogo from "./header_logo"
import HeaderTitle from "./header_title"

const Header = ({ siteTitle }) => (
  <header className="m-0 container mx-auto z-10 relative">
    <div className="flex flex-row items-center justify-center h-24 sm:justify-start">
      <HeaderLogo />
      <HeaderTitle title={siteTitle} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
