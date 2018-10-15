import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info';

import DarkBackground from '../../../decorators/DarkBackground'
import { withMarkdownNotes, withNotes } from '@storybook/addon-notes'

import Button from './index'
import README from './button.md'

storiesOf('Atoms/Button', module)
  // Add the `withKnobs` decorator to add knobs support to your stories.
  // You can also configure `withKnobs` as a global decorator.
  // .addDecorator(withKnobs)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add('Ghost Button', withNotes('A very simple component') (() => <DarkBackground><Button ghost onClick={action('clicked')}>Ghost Button</Button></DarkBackground>))
  .add('Round Button', withMarkdownNotes(README) (() => <Button round onClick={action('clicked')}>Ghost Button</Button>))
  .add('Text Button', () => <Button text onClick={action('clicked')}>Ghost Button</Button>)
  .add('Text Button Light', () => <Button textLight onClick={action('clicked')}>Ghost Button</Button>)
  .add('Button Large', () => <Button large onClick={action('clicked')}>Ghost Button</Button>)
  .add('Button Small', () => <Button small onClick={action('clicked')}>Ghost Button</Button>)
  .add('Button Light', () => <Button light onClick={action('clicked')}>Ghost Button</Button>)
