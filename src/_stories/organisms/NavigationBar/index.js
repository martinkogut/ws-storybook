import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import NavigationBar from '../../../components/organisms/NavigationBar';

const options = {
  'Default': '',
  'Inverse': 'inverse'
};

const component = () => (
  <NavigationBar
    context={optionalSelect('Context', options, '')} />
);

export default [readme, component];
