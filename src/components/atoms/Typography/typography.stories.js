import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../../../assets/scss/base.scss'

storiesOf('Atoms/Typography', module)
.add('h1', () => <h1>THis is wildstyle</h1>)
.add('h2', () => <h2>THis is wildstyle</h2>)
.add('h3', () => <h3>THis is wildstyle</h3>)
.add('h4', () => <h4>THis is wildstyle</h4>)
.add('h5', () => <h5>THis is wildstyle</h5>)
.add('h6', () => <h6>THis is wildstyle</h6>)
