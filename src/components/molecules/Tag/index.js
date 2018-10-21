import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Tag = ({ text }) => {

  const baseClass = 'sidebar'
  const rootClass = cx(baseClass)

  return (
    <div className={rootClass}>
      <div className="tags-widget">
        <ul className="tag-list">
          <li>
            <a href="#">{text}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Tag.defaultProps = {
  text: 'Wildstyle'
}

Tag.propTypes = {
  text: PropTypes.string.isRequired
}

export default Tag
