import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from './index'

storiesOf('Atoms/Button', module)
  .add('Ghost Button', () => <Button ghost onClick={action('clicked')}>Ghost Button</Button>)
  .add('Round Button', () => <Button round onClick={action('clicked')}>Ghost Button</Button>)
  .add('Text Button', () => <Button text onClick={action('clicked')}>Ghost Button</Button>)
  .add('Text Button Light', () => <Button textLight onClick={action('clicked')}>Ghost Button</Button>)
  .add('Button Large', () => <Button large onClick={action('clicked')}>Ghost Button</Button>)
  .add('Button Small', () => <Button small onClick={action('clicked')}>Ghost Button</Button>)
  .add('Button Light', () => <Button light onClick={action('clicked')}>Ghost Button</Button>)
