import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../../../assets/scss/base.scss'

storiesOf('Atoms/Typography', module)
.add('h1', () => <h1>This is wildstyle</h1>)
.add('h2', () => <h2>This is wildstyle</h2>)
.add('h3', () => <h3>This is wildstyle</h3>)
.add('h4', () => <h4>This is wildstyle</h4>)
.add('h5', () => <h5>This is wildstyle</h5>)
.add('h6', () => <h6>This is wildstyle</h6>)
.add('Dropcaps', () => <p className="dropcaps">This is wildstyle</p>)
.add('Heading alternative', () => <h1 className="h-alt">This is wildstyle</h1>)
.add('Link', () => <p><a>This is wildstyle</a></p>)
