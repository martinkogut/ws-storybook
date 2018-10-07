import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './button.module.scss'
const cx = classNames.bind(styles)
class Button extends React.Component {
  handleClick = (e) => {
    // e.preventDefault()
    this.props.onClick(this.props.onClick)
  }
  render () {
    let buttonStyles = cx({
      [styles.btn]: true,
      [styles['btn-light']]: this.props.light,
      [styles['btn-ghost-light']]: this.props.ghost,
      [styles['btn-round']]: this.props.round,
      [styles['btn-text']]: this.props.text,
      [styles['btn-text-light']]: this.props.textLight,
      [styles['btn-large']]: this.props.large,
      [styles['btn-small']]: this.props.small
    })
    return (
      <a href={this.props.to} onClick={this.handleClick} className={buttonStyles}>{this.props.children}</a>
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
