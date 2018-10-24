import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Alert from '../../../components/molecules/Alert';

const options = {
  'Success': 'success',
  'Danger': 'danger',
  'Info': 'info',
  'Warning': 'warning'
};

const component = () => (
  <Alert
    title={text('type', 'Warning')}
    text={text('title', 'Your are about to leave this page')}
    context={optionalSelect('Context', options, '')}
  />
);

export default [readme, component];
