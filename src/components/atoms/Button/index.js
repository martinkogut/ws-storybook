import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({ text, context, empty, className, style }) => {
  const baseClass = 'btn'

  const rootClass = cx(baseClass, className, {
      [`${baseClass}-${context}`]: context,
      [`${baseClass}-empty`]: empty
  })

  return (
      <span className={rootClass} style={style}>
          {!empty && text}
      </span>
  );
}

Button.displayName = 'Button';

Button.defaultProps = {
  text: '',
  empty: false
}

Button.propTypes = {
  text: PropTypes.string,
  /** ghost, round, text, large, small, light, ghost-light, text-light */
  context: PropTypes.string,
  empty: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Button
