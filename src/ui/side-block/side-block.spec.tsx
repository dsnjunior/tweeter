import { render, screen, axe } from 'testing/unit';

import { SideBlock, SideBlockProps } from '.';

const mockedSideBlock: SideBlockProps = {
  title: 'Block title',
  label: 'label',
  children: [<div key="1">Child 1</div>, <div key="2">Child 2</div>, <div key="3">Child 3</div>]
};

describe('<SideBlock />', () => {
  it('should render title', () => {
    render(<SideBlock {...mockedSideBlock} title="Expected title 😊" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Expected title 😊' })).toBeVisible();
  });

  it('should have correct aria-label', () => {
    render(<SideBlock {...mockedSideBlock} label="Expected label 😊" />);

    expect(screen.getByRole('complementary')).toHaveAttribute('aria-label', 'Expected label 😊');
  });

  it('should render children', () => {
    render(<SideBlock {...mockedSideBlock} />);

    expect(screen.getByRole('list')).toBeVisible();

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should render children with correct data', () => {
    render(<SideBlock {...mockedSideBlock} />);

    expect(screen.getByText('Child 1')).toBeVisible();
    expect(screen.getByText('Child 2')).toBeVisible();
    expect(screen.getByText('Child 3')).toBeVisible();
  });

  it('should have no accessibility violations', async () => {
    render(<SideBlock {...mockedSideBlock} />);

    expect(await axe(await screen.findByRole('complementary'))).toHaveNoViolations();
  });
});
