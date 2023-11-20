import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getDataResponse } from "@/components/util/get-anime";
import React from "react";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getDataResponse("anime", `q=${decodedKeyword}`);
  return (
    <div>
      <Header title={`Pencarian untuk : ${decodedKeyword}`} />
      {searchAnime.data.length === 0 && (
        <h1 className="text-center text-sm md:text-4xl font-bold mt-32 text-primary-200 underline">
          Keyword Tidak Ditemukan
        </h1>
      )}
      <AnimeList api={searchAnime} />
    </div>
  );
};

export default Page;
