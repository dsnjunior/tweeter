import { PostProps } from "..";

import mockedImage from './image.png'

export const mockedPostWithoutImage: PostProps = {
  data: {
    author: {
      name: 'Leo',
      username: '@leo',
      avatar: {
        src: mockedImage,
        alt: 'Leo`s avatar',
      },
    },
    timeAgo: '10 min',
    content: 'Life Update: I’m joining CR Vasco da Gama today. Honored to have worked with amazing people at Sao Paulo FC. Hope I don’t go back. Yay!',
    images: [],
    comments: '124',
    rePosts: '30',
    likes: '2.2k'
  },

  onComment: () => null,
  onRePost: () => null,
  onLike: () => null,
  onShare: () => null,
}

export const mockedPostWithOneImage: PostProps = {
  ...mockedPostWithoutImage,
  data: {
    ...mockedPostWithoutImage.data,
    images: [{
      src: mockedImage,
      alt: 'mock image',
    }]
  },
}

export const mockedPostWithTwoImages: PostProps = {
  ...mockedPostWithoutImage,
  data: {
    ...mockedPostWithoutImage.data,
    images: [
      ...mockedPostWithOneImage.data.images, {
        src: mockedImage,
        alt: 'mock image 2',
      }]
  },
}

export const mockedPostWithThreeImages: PostProps = {
  ...mockedPostWithoutImage,
  data: {
    ...mockedPostWithoutImage.data,
    images: [
      ...mockedPostWithTwoImages.data.images, {
        src: mockedImage,
        alt: 'mock image 3',
      }]
  },
}

export const mockedPostWithFourImages: PostProps = {
  ...mockedPostWithoutImage,
  data: {
    ...mockedPostWithoutImage.data,
    images: [
      ...mockedPostWithThreeImages.data.images, {
        src: mockedImage,
        alt: 'mock image 4',
      }]
  },
}

export const mockedPostWithFiveImages: PostProps = {
  ...mockedPostWithoutImage,
  data: {
    ...mockedPostWithoutImage.data,
    images: [
      ...mockedPostWithFourImages.data.images, {
        src: mockedImage,
        alt: 'mock image 5',
      }]
  },
}
