import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import {
  getDataResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/components/util/get-anime";

export default async function Page() {
  const topAnime = await getDataResponse("top/anime", "limit=8");
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendationAnime = reproduce(recommendationAnime, 8);
  return (
    <div className="flex flex-col gap-20">
      <section>
        <Header
          title={"Top Anime"}
          linkTitle={"Lihat Semua"}
          linkHref={"/top-anime"}
        />
        <AnimeList api={topAnime} link={"anime"} />
      </section>
      <section>
        <Header
          title={"Rekomendasi"}
          linkTitle={"Lihat Semua"}
          linkHref={"/recommendations-anime"}
        />
        <AnimeList api={recommendationAnime} link={"anime"} />
      </section>
    </div>
  );
}
