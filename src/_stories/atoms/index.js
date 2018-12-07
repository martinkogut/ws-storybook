import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Button from './Button/';
import Icon from './Icon/'
import Image from './Image/';
import Typography from './Typography/'

const stories = storiesOf('Atoms', module);
const storyWrapper = story => {
    return <div style={{ margin: '35px' }}>{story()}</div>;
};

// const projectA = storiesOf('Atoms/ProjectA', module);

stories
    .addDecorator((story, context) => withInfo('')(story)(context))
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .add('Button', withReadme(...Button))
    .add('Icon', withReadme(...Icon))
    .add('Image', withReadme(...Image))
    .add('Typography', withReadme(...Typography))
/*
projectA
.addDecorator((story, context) => withInfo('')(story)(context))
.addDecorator(storyWrapper)
.addDecorator(withKnobs)
.add('Button', withReadme(...Button))
*/
