'use client';

import { Form } from 'ui/form';
import { mockedForm } from 'ui/form/__mocks__/form';
import { Post } from 'ui/post';
import {
  mockedPostWithoutImage,
  mockedPostWithOneImage,
  mockedPostWithTwoImages,
  mockedPostWithThreeImages,
  mockedPostWithFourImages,
  mockedPostWithFiveImages
} from 'ui/post/__mocks__/post';
import { Menu } from 'ui/menu';
import { SearchBar } from 'ui/search-bar';
import { News } from 'ui/news';
import { mockedNews } from 'ui/news/__mocks__/news';
import { Recommendations } from 'ui/recommendations';
import { mockedRecommendations } from 'ui/recommendations/__mocks__/recommendations';

export default function Home() {
  return (
    <main className="min-h-full bg-black">
      <div className="grid justify-center gap-6 sm:grid-cols-[56px_minmax(510px,100%)] sm:px-4 md:grid-cols-[56px_510px_240px] lg:grid-cols-[56px_510px_336px] xl:grid-cols-[224px_510px_336px]">
        <div className="hidden self-stretch sm:block">
          <div className="sticky top-1 pb-2">
            <Menu />
          </div>
        </div>
        <div className="grid gap-px border-x border-gray-medium bg-gray-medium">
          <Form {...mockedForm} />
          <Post {...mockedPostWithoutImage} />
          <Post {...mockedPostWithOneImage} />
          <Post {...mockedPostWithTwoImages} />
          <Post {...mockedPostWithThreeImages} />
          <Post {...mockedPostWithFourImages} />
          <Post {...mockedPostWithFiveImages} />
        </div>
        <div className="hidden self-stretch md:block">
          <div className="sticky top-4 grid gap-4 pb-2">
            <SearchBar onSubmit={() => null} />
            <News {...mockedNews} />
            <Recommendations {...mockedRecommendations} />
          </div>
        </div>
      </div>
    </main>
  );
}
