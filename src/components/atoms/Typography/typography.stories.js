import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import Typography from './index'

storiesOf('Atoms/Typography', module)
.addDecorator((story, context) => withInfo('some info for your typo')(story)(context))
.add('h1', () => <Typography heading="h1">This is wildstyle</Typography>)
.add('h2', () => <Typography heading="h2">This is wildstyle</Typography>)
.add('h3', () => <Typography heading="h3">This is wildstyle</Typography>)
.add('h4', () => <Typography heading="h4">This is wildstyle</Typography>)
.add('h5', () => <Typography heading="h5">This is wildstyle</Typography>)
.add('h6', () => <Typography heading="h6">This is wildstyle</Typography>)
.add('Subheading', () => <Typography heading="h1" subheading>Lorem ipsum dolor sit amet, consectetur</Typography>)
.add('Dropcaps', () => <Typography heading="h1" dropcaps>This is wildstyle</Typography>)
.add('Heading alternative', () => <Typography heading="h1" alt>This is wildstyle</Typography>)
.add('Link', () => <p><a>This is wildstyle</a></p>)
