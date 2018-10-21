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
          {
            context === 'newsletter' ? <CTANewsletter /> : null
          }
          <Button context="light large" text="Get in Touch"></Button>
        </div>
      </div>
    </div>
  );
}

const CTANewsletter = ({}) => {
  return(
    <form className="mc-ajax mc-form subscribe-form">
      <input type="email" name="EMAIL" placeholder="Your email address" id="mc-email" className="wow fadeInUp" />
      <label for="mc-email" className="mc-info"></label>
      <div className="subscribe-result"></div>
    </form>
  )
}

CTA.propTypes = {
  text: ''
}

CTA.propTypes = {
  text: PropTypes.string,
  /** ghost, round, text, large, small, light, ghost-light, text-light */
  context: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

export default CTA
