import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button/index'
//import './card.scss'
import style from './card.module.css'

class Card extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.onClick(this.props.onClick)
  }
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 ws-s clients-layout">
        <div className="client-item"></div>
          <a href="#"
            ><img class="img-responsive" src="//placehold.it/680x400" alt="Client" /></a>
          <div class="item-content">
              <h>
                  <div class="field field--name-title field--type-string field--label-hidden field--item">Card 1</div>
            </h>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt voluptatem, expedita quae eveniet.
            </p>

        </div>
  </div>
    )
  }
}

export default Card
