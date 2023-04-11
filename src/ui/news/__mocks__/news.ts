import { NewsProps } from "..";

import mockedImage from './image.png'

export const mockedNews: NewsProps = {
  trends: [
    {
      href: '/thread',
      category: 'Football',
      title: 'For the time being, the legendary football star has declared his retirement from his present team.',
      trendingIn: '#Football',
      image: mockedImage
    },
    {
      href: '/thread-1',
      category: 'Entertainment',
      title: 'We don\'t have time to mock all of these texts right now.',
      trendingIn: '#Testing',

    },
    {
      href: '/thread-2',
      category: 'Programming',
      title: 'Yet we are still doing our best.',
      trendingIn: '#React',
      image: mockedImage
    }
  ]
}
