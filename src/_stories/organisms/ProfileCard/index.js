import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import ProfileCard from '../../../components/organisms/ProfileCard';

const options = {
};

const component = () => (
  <ProfileCard
    name={text('Name', 'Jonathan Webb')}
    position={text('Position', 'Fullstack Developer')}
    className={text('ClassName', '')}
  />
);

export default [readme, component];
