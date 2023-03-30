import { render, screen } from 'testing/unit';

import Page from '../page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', {
      name: /heading/
    });

    expect(heading).toBeInTheDocument();
  });
});
