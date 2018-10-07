import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.scss'

class Button extends React.Component {
  handleClick = (e) => {
    // e.preventDefault()
    this.props.onClick(this.props.onClick)
  }
  render () {
    return (
      <a href={this.props.to} onClick={this.handleClick} className={styles.btn + ' ' + styles[this.props.style]}>{this.props.children}</a>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  location: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
