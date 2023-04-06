import { render, screen, axe } from 'testing/unit';

import {
  mockedPostWithoutImage,
  mockedPostWithOneImage,
  mockedPostWithTwoImages,
  mockedPostWithThreeImages,
  mockedPostWithFourImages,
  mockedPostWithFiveImages
} from './__mocks__/post';

import { Post } from '.';

describe('<Post />', () => {
  describe('when post has no image', () => {
    it('should render correctly', async () => {
      render(<Post {...mockedPostWithoutImage} />);

      expect(screen.getByText(mockedPostWithoutImage.data.content)).toBeInTheDocument();

      expect(screen.getAllByRole('img')).toHaveLength(1);
      expect(screen.getByRole('img')).toHaveAccessibleName(mockedPostWithoutImage.data.author.avatar.alt);

      expect(await screen.findByRole('article')).toMatchSnapshot();
    });
  });

  describe('when post has one image', () => {
    it('should render correctly', async () => {
      render(<Post {...mockedPostWithOneImage} />);

      expect(screen.getByText(mockedPostWithOneImage.data.content)).toBeInTheDocument();

      expect(screen.getAllByRole('img')).toHaveLength(2);
      expect(screen.getByRole('img', { name: mockedPostWithoutImage.data.author.avatar.alt })).toBeVisible();

      const postImage = screen.getByRole('img', { name: mockedPostWithOneImage.data.images[0].alt });
      expect(postImage).toBeVisible();

      const postImageWrapper = postImage?.parentElement;

      expect(postImageWrapper).toHaveClass('mt-4 overflow-hidden rounded-lg');
    });
  });

  describe('when post has two images', () => {
    it('should render correctly', async () => {
      render(<Post {...mockedPostWithTwoImages} />);

      expect(screen.getByText(mockedPostWithTwoImages.data.content)).toBeInTheDocument();

      expect(screen.getAllByRole('img')).toHaveLength(3);

      expect(screen.getByRole('img', { name: mockedPostWithoutImage.data.author.avatar.alt })).toBeVisible();
      expect(screen.getByRole('img', { name: mockedPostWithTwoImages.data.images[0].alt })).toBeVisible();

      const postImage = screen.getByRole('img', { name: mockedPostWithTwoImages.data.images[1].alt });
      expect(postImage).toBeVisible();

      const postImageWrapper = postImage?.parentElement;

      expect(postImageWrapper).toHaveClass('mt-4 overflow-hidden rounded-lg');
    });
  });

  describe('when post has three images', () => {
    it('should render correctly', async () => {
      render(<Post {...mockedPostWithThreeImages} />);

      expect(screen.getByText(mockedPostWithThreeImages.data.content)).toBeInTheDocument();

      expect(screen.getAllByRole('img')).toHaveLength(4);

      expect(screen.getByRole('img', { name: mockedPostWithoutImage.data.author.avatar.alt })).toBeVisible();
      expect(screen.getByRole('img', { name: mockedPostWithThreeImages.data.images[0].alt })).toBeVisible();
      expect(screen.getByRole('img', { name: mockedPostWithThreeImages.data.images[1].alt })).toBeVisible();

      const postImage = screen.getByRole('img', { name: mockedPostWithThreeImages.data.images[2].alt });
      expect(postImage).toBeVisible();

      const postImageWrapper = postImage?.parentElement;

      expect(postImageWrapper).toHaveClass('mt-4 overflow-hidden rounded-lg');
    });
  });

  describe('when post has four images', () => {
    it('should render correctly', async () => {
      render(<Post {...mockedPostWithFourImages} />);

      expect(screen.getByText(mockedPostWithFourImages.data.content)).toBeInTheDocument();

      expect(screen.getAllByRole('img')).toHaveLength(5);

      expect(screen.getByRole('img', { name: mockedPostWithoutImage.data.author.avatar.alt })).toBeVisible();
      expect(screen.getByRole('img', { name: mockedPostWithFourImages.data.images[0].alt })).toBeVisible();
      expect(screen.getByRole('img', { name: mockedPostWithFourImages.data.images[1].alt })).toBeVisible();
      expect(screen.getByRole('img', { name: mockedPostWithFourImages.data.images[2].alt })).toBeVisible();

      const postImage = screen.getByRole('img', { name: mockedPostWithFourImages.data.images[3].alt });
      expect(postImage).toBeVisible();

      const postImageWrapper = postImage?.parentElement;

      expect(postImageWrapper).toHaveClass('mt-4 overflow-hidden rounded-lg');
    });
  });

  describe('when post has more than four images', () => {
    it('should render correctly', async () => {
      render(<Post {...mockedPostWithFiveImages} />);

      expect(screen.getByText(mockedPostWithFiveImages.data.content)).toBeInTheDocument();

      expect(screen.getAllByRole('img')).toHaveLength(5);

      expect(screen.queryByRole('img', { name: mockedPostWithFiveImages.data.images[4].alt })).toBeNull();
    });
  });

  describe('post actions', () => {
    it('should render all buttons', async () => {
      render(<Post {...mockedPostWithOneImage} />);

      expect(screen.getByRole('button', { name: /comment/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /re-post/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument();
    });

    it('should comment post', async () => {
      const onComment = jest.fn();
      render(<Post {...mockedPostWithOneImage} onComment={onComment} />);

      const commentButton = screen.getByRole('button', { name: /comment/i });

      expect(commentButton).toHaveClass('hover:text-brand');

      commentButton.click();

      expect(onComment).toHaveBeenCalled();
    });

    it('should like post', async () => {
      const onLike = jest.fn();
      render(<Post {...mockedPostWithOneImage} onLike={onLike} />);

      const likeButton = screen.getByRole('button', { name: /like/i });

      expect(likeButton).toHaveClass('hover:text-[#F18]');

      likeButton.click();

      expect(onLike).toHaveBeenCalled();
    });

    it('should re-post post', async () => {
      const onRePost = jest.fn();
      render(<Post {...mockedPostWithOneImage} onRePost={onRePost} />);

      const rePostButton = screen.getByRole('button', { name: /re-post/i });

      expect(rePostButton).toHaveClass('hover:text-[#0B7]');

      rePostButton.click();

      expect(onRePost).toHaveBeenCalled();
    });

    it('should share post', async () => {
      const onShare = jest.fn();
      render(<Post {...mockedPostWithOneImage} onShare={onShare} />);

      const shareButton = screen.getByRole('button', { name: /share/i });

      expect(shareButton).toHaveClass('hover:text-brand');

      shareButton.click();

      expect(onShare).toHaveBeenCalled();
    });
  });

  describe('a11y', () => {
    it('has no a11y violations', async () => {
      render(<Post {...mockedPostWithOneImage} />);

      expect(await axe(await screen.findByRole('article'))).toHaveNoViolations();
    });
  });
});
