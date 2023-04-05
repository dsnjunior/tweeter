import type { Meta, StoryObj } from '@storybook/react';

import mockImage from './__mocks__/avatar.png';

import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: mockImage,
    alt: 'Avatar'
  }
};
