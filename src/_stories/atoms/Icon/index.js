import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Icon from '../../../components/atoms/Icon';

const options = {
    'No Value': '',
    'User': 'user'
};

const component = () => (
  <Icon
    context={optionalSelect('Context', options, '')}
    className={text('ClassName', '')}
    style={object('Style', {})}
  />
);

export default [readme, component];
