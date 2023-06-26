import { render, screen, axe } from 'testing/unit';

import { Menu } from '.';

describe('<Menu />', () => {
  it('renders the menu', () => {
    render(<Menu />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(8);
    expect(screen.getAllByRole('link')).toHaveLength(9);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Messages')).toBeInTheDocument();
    expect(screen.getByText('Bookmarks')).toBeInTheDocument();
    expect(screen.getByText('Lists')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('More')).toBeInTheDocument();
    expect(screen.getByText('Tweet')).toBeInTheDocument();
  });

  describe('a11y', () => {
    it('has no a11y violations', async () => {
      render(<Menu />);

      expect(await axe((await screen.findByRole('navigation')).parentElement!)).toHaveNoViolations();
    });
  });
});
