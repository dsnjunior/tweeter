import { render, screen, axe, userEvent, act } from 'testing/unit';

import { mockedForm } from './__mocks__/form';

import { Form } from '.';

describe('<Form />', () => {
  it("should render user's avatar", () => {
    render(<Form {...mockedForm} />);

    expect(screen.getByRole('img', { name: mockedForm.data.author.avatar.alt })).toBeVisible();
  });

  it('should render post form', () => {
    render(<Form {...mockedForm} />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "What's happening?" })).toBeVisible();
  });

  describe('attachment buttons', () => {
    it('should render attachment buttons', () => {
      render(<Form {...mockedForm} />);

      expect(screen.getByRole('button', { name: 'Add image' })).toBeVisible();
      expect(screen.getByRole('button', { name: 'Add GIF' })).toBeVisible();
      expect(screen.getByRole('button', { name: 'Add poll' })).toBeVisible();
      expect(screen.getByRole('button', { name: 'Add emoji' })).toBeVisible();
      expect(screen.getByRole('button', { name: 'Schedule post' })).toBeVisible();
    });
    it('should trigger onAddImage when user clicks on add image button', async () => {
      const onAddImage = jest.fn();

      render(<Form {...mockedForm} onAddImage={onAddImage} />);
      await userEvent.click(screen.getByRole('button', { name: 'Add image' }));

      expect(onAddImage).toHaveBeenCalledTimes(1);
    });

    it('should trigger onAddGif when user clicks on add GIF button', async () => {
      const onAddGif = jest.fn();

      render(<Form {...mockedForm} onAddGif={onAddGif} />);
      await userEvent.click(screen.getByRole('button', { name: 'Add GIF' }));

      expect(onAddGif).toHaveBeenCalledTimes(1);
    });

    it('should trigger onAddPoll when user clicks on add poll button', async () => {
      const onAddPoll = jest.fn();

      render(<Form {...mockedForm} onAddPoll={onAddPoll} />);
      await userEvent.click(screen.getByRole('button', { name: 'Add poll' }));

      expect(onAddPoll).toHaveBeenCalledTimes(1);
    });

    it('should trigger onAddEmoji when user clicks on add emoji button', async () => {
      const onAddEmoji = jest.fn();

      render(<Form {...mockedForm} onAddEmoji={onAddEmoji} />);
      await userEvent.click(screen.getByRole('button', { name: 'Add emoji' }));

      expect(onAddEmoji).toHaveBeenCalledTimes(1);
    });

    it('should trigger onSchedulePost when user clicks on schedule button', async () => {
      const onSchedulePost = jest.fn();

      render(<Form {...mockedForm} onSchedulePost={onSchedulePost} />);
      await userEvent.click(screen.getByRole('button', { name: 'Schedule post' }));

      expect(onSchedulePost).toHaveBeenCalledTimes(1);
    });
  });

  it('should render tweet button', () => {
    render(<Form {...mockedForm} />);

    expect(screen.getByRole('button', { name: 'Tweet' })).toBeVisible();
  });

  it('should render tweet button as disabled', () => {
    render(<Form {...mockedForm} />);

    expect(screen.getByRole('button', { name: 'Tweet' })).toBeDisabled();
  });

  it('should enable tweet button when user types something', async () => {
    render(<Form {...mockedForm} />);

    const tweetButton = screen.getByRole('button', { name: 'Tweet' });
    const postInput = screen.getByRole('textbox', { name: "What's happening?" });

    expect(tweetButton).toBeDisabled();

    await act(async () => {
      await userEvent.type(postInput, 'Hello world');
    });

    expect(tweetButton).toBeEnabled();
  });

  it('should render tweet button as disabled when user deletes all text', async () => {
    render(<Form {...mockedForm} />);

    const tweetButton = screen.getByRole('button', { name: 'Tweet' });
    const postInput = screen.getByRole('textbox', { name: "What's happening?" });

    expect(tweetButton).toBeDisabled();

    await act(async () => {
      await userEvent.type(postInput, 'Hello world');
    });

    expect(tweetButton).toBeEnabled();

    await act(async () => {
      await userEvent.clear(postInput);
    });

    expect(tweetButton).toBeDisabled();
  });

  it('should submit form when user clicks on tweet button', async () => {
    const handleSubmit = jest.fn();

    render(<Form {...mockedForm} onSubmit={handleSubmit} />);

    const tweetButton = screen.getByRole('button', { name: 'Tweet' });
    const postInput = screen.getByRole('textbox', { name: "What's happening?" });

    await act(async () => {
      await userEvent.type(postInput, 'Hello world');
    });

    await userEvent.click(tweetButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      text: 'Hello world',
      image: undefined,
      gif: undefined,
      poll: undefined,
      emoji: undefined,
      scheduledAt: undefined
    });
  });

  it('should have no accessibility violations', async () => {
    render(<Form {...mockedForm} />);

    expect(await axe(await screen.findByRole('form'))).toHaveNoViolations();
  });
});
