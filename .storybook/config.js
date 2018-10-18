import { configure, setAddon } from '@storybook/react'
import infoAddon, { setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'

import './index.css'
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
          infoBody: {
              padding: '10px'
          }
      };
      return stylesheet;
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
