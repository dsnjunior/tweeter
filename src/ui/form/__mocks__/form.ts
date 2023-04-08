import { FormProps } from "..";

import mockedImage from './image.png'

export const mockedForm: FormProps = {
  data: {
    author: {
      avatar: {
        src: mockedImage,
        alt: 'Leo`s avatar',
      },
    },
  },
  onAddImage() { },
  onAddGif() { },
  onAddPoll() { },
  onAddEmoji() { },
  onSchedulePost() { },
  onSubmit() { },
}
