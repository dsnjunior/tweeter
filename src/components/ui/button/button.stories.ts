import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Button',
    variant: 'outlined',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Button',
    fullWidth: true,
  },
};
