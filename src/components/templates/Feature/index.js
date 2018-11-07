import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Feature = ({ type, text, title, context, className }) => {

  const baseClass = 'alert'

  const rootClass = cx(baseClass, className, {
    [`alert-${context}`]: context
  })

  return (
    <div className="gray-bg">
      <section className="container ft-steps-numbers">
        <div className="row section">

          <header className="sec-heading ws-s">
            <h2>Our work process</h2>
            <span className="subheading">Lorem ipsum dolor sit amet, consectetur</span>
          </header>

          <div className="col-lg-4 col-md-6 mb-sm-100 ft-item wow fadeIn" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeIn'}}>
            <span className="ft-nbr">01</span>
            <h4>Design</h4>
            <p>Lariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
          </div>

          <div className="col-lg-4 col-md-6 mb-sm-100 ft-item wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s" style={{visibility: 'visible', animationDuration: '0.3s', animationName: 'fadeIn'}}>
            <span className="ft-nbr">02</span>
            <h4>Develop</h4>
            <p>Lariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
          </div>

          <div className="col-lg-4 col-md-6 ft-item wow fadeIn" data-wow-duration="1s" data-wow-delay=".6s" style={{visibility: 'visible', animationDuration: '0.6s', animationName: 'fadeIn'}}>
            <span className="ft-nbr">03</span>
            <h4>Deploy</h4>
            <p>Lariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
          </div>

        </div>

        <div className="row ws-m">
          <div className="text-center">
            <a href="#contact" className="btn">Get a free quote</a>
          </div>
        </div>

      </section>
    </div>
  );
}

Feature.defaultProps = {
}

Feature.propTypes = {
}

export default Feature
