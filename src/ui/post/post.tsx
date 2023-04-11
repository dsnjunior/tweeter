import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';
import { Avatar, AvatarProps } from '../avatar';
import { CommentIcon, RePostIcon, LikeIcon, ShareIcon } from './icons';
import Link from 'next/link';
import { PostAction } from './post-action';

export type PostProps = {
  data: {
    author: {
      name: string;
      username: string;
      avatar: AvatarProps;
    };
    timeAgo: string;
    content: string;
    images: {
      src: ImageProps['src'];
      alt: string;
    }[];
    comments: string;
    rePosts: string;
    likes: string;
  };
  onComment: () => void;
  onRePost: () => void;
  onLike: () => void;
  onShare: () => void;
};

export function Post({ data, onComment, onRePost, onLike, onShare }: PostProps) {
  const { author, content, images, comments, rePosts, likes, timeAgo } = data;

  const slicedImages = images.slice(0, 4);

  return (
    <article className="flex bg-black p-4 text-white">
      <div className="shrink-0 pr-2">
        <Avatar {...author.avatar} />
      </div>
      <div>
        <Link href={`/${author.username}`} className="text-sm font-semibold">
          {author.name} <span className="font-normal text-gray-light hover:underline">{author.username}</span>
        </Link>
        <span className="text-gray-light"> • </span>
        <Link href="/post-url" className="text-sm text-gray-light hover:underline">
          {timeAgo}
        </Link>
        <p className="text-sm">{content}</p>
        {images.length > 0 && (
          <div
            className={clsx('mt-4 overflow-hidden rounded-lg', {
              'grid grid-cols-2 gap-1': images.length > 1
            })}
          >
            {slicedImages.map(({ alt, src }, index) => (
              <Image
                key={`${alt}-${index}`}
                alt={alt}
                src={src}
                className={clsx('aspect-square w-full object-cover', {
                  'col-span-2': slicedImages.length === 3 && index === 2
                })}
              />
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center justify-between text-gray-light">
          <PostAction icon={<CommentIcon />} label="Comment" counter={comments} onClick={onComment} />
          <PostAction icon={<RePostIcon />} label="Re-post" counter={rePosts} hoverColor="green" onClick={onRePost} />
          <PostAction icon={<LikeIcon />} label="Like" counter={likes} hoverColor="red" onClick={onLike} />
          <PostAction icon={<ShareIcon />} label="Share" onClick={onShare} />
        </div>
      </div>
    </article>
  );
}
