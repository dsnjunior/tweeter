import { CreatePostForm } from "@/components/create-post-form";
import { Post } from "@/components/ui/post";
import { mockedPostWithoutImage } from "@/components/ui/post/__mocks__/post";
import { Menu } from "@/components/ui/menu";
import { SearchBar } from "@/components/ui/search-bar";
import { News } from "@/components/ui/news";
import { mockedNews } from "@/components/ui/news/__mocks__/news";
import { Recommendations } from "@/components/ui/recommendations";
import { mockedRecommendations } from "@/components/ui/recommendations/__mocks__/recommendations";
import { getCurrentUser } from "@/server/session";
import { Avatar } from "@/components/ui/avatar";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <main className="min-h-full bg-black">
      <div className="grid justify-center gap-6 sm:grid-cols-[56px_minmax(510px,100%)] sm:px-4 md:grid-cols-[56px_510px_240px] lg:grid-cols-[56px_510px_336px] xl:grid-cols-[224px_510px_336px]">
        <div className="hidden self-stretch sm:block">
          <div className="sticky top-1 pb-2">
            <Menu />
          </div>
        </div>
        <div className="min-h-full border-x border-gray-medium">
          {user && (
            <CreatePostForm
              avatar={<Avatar alt={user.name ?? ""} src={user.image ?? ""} />}
            />
          )}
          <div className="border-t border-gray-medium last:border-b">
            <Post {...mockedPostWithoutImage} />
          </div>
        </div>
        <div className="hidden self-stretch md:block">
          <div className="sticky top-4 grid gap-4 pb-2">
            <SearchBar />
            <News {...mockedNews} />
            <Recommendations {...mockedRecommendations} />
          </div>
        </div>
      </div>
    </main>
  );
}
