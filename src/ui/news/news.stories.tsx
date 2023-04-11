import type { Meta, StoryObj } from '@storybook/react';

import { mockedNews } from './__mocks__/news';

import { News } from '.';

const meta: Meta<typeof News> = {
  title: 'UI/News',
  component: News
};

export default meta;
type Story = StoryObj<typeof News>;

export const Default: Story = {
  args: mockedNews
};
