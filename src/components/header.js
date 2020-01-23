import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HeaderLogo from "./header_logo"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        display: `flex`,
        flexDirection: `row`,
        maxHeight: 225,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <HeaderLogo />
      <h1 className="bg-black" style={{ display: `inline` }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
