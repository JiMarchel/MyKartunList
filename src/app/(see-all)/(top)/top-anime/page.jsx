"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/util/HeaderMenu";
import PaginationComponent from "@/components/util/Pagination";
import { getDataResponse } from "@/components/util/get-anime";
import { useEffect, useState } from "react";

function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataResponse("top/anime", `page=${page}`);
      setTopAnime(data);
    };
    fetchData();
    scrollTop();
  }, [page]);

  return (
    <div className=" xl:mx-36">
      <HeaderMenu title={`Top Anime Page ${page}`} />
      <AnimeList api={topAnime} link={"anime"} />
      <PaginationComponent
        initialPage={page}
        page={page}
        total={topAnime.pagination?.last_visible_page}
        title={page}
        onChange={setPage}
      />
    </div>
  );
}

export default Page;
