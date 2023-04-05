import React from 'react';
import { Inter } from 'next/font/google';

import type { Preview } from '@storybook/react';

import '../src/styles/globals.css';
const inter = Inter({ subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <span className={inter.className}>
        <Story />
      </span>
    )
  ]
};

export default preview;
