import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import NavigationBar from '../../../components/organisms/NavigationBar';

const options = {
};

const component = () => (
  <NavigationBar />
);

export default [readme, component];
