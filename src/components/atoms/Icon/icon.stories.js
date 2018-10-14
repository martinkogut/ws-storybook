import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Icon from './index'

storiesOf('Atoms/Icon', module)
  .add('Font Awesome - Default', () => <Icon type={'fa-user'}></Icon>)
  .add('Font Awesome - Medium', () => <Icon size={'fa-2x'} type={'fa-user'}></Icon>)
  .add('Font Awesome - Large', () => <Icon size={'fa-4x'} type={'fa-user'}></Icon>)
