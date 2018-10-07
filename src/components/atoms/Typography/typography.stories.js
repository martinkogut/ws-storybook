import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Typography from './index'

storiesOf('Atoms/Typography', module)
.add('h1', () => <Typography heading="h1">This is wildstyle</Typography>)
.add('h2', () => <Typography heading="h2">This is wildstyle</Typography>)
.add('h3', () => <Typography heading="h3">This is wildstyle</Typography>)
.add('h4', () => <Typography heading="h4">This is wildstyle</Typography>)
.add('h5', () => <Typography heading="h5">This is wildstyle</Typography>)
.add('h6', () => <Typography heading="h6">This is wildstyle</Typography>)
.add('Dropcaps', () => <Typography heading="dropcaps">This is wildstyle</Typography>)
.add('Heading alternative', () => <Typography heading="h-alt">This is wildstyle</Typography>)
.add('Link', () => <p><a>This is wildstyle</a></p>)
