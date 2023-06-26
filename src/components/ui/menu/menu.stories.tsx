import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '.';

const meta: Meta<typeof Menu> = {
  title: 'UI/Menu',
  component: Menu
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
