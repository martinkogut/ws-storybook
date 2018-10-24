import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Image from '../../atoms/Image'

const ProfileCard = ({ name, position, className, style }) => {

  const baseClass = 'team-3col'

  const rootClass = cx(baseClass)

  return (
    <div className={rootClass}>
      <div className="t-item">
        <div className="t-image">
          <Image src="http://themes.89elements.com/definity-html/assets/images/team-1.jpg" alt="Team Member" />
        </div>
        <div className="t-info">
          <h4 className="t-name">{name}</h4>
          <span className="t-role">{position}</span>
          <ul className="social-links">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
          </ul>
        </div>
      </div>
  </div>
  );
}

ProfileCard.displayName = 'ProfileCard';

ProfileCard.defaultProps = {
  className: ''
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ProfileCard
