import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../atoms/Button'

const Card = ({ postTitle, postText, className, style }) => {

  const baseClass = 'blog-columns'

  const rootClass = cx(baseClass)

  return (
    <div className={rootClass}>
      <div className="blog-post">
        <a href="pages/blog/blog-post.html" className="post-img">
          <img src="http://themes.89elements.com/definity-html/assets/images/blog-post-img-1.6.jpg" alt="Blog Post 1"/>
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
          <h4>{postTitle}</h4>
        </a>
        <p>{postText}</p>
        <Button text={'Read more'} context={'small'}></Button>
      </div>
    </div>
  </div>
  );
}

Card.displayName = 'Card';

Card.defaultProps = {
  postTitle: 'Blog Post Title',
  postText: 'Lorem ipsum dolor sit amet, tempor consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad ...'
}

Card.propTypes = {
  postText: PropTypes.string,
  postTitle: PropTypes.string,
  /** any font awesome icon */
  className: PropTypes.string,
  style: PropTypes.object
}

export default Card
