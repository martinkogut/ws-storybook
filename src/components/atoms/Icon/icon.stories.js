import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import README from './README.md'

import Icon from './index'

storiesOf('Atoms/Icon', module)
  .addDecorator((story, context) => withInfo(README)(story)(context))
  .add('Font Awesome - Default', () => <Icon type={'fa-user'}></Icon>)
  .add('Font Awesome - Medium', () => <Icon size={'fa-2x'} type={'fa-user'}></Icon>)
  .add('Font Awesome - Large', () => <Icon size={'fa-4x'} type={'fa-user'}></Icon>)
