import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../atoms/Button'

const CTA = ({ text, context, className, style }) => {
  const baseClass = 'cta'

  const rootClass = cx(baseClass, className, {
      [`${baseClass}-${context}`]: context
  })

  return (
    <div className={rootClass} style={style}>
      <div className="bg-overlay">
        <div className="cta-wrapper">
          <h3 className="cta-lead h-alt">{text}</h3>
          {/*
          <form className="mc-ajax mc-form subscribe-form">
            <input type="email" name="EMAIL" placeholder="Your email address" id="mc-email" className="wow fadeInUp" />
            <input type="submit" name="subscribe" value="Join Us" class="btn btn-light btn-large wow fadeInUp mc-send-btn" />
            <label for="mc-email" className="mc-info"></label>
            <div class="subscribe-result"></div>
          </form>
          */}
        </div>
      </div>
    </div>
  );
}

CTA.propTypes = {
  text: ''
}

Button.propTypes = {
  text: PropTypes.string,
  /** ghost, round, text, large, small, light, ghost-light, text-light */
  context: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

export default CTA
