import type { Meta, StoryObj } from '@storybook/react';

import { mockedRecommendations } from './__mocks__/recommendations';

import { Recommendations } from '.';

const meta: Meta<typeof Recommendations> = {
  title: 'UI/Recommendations',
  component: Recommendations
};

export default meta;
type Story = StoryObj<typeof Recommendations>;

export const Default: Story = {
  args: mockedRecommendations
};
