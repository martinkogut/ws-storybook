import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Icon = ({ context, className, style }) => {
  const baseClass = 'fa'

  const rootClass = cx(baseClass, className, {
      [`${baseClass}-${context}`]: context
  })

  return (
      <i className={rootClass} style={style}></i>
  );
}

Icon.displayName = 'Icon';

Icon.defaultProps = {}

Icon.propTypes = {
  /** ghost, round, text, large, small, light, ghost-light, text-light */
  context: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Icon
