import Link from 'next/link';
import { Button } from '../button';
import {
  BrandIcon,
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon
} from './icons';

const items = [
  {
    label: 'Home',
    href: '/',
    icon: <HomeIcon />
  },
  {
    label: 'Explore',
    href: '/explore',
    icon: <ExploreIcon />
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: <NotificationsIcon />
  },
  {
    label: 'Messages',
    href: '/messages',
    icon: <MessagesIcon />
  },
  {
    label: 'Bookmarks',
    href: '/bookmarks',
    icon: <BookmarksIcon />
  },
  {
    label: 'Lists',
    href: '/lists',
    icon: <ListsIcon />
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: <ProfileIcon />
  },
  {
    label: 'More',
    href: '/more',
    icon: <MoreIcon />
  }
] as const;

export function Menu() {
  return (
    <div className="bg-black text-white @container">
      <nav>
        <Link href="/" aria-label="Tweeter" className="block w-fit p-4 leading-none hover:text-brand">
          <BrandIcon />
        </Link>
        <ul>
          {items.map(({ href, icon, label }) => (
            <li key={href}>
              <Link href={href} className="flex items-center p-4 hover:text-brand">
                <span>{icon}</span>
                <span className="ml-2 hidden text-sm font-semibold @[110px]:block">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-4 hidden @[110px]:block">
        <Button label="Tweet" size="large" fullWidth />
      </div>
    </div>
  );
}
