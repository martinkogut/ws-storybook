import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10
}

class Button extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.onClick)
  }
  render () {
    return (
      <button style={style} onClick={this.handleClick}>{this.props.children}</button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default Button
