import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Image = ({ src, alt }) => {

  return (
    <img className="img-responsive" src={src} alt={alt} />
  );
}



Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
