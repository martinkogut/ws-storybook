import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Button from '../../../components/atoms/Button';

const options = {
    'No Value': '',
    'Ghost': 'ghost',
    'Round': 'round',
    'Text': 'text',
    'Large': 'large',
    'Small': 'small',
    'Light': 'light',
    'Ghost Light': 'ghost-light',
    'Text Light': 'text-light',

};

const component = () => (
  <Button
    text={text('Text', 'Wildstyle')}
    context={optionalSelect('Context', options, '')}
    empty={boolean('Empty', false)}
    className={text('ClassName', '')}
    style={object('Style', {})}
  />
);

export default [readme, component];
