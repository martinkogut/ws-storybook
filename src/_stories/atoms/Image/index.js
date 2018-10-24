import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Image from '../../../components/atoms/Image';

const component = () => (
  <Image
    src={text('src', 'http://themes.89elements.com/definity-html/assets/images/blog-post-img-1.6.jpg')}
    alt={text('alt', 'Blog Post 1')}
  />
);

export default [readme, component];
