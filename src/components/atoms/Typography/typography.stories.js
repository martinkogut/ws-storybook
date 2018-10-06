import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../../../assets/scss/base.scss'

storiesOf('Atoms/Typography', module)
.add('h1', () => <h2>What we do</h2>)
