import React from "react"
import PropTypes from "prop-types"

import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full mx-auto relative overscroll-scroll">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
