import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './typography.module.scss'

class Typography extends React.Component {
  render () {
    console.log(styles)
    return (
      <span className={styles[this.props.heading]}>{this.props.children}</span>
    )
  }
}

Typography.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string
}

export default Typography
