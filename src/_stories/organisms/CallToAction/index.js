import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import CTA from '../../../components/organisms/CallToAction';

const options = {
  'Link': 'link',
  'Newsletter': 'newsletter',
};

const component = () => (
  <CTA
    text={text('Call to Action', 'Blog Post Title')}
    context={optionalSelect('Context', options, '')}
    className={text('ClassName', '')}
    style={object('Style', {})}
  />
);

export default [readme, component];
