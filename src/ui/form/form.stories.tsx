import type { Meta, StoryObj } from '@storybook/react';

import { mockedForm } from './__mocks__/form';

import { Form } from '.';

const meta: Meta<typeof Form> = {
  title: 'UI/Form',
  component: Form
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: mockedForm
};
