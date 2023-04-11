import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import { SideBlock } from '../side-block';

type Trend = {
  href: string;
  category: string;
  title: string;
  trendingIn: string;
  image?: ImageProps['src'];
};

export type NewsProps = {
  trends: Trend[];
};

export function News({ trends }: NewsProps) {
  return (
    <SideBlock title="What's happening" label="Trending topics">
      {trends.map(({ category, href, title, trendingIn, image }) => (
        <Link key={href} href={href} className="text-sm" aria-label={title}>
          <div className="flex">
            <div>
              <div className="mb-1 text-gray-light">{category}</div>
              <h2 className="mb-1 font-semibold">{title}</h2>
            </div>
            {image && (
              <div className="ml-auto h-16 w-[4.5rem] shrink-0 pl-2">
                <Image
                  key={`${href}-image`}
                  alt={`${title} trend thumbnail`}
                  src={image}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            )}
          </div>
          <div className="text-gray-light">
            Trending in <span className="font-medium text-brand hover:underline">{trendingIn}</span>
          </div>
        </Link>
      ))}
    </SideBlock>
  );
}
