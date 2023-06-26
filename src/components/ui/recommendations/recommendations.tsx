import Link from 'next/link';
import { Avatar, AvatarProps } from '../avatar';
import { Button } from '../button';
import { SideBlock } from '../side-block';

type Recommendation = {
  avatarImage: AvatarProps['src'];
  name: string;
  username: string;
};

export type RecommendationsProps = {
  recommendations: Recommendation[];
};

export function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <SideBlock title="Who to Follow" label="Recommendations to follow">
      {recommendations.map(({ avatarImage, name, username }) => (
        <Link
          href={username}
          key={username}
          className="flex"
          aria-label={`Follow ${username}`}
          title={`${name} - ${username}`}
        >
          <div className="shrink-0">
            <Avatar src={avatarImage} alt={`${name}'s profile photo`} />
          </div>
          <div className="mx-2 w-full overflow-hidden text-sm">
            <div className="w-full truncate font-semibold">{name}</div>
            <div className="w-full truncate text-gray-light">{username}</div>
          </div>
          <div className="shrink-0">
            <Button label="Follow" variant="outlined" />
          </div>
        </Link>
      ))}
    </SideBlock>
  );
}
