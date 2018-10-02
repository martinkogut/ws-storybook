import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Introduction', module).add('how to use', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('version1', () => <Button onClick={action('clicked')}>demov1</Button>)
  .add('version2', () => <Button onClick={action('clicked')}>demov2</Button>);
