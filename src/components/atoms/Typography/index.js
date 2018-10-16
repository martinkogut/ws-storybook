import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './typography.module.scss'

class Typography extends React.Component {
  render () {
    let additionalStyles = classnames({
      [styles.dropcaps]: this.props.dropcaps,
      [styles.subheading]: this.props.subheading,
      [styles['h-alt']]: this.props.alt
    })
    switch(this.props.heading) {
      case 'h1':
        return (
          <h1 className={additionalStyles}>{this.props.children}</h1>
        )
      case 'h2':
        return (
          <h2 className={additionalStyles}>{this.props.children}</h2>
        )
      case 'h3':
        return (
          <h3 className={additionalStyles}>{this.props.children}</h3>
        )
      case 'h4':
        return (
          <h4 className={additionalStyles}>{this.props.children}</h4>
        )
      case 'h5':
        return (
          <h5 className={additionalStyles}>{this.props.children}</h5>
        )
      case 'h6':
        return (
          <h6 className={additionalStyles}>{this.props.children}</h6>
        )
    }
  }
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  dropcaps: PropTypes.bool,
}

export default Typography
