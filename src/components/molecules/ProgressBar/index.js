import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const ProgressBar = ({ percent, text, context, className }) => {

  const baseClass = 'progress-group'

  const subClass = cx(baseClass, className, {
    [`progress-${context}`]: context
  })

  return (
    <div className={baseClass}>
      <div className={`progress ${context === 'thin' ? 'progress-thin' : ''}`}>
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
  text: PropTypes.string.isRequired,
  context: PropTypes.string
}

export default ProgressBar
