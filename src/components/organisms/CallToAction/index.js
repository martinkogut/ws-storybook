import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './cta.module.scss'

import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

class CTA extends React.Component {
  render () {
    let ctaStyles = classnames({
      [styles['cta-link']]: true,
      [styles['cta-dark']]: this.props.dark
    })
    return (
      <div className={ctaStyles}>
        <div className={styles['bg-overlay']}>
          <div className={styles['cta-wrapper']}>
          <h3 class="h-alt wow fadeIn">See what we can do for you</h3>
            <Button light large>Get in touch</Button>
            {/*
            <h3 class="h-alt wow fadeIn" data-wow-delay=".1s" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeIn;">See what we can do for you</h3>
            <a href="#contact" class="btn btn-light btn-large wow fadeIn" data-wow-delay=".3s" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeIn;">Get in touch</a>
            */}
          </div>
        </div>
      </div>
    )
  }
}

CTA.propTypes = {
}

export default CTA
