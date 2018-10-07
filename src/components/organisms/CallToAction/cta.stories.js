import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CallToAction from './index'

storiesOf('Organisms/Call to Action', module)
  .add('Call to Action', () => <CallToAction></CallToAction>)
