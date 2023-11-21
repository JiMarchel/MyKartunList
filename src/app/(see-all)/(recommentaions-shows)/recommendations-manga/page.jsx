"use client";
import NestedAnimeList from "@/components/NestedAnimeList";
import HeaderMenu from "@/components/util/HeaderMenu";
import { getNestedAnimeResponse, reproduce } from "@/components/util/get-anime";
import { useState, useEffect } from "react";

const RecommendationsManga = () => {
  const [recAnime, setRecAnime] = useState([]);

  const fetchData = async () => {
    let data = await getNestedAnimeResponse(`recommendations/manga`, "entry");
    data = reproduce(data, 200);

    setRecAnime(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" xl:mx-36">
      <HeaderMenu title={`Recommendations Manga`} />
      <NestedAnimeList api={recAnime} link={"manga"} />
    </div>
  );
};

export default RecommendationsManga;
