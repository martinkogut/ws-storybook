import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './cta.module.scss'

import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

class CTA extends React.Component {
  render () {
    console.log(styles)
    let ctaClasses = classnames({
      'cta-link': true,
      'cta-dark': true
    })
    return (
      <div className={styles['cta-link', 'cta-dark']}>
        <div className={styles['bg-overlay']}>
          <div className={styles['cta-wrapper']}>
            <Typography heading="h3 h-alt">See what we can do for you</Typography>
            <Button style="btn-light btn-large">Get in touch</Button>
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
