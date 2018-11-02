import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import CTA from './CallToAction/'
import Card from './Card/';
import ProfileCard from './ProfileCard/';
import NavigationBar from './NavigationBar/';
import Footer from './Footer/';

const stories = storiesOf('Oraganisms', module);
const storyWrapper = story => {
    return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
    .addDecorator((story, context) => withInfo('')(story)(context))
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .add('Call to Action', withReadme(...CTA))
    .add('Card', withReadme(...Card))
    .add('Profile Card', withReadme(...ProfileCard))
    .add('Navigation Bar', withReadme(...NavigationBar))
    .add('Footer', withReadme(...Footer))
