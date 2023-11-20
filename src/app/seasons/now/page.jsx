"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/util/HeaderMenu";
import PaginationComponent from "@/components/util/Pagination";
import { getDataResponse } from "@/components/util/get-anime";
import { useState, useEffect } from "react";

const SeasonsNowPage = () => {
  const [page, setPage] = useState(1);
  const [seasonAnime, setSeasonAnime] = useState([]);

  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const animeSeason = await getDataResponse(
        `seasons/now`,
        `page=${page}`
      );
      setSeasonAnime(animeSeason);
    };
    fetchData();
    scrollTop();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Current Season Page ${page}`} />
      <AnimeList api={seasonAnime} link={"anime"} />
      <PaginationComponent
        initialPage={page}
        page={page}
        total={seasonAnime.pagination?.last_visible_page}
        title={page}
        onChange={setPage}
      />
    </>
  );
};

export default SeasonsNowPage;
