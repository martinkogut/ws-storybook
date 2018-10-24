import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Alert = ({ type, text, title, context, className }) => {

  const baseClass = 'alert'

  const rootClass = cx(baseClass, className, {
    [`alert-${context}`]: context
  })

  return (
    <div className={rootClass} role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
      <strong>{title}</strong> {text}
    </div>
  );
}

Alert.defaultProps = {
  context: 'danger'
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  context: PropTypes.string
}

export default Alert
