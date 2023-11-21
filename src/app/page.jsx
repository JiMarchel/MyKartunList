import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import {
  getDataResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/components/util/get-anime";
import ScrollUpDown from "@/components/ScrollUpDown";

export default async function Page() {
  const topAnime = await getDataResponse("top/anime", "limit=8");
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendationAnime = reproduce(recommendationAnime, 8);

  const topManga = await getDataResponse("top/manga", "limit=8")
  let recommendationManga = await getNestedAnimeResponse(
    "recommendations/manga",
    "entry"
  );
  recommendationManga = reproduce(recommendationManga, 8);

  return (
    <div className="flex flex-col gap-20 xl:mx-36">
      <div className="flex flex-col gap-5" id="top-anime">
        <section>
          <Header
            title={"Top Anime"}
            linkTitle={"View All"}
            linkHref={"/top-anime"}
          />
          <AnimeList api={topAnime} link={"anime"} />
        </section>
        <section>
          <Header
            title={"Recommendations Anime"}
            linkTitle={"View All"}
            linkHref={"/recommendations-anime"}
          />
          <AnimeList api={recommendationAnime} link={"anime"} />
        </section>
      </div>
      <ScrollUpDown/>
      <div className="flex flex-col gap-5" id="top-manga">
        <section>
        <Header
            title={"Top Manga"}
            linkTitle={"View All"}
            linkHref={"/top-manga"}
          />
          <AnimeList api={topManga} link={"manga"} />
        </section>
        <section>
          <Header
            title={"Recommendations Manga"}
            linkTitle={"View All"}
            linkHref={"/recommendations-manga"}
          />
          <AnimeList api={recommendationAnime} link={"manga"} />
        </section>
      </div>
    </div>
  );
}
