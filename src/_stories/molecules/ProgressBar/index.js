import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import ProgressBar from '../../../components/molecules/ProgressBar';

const options = {
  'Default': null,
  'Thin': 'thin'
};

const component = () => (
  <ProgressBar
    text={text('Text', 'Web Design')}
    percent={text('Percentage', '80')}
    context={optionalSelect('Context', options, '')}
  />
);

export default [readme, component];
