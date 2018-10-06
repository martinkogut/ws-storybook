import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Card from './index'

storiesOf('Organsims/Card', module)
  .add('Card', () => <Card onClick={action('clicked')}>Ghost Button</Card>)
