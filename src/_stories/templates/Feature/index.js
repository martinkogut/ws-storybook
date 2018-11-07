import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

// import readme from './README.md';
import Feature from '../../../components/templates/Feature';

const options = {
};

const component = () => (
  <Feature />
);

export default [component];
