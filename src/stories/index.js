import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import Button from '../components/atoms/Button'
import Card from '../components/organisms/Card'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Atoms/Button', module)
  .add('Ghost Button', () => <Button style="btn-ghost-light" onClick={action('clicked')}>Ghost Button</Button>)
  .add('Round Button', () => <Button style="btn-round" onClick={action('clicked')}>Ghost Button</Button>)
  .add('Text Button', () => <Button style="btn-text" onClick={action('clicked')}>Ghost Button</Button>)
  .add('Text Button Light', () => <Button style="btn-text-light" onClick={action('clicked')}>Ghost Button</Button>)
  .add('Button Large', () => <Button style="btn-large" onClick={action('clicked')}>Ghost Button</Button>)
  .add('Button Small', () => <Button style="btn-small" onClick={action('clicked')}>Ghost Button</Button>)
  .add('Button Light', () => <Button style="btn-light" onClick={action('clicked')}>Ghost Button</Button>)

storiesOf('Card', module)
  .add('Card', () => <Card onClick={action('clicked')}>Ghost Button</Card>)
