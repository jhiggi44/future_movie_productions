import PropTypes from "prop-types"
import React from "react"

function HeaderTitle({ title }) {
  return (
    <div className="text-5xl text-white tracking-widest ml-8 sm:hidden lg:text-4xl">
      {title}
    </div>
  )
}

HeaderTitle.propTypes = {
  siteTitle: PropTypes.string,
}

export default HeaderTitle
