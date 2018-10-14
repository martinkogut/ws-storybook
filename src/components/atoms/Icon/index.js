import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from  '../../../../node_modules/font-awesome/scss/font-awesome.scss'
const cx = classNames.bind(styles)

class Icon extends React.Component {
  render() {
    let style = cx({
      [styles.fa]: true,
      [styles[this.props.type]]: true,
      [styles[this.props.size]]: this.props.size ? true : false
    })
    return(
      <i className={style}></i>
    )
  }
}

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string
}

export default Icon
