import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Image from '../../atoms/Image/index'
import styles from './card.module.scss'
const cx = classNames.bind(styles)

class Card extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.onClick(this.props.onClick)
  }
  render() {
    return (
      <div className={styles['testimonials-3col']}>
        <div className={styles['t-item']}>
          <Image src="../../../assets/images/avatar-1.png" alt="Testimonial">/</Image>
          <blockquote>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae</p>
            <footer>
              <cite>by Julian Schmitz<span>Google</span></cite>
            </footer>
          </blockquote>
          <span className={cx({'et-quote': true, 't-icon': true})} className="et-quote t-icon"></span>
        </div>
      </div>
    )
  }
}

export default Card
