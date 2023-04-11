import { RecommendationsProps } from '..'

import mockedImage from './image.png'

export const mockedRecommendations: RecommendationsProps = {
  recommendations: [
    {
      avatarImage: mockedImage,
      name: 'Leo',
      username: '@leo',
    },
    {
      avatarImage: mockedImage,
      name: 'Leonardo',
      username: '@leonardo',
    },
    {
      avatarImage: mockedImage,
      name: 'Leo Pinheiro',
      username: '@leo_pinheiro',
    },
  ]
}
