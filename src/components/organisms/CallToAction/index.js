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
          <Typography heading="h3" children="See what we can do for you"></Typography>
            <Button light large>Get in touch</Button>
          </div>
        </div>
      </div>
    )
  }
}

CTA.propTypes = {
}

export default CTA
