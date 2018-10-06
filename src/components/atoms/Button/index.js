import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './button.css'

class Button extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.onClick(this.props.onClick)
  }
  render () {
    return (
      <a href="#" onClick={this.handleClick} className={`btn ${this.props.style}`}>{this.props.children}</a>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
