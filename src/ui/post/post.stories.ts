import type { Meta, StoryObj } from '@storybook/react';

import {
  mockedPostWithoutImage,
  mockedPostWithOneImage,
  mockedPostWithTwoImages,
  mockedPostWithThreeImages,
  mockedPostWithFourImages
} from './__mocks__/post'

import { Post } from '.';

const meta: Meta<typeof Post> = {
  title: 'UI/Post',
  component: Post,
};

export default meta;
type Story = StoryObj<typeof Post>;


export const Default: Story = {
  args: mockedPostWithoutImage,
};

export const WithAImage: Story = {
  args: mockedPostWithOneImage,
};

export const WithTwoImages: Story = {
  args: mockedPostWithTwoImages,
};

export const WithThreeImages: Story = {
  args: mockedPostWithThreeImages,
};

export const WithFourImages: Story = {
  args: mockedPostWithFourImages,
};
