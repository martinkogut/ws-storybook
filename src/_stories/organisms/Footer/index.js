import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Footer from '../../../components/organisms/Footer';

const options = {
};

const component = () => (
  <Footer />
);

export default [readme, component];
