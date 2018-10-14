import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Image extends React.Component {
  handleClick = (e) => {
    // e.preventDefault()
    this.props.onClick(this.props.onClick)
  }
  render () {
    return (
      <img src={this.props.src} alt={this.props.alt} />
    )
  }
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
}

export default Image
