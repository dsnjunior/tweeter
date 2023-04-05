import { render, screen, axe } from 'testing/unit';

import { Button } from '.';

describe('<Button />', () => {
  it('renders label', () => {
    render(<Button label="Expected Label" />);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Expected Label');
  });

  describe('variant', () => {
    it('renders filled by default', () => {
      render(<Button label="Label" />);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-brand text-white');
    });

    it('renders filled', () => {
      render(<Button label="Label" variant="filled" />);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-brand text-white');
    });

    it('renders outlined', () => {
      render(<Button label="Label" variant="outlined" />);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-transparent text-brand');
    });
  });

  describe('size', () => {
    it('renders medium by default', () => {
      render(<Button label="Label" />);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('text-xs');
    });

    it('renders medium', () => {
      render(<Button label="Label" size="medium" />);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('text-xs');
    });

    it('renders large', () => {
      render(<Button label="Label" size="large" />);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('text-sm');
    });
  });

  describe('disabled', () => {
    it('renders disabled', () => {
      render(<Button label="Label" disabled />);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('opacity-50 hover:opacity-50');
      expect(button).toBeDisabled();
    });
  });

  describe('fullWidth', () => {
    it('renders full width', () => {
      render(<Button label="Label" fullWidth />);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('w-full');
    });
  });

  describe('onClick', () => {
    it('calls onClick', () => {
      const onClick = jest.fn();

      render(<Button label="Label" onClick={onClick} />);

      const button = screen.getByRole('button');

      button.click();

      expect(onClick).toHaveBeenCalled();
    });

    it('does not call onClick when disabled', () => {
      const onClick = jest.fn();

      render(<Button label="Label" disabled onClick={onClick} />);

      const button = screen.getByRole('button');

      button.click();

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('a11y', () => {
    it('has no a11y violations', async () => {
      const { container } = render(<Button label="Label" />);

      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations when disabled', async () => {
      const { container } = render(<Button label="Label" disabled />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
