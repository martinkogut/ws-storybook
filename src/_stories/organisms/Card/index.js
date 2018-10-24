import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Card from '../../../components/organisms/Card';

const options = {
};

const component = () => (
  <Card
    postTitle={text('Post Title', 'Blog Post Title')}
    postText={text('Post Text', 'Lorem ipsum dolor sit amet, tempor consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad ...')}
    className={text('ClassName', '')}
  />
);

export default [readme, component];
