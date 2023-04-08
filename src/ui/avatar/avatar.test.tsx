import { render, screen, axe } from 'testing/unit';

import mockImage from './__mocks__/avatar.png';

import { Avatar } from '.';

describe('<Avatar />', () => {
  it('renders the avatar', () => {
    render(<Avatar src={mockImage} alt="Image" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText('Image')).toBeInTheDocument();
  });
  describe('a11y', () => {
    it('has no a11y violations', async () => {
      const { container } = render(<Avatar src={mockImage} alt="Image" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
