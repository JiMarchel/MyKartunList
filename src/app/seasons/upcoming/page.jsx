"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/util/HeaderMenu";
import PaginationComponent from "@/components/util/Pagination";
import { getDataResponse } from "@/components/util/get-anime";
import { useState, useEffect } from "react";

const SeasonsUpcomingPage = () => {
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
        `seasons/upcoming`,
        `page=${page}`
      );
      setSeasonAnime(animeSeason);
    };
    fetchData();
    scrollTop();
  }, [page]);

  return (
    <div className=" xl:mx-36">
      <HeaderMenu title={`Anime Upcoming Season Page ${page}`} />
      <AnimeList api={seasonAnime} link={"anime"} />
      <PaginationComponent
        initialPage={page}
        page={page}
        total={seasonAnime.pagination?.last_visible_page}
        title={page}
        onChange={setPage}
      />
    </div>
  );
};

export default SeasonsUpcomingPage;
