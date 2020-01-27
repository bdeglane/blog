import { configure } from '@storybook/react'
import { addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import './default.css'

addDecorator(withA11y)

addParameters({
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          height: '768px',
          width: '420px',
        },
        type: 'mobile',
      },
      desktop: {
        name: 'Desktop',
        styles: {
          height: '768px',
          width: '1281px',
        },
        type: 'desktop',
      },
    },
  },
})

configure(require.context('../src', true, /\.stories\.jsx$/), module)
