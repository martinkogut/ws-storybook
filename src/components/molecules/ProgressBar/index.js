import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const ProgressBar = ({ percent, text }) => {

  const baseClass = 'progress-group'
  const rootClass = cx(baseClass)

  return (
    <div class={rootClass}>
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" style={{width: percent+'%'}}>
          <span className="sr-only">{percent}% Complete</span>
        </div>
      </div>
      <span className="progress-title">{text}</span>
      <span className="progress-value">{percent}%</span>
    </div>
  );
}

ProgressBar.propTypes = {
  percent: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ProgressBar
