import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Card from './Card/';

const stories = storiesOf('Oraganisms', module);
const storyWrapper = story => {
    return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
    .addDecorator((story, context) => withInfo('')(story)(context))
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .add('Card', withReadme(...Card))
