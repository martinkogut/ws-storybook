import { configure, setAddon } from '@storybook/react'
import infoAddon, { setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'

import jquery from 'jquery';
global.$ = jquery;
global.jQuery = jquery;

require('bootstrap-sass')
import '../src/assets/scss/base.scss'
import '.../../font-awesome/css/font-awesome.css'

setOptions({
  name: 'Wildstyle Patternlibrary',
  url: 'https://test.com',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true
})

setDefaults({
  inline: true,
  header: false,
  source: true,
  styles: stylesheet => {
    stylesheet.infoBody = {
      border: '0',
    },
    stylesheet.infoStory = {
      marginTop: '5rem',
      marginBottom: '5rem'
    },
    stylesheet.source = {
      h1: {
        margin: '20px 0 0 0',
        padding: '0 0 50px 0',
        fontSize: '25px',
        borderBottom: '1px solid #000',
      },
    },
    stylesheet.propTableHead = {
    }
  return stylesheet
  },
  maxPropsIntoLine: 1
  // propTablesExclude: [ReadmeContainer, DefaultPreview]
})

const req = require.context('../src/_stories')
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

setAddon(infoAddon)

configure(loadStories, module)
