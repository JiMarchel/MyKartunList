"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/util/HeaderMenu";
import PaginationComponent from "@/components/util/Pagination";
import { getDataResponse } from "@/components/util/get-anime";
import { useEffect, useState } from "react";

function TopMangaPage() {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);

  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataResponse("top/manga", `page=${page}`);
      setTopManga(data);
    };
    fetchData();
    scrollTop();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Top Manga Page ${page}`} />
      <AnimeList api={topManga} link={"manga"} />
      <PaginationComponent
        initialPage={page}
        page={page}
        total={topManga.pagination?.last_visible_page}
        title={page}
        onChange={setPage}
      />
    </>
  );
}

export default TopMangaPage;
