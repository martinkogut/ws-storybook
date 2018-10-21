import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Tag from '../../../components/molecules/Tag';

const component = () => (
  <Tag
    text={text('')}
  />
);

export default [readme, component];
