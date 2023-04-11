import { render, screen, axe, act, userEvent } from 'testing/unit';

import { SearchBar, SearchBarProps } from '.';

const mockedSearchBar: SearchBarProps = {
  onSubmit: jest.fn()
};

describe('<SearchBar />', () => {
  it('should render correctly', () => {
    render(<SearchBar {...mockedSearchBar} />);

    expect(screen.getByRole('form', { name: 'Search' })).toBeVisible();
  });

  it('should render search input', () => {
    render(<SearchBar {...mockedSearchBar} />);

    expect(screen.getByRole('searchbox', { name: 'Search' })).toBeVisible();
  });

  it('should be able to type value', async () => {
    render(<SearchBar {...mockedSearchBar} />);

    const searchInput = await screen.findByRole('searchbox', { name: 'Search' });

    await act(async () => {
      await userEvent.type(searchInput, 'test');
    });

    expect(searchInput).toHaveValue('test');
  });

  it('should call onSubmit when form is submitted', async () => {
    render(<SearchBar {...mockedSearchBar} />);

    const searchInput = await screen.findByRole('searchbox', { name: 'Search' });

    await act(async () => {
      await userEvent.type(searchInput, 'test');
      await userEvent.keyboard('{enter}');
    });

    expect(mockedSearchBar.onSubmit).toHaveBeenCalledWith('test');
  });

  it('should have no accessibility violations', async () => {
    render(<SearchBar {...mockedSearchBar} />);

    expect(await axe(await screen.findByRole('form'))).toHaveNoViolations();
  });
});
