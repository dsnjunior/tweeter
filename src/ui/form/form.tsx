import { useState } from 'react';
import { Avatar, AvatarProps } from '../avatar';
import { Button } from '../button';

import { FormAttachment } from './form-attachment';
import { ImageIcon, GifIcon, PollIcon, EmojiIcon, ScheduleIcon } from './icons';

export type FormProps = {
  data: {
    author: {
      avatar: AvatarProps;
    };
  };

  onAddImage(): void;
  onAddGif(): void;
  onAddPoll(): void;
  onAddEmoji(): void;
  onSchedulePost(): void;
  onSubmit(data: { text: string }): void;
};

export function Form({ data, onAddImage, onAddGif, onAddPoll, onAddEmoji, onSchedulePost, onSubmit }: FormProps) {
  const {
    author: { avatar }
  } = data;

  const [textValue, setTextValue] = useState('');

  function onTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const textArea = event.target;
    const text = textArea.value;

    setTextValue(text);
  }

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const textElement = form.elements.namedItem('text') as HTMLTextAreaElement;
    const text = textElement.value;

    onSubmit({ text });
  }

  return (
    <div className="flex bg-black p-4 text-white">
      <div className="shrink-0 pr-2">
        <Avatar {...avatar} />
      </div>
      <form className="w-full" aria-label="Post a tweet" onSubmit={submitForm}>
        <div
          data-text-value={textValue}
          className="relative after:invisible after:block after:whitespace-pre-wrap after:py-2 after:content-[attr(data-text-value)_'_']"
        >
          <textarea
            placeholder="What's happening?"
            name="text"
            aria-label="What's happening?"
            className="absolute h-full w-full resize-none overflow-hidden bg-transparent py-2 text-current outline-none"
            onInput={onTextAreaChange}
          />
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex items-center text-brand">
            <FormAttachment icon={<ImageIcon />} label="Add image" onClick={onAddImage} />
            <FormAttachment icon={<GifIcon />} label="Add GIF" onClick={onAddGif} />
            <FormAttachment icon={<PollIcon />} label="Add poll" onClick={onAddPoll} />
            <FormAttachment icon={<EmojiIcon />} label="Add emoji" onClick={onAddEmoji} />
            <FormAttachment icon={<ScheduleIcon />} label="Schedule post" onClick={onSchedulePost} />
          </div>
          <div className="w-24">
            <Button label="Tweet" fullWidth disabled={!textValue} />
          </div>
        </div>
      </form>
    </div>
  );
}
