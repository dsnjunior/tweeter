import { render, screen, axe } from 'testing/unit';

import { mockedNews } from './__mocks__/news';

import { News } from '.';

describe('<News />', () => {
  it('should render correctly', () => {
    render(<News {...mockedNews} />);

    expect(screen.getByRole('complementary')).toMatchSnapshot();
  });

  it('should have `What’s happening` title', () => {
    render(<News {...mockedNews} />);
    expect(screen.getByRole('heading', { level: 1, name: "What's happening" })).toBeVisible();
  });

  it('should render news items', () => {
    render(<News {...mockedNews} />);
    expect(screen.getByRole('list')).toBeVisible();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should render news item with correct data', () => {
    render(<News {...mockedNews} />);
    expect(screen.getByText(mockedNews.trends[0].title)).toBeVisible();
    expect(screen.getAllByText('Trending in')).toHaveLength(3);

    expect(screen.getByRole('link', { name: mockedNews.trends[0].title })).toHaveAttribute(
      'href',
      mockedNews.trends[0].href
    );
    expect(screen.getByRole('img', { name: mockedNews.trends[0].title + ' trend thumbnail' })).toBeVisible();
  });

  it('should render news item with correct data when image is not provided', () => {
    render(<News {...mockedNews} />);

    expect(screen.getByText(mockedNews.trends[1].title)).toBeVisible();
    expect(screen.getAllByText('Trending in')).toHaveLength(3);

    expect(screen.getByRole('link', { name: mockedNews.trends[1].title })).toHaveAttribute(
      'href',
      mockedNews.trends[1].href
    );

    expect(
      screen.queryByRole('img', { name: mockedNews.trends[1].title + ' trend thumbnail' })
    ).not.toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    render(<News {...mockedNews} />);

    expect(await axe(await screen.findByRole('complementary'))).toHaveNoViolations();
  });
});
