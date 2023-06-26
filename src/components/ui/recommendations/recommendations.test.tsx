import { render, screen, axe } from 'testing/unit';

import { mockedRecommendations } from './__mocks__/recommendations';

import { Recommendations } from '.';

describe('<Recommendations />', () => {
  it('should render correctly', () => {
    render(<Recommendations {...mockedRecommendations} />);

    expect(screen.getByRole('complementary')).toMatchSnapshot();
  });

  it('should have `Who to follow` title', () => {
    render(<Recommendations {...mockedRecommendations} />);
    expect(screen.getByRole('heading', { level: 1, name: /who to follow/i })).toBeVisible();
  });

  it('should render recommendations', () => {
    render(<Recommendations {...mockedRecommendations} />);
    expect(screen.getByRole('list')).toBeVisible();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should render recommendation with correct data', () => {
    render(<Recommendations {...mockedRecommendations} />);
    expect(screen.getByText(mockedRecommendations.recommendations[0].name)).toBeVisible();
    expect(screen.getByText(mockedRecommendations.recommendations[0].username)).toBeVisible();

    expect(
      screen.getByRole('link', { name: 'Follow ' + mockedRecommendations.recommendations[0].username })
    ).toHaveAttribute('href', mockedRecommendations.recommendations[0].username);
    expect(
      screen.getByRole('img', { name: mockedRecommendations.recommendations[0].name + "'s profile photo" })
    ).toBeVisible();
  });

  it('should have no accessibility violations', async () => {
    render(<Recommendations {...mockedRecommendations} />);

    expect(await axe(await screen.findByRole('complementary'))).toHaveNoViolations();
  });
});
