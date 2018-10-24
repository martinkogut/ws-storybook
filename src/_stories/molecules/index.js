import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Tag from './Tag/'
import ProgressBar from './ProgressBar/'
import Alert from './Alert/'

const stories = storiesOf('Molecules', module);
const storyWrapper = story => {
    return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
    .addDecorator((story, context) => withInfo('')(story)(context))
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .add('Tag', withReadme(...Tag))
    .add('ProgressBar', withReadme(...ProgressBar))
    .add('Alert', withReadme(...Alert))
