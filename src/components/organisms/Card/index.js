import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './card.scss'

class Card extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.onClick(this.props.onClick)
  }
  render() {
    return (
      <div className="blog-post wow fadeIn" data-wow-duration="2s" data-wow-delay=".6s" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.6s', animationName: 'fadeIn'}}>
        <a href="pages/blog/blog-post.html" className="post-img">
          <img src="assets/images/blog-post-img-1.6.jpg" alt="Blog Post 1" />
        </a>
        <div className="bp-content">
          <div className="post-meta">
            <a href="#" className="post-date">
              <i className="fa fa-calendar-o"></i>
              <span>August 01.2015</span>
            </a>
            <a href="#" className="post-comments">
              <i className="fa fa-comments-o"></i>
              <span>12</span>
            </a>
          </div>
          <a href="pages/blog/blog-post.html" className="post-title">
            <h4>Blog Post Title</h4>
          </a>
          <p>Lorem ipsum dolor sit amet, tempor consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad ...</p>
          <a href="pages/blog/blog-post.html" className="btn btn-small">Read More</a>
        </div>
      </div>
    )
  }
}

export default Card
