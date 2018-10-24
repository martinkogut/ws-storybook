import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import ProgressBar from '../../../components/molecules/ProgressBar';

const component = () => (
  <ProgressBar
    text={text('Text', 'Web Design')}
    percent={text('Percentage', '80')}
  />
);

export default [readme, component];
