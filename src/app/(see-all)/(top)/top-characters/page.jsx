"use client";

import HeaderMenu from "@/components/util/HeaderMenu";
import PaginationComponent from "@/components/util/Pagination";
import { getDataResponse } from "@/components/util/get-anime";
import { useEffect, useState } from "react";
import AnimeList from "@/components/AnimeList";

function Page() {
  const [page, setPage] = useState(1);
  const [topCharacters, setTopAnime] = useState([]);

  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataResponse("top/characters", `page=${page}`);
      setTopAnime(data);
    };
    fetchData();
    scrollTop();
  }, [page]);

  return (
    <div className=" xl:mx-36">
      <HeaderMenu title={`Top Characters Page ${page}`} />
      <AnimeList api={topCharacters} link={"character/anime"}/>
      <PaginationComponent
        initialPage={page}
        page={page}
        total={topCharacters.pagination?.last_visible_page}
        title={page}
        onChange={setPage}
      />
    </div>
  );
}

export default Page;
