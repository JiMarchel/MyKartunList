import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

import {
  getDataResponse,
  getNestedAnimeResponse,
} from "@/components/util/get-anime";
import ModalMoreInfo from "@/components/Modal";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  ScrollShadow,
  Link,
} from "@nextui-org/react";
import SmallCard from "@/components/SmallCard";
import { formatLocaleString, mapAndJoin } from "@/components/util/mapAndJoin";

const AnimeIdPage = async ({ params: { id } }) => {
  const { data } = await getDataResponse(`anime/${id}`);
  const { data: dataStreaming } = await getDataResponse(
    `anime/${id}/videos/episodes`
  );

  const dataCharacters = await getNestedAnimeResponse(
    `anime/${id}/characters`,
    "character"
  );

  const mappedDataEpisode = dataStreaming.map((anime) => ({
    malId: anime.mal_id || "",
    title: anime.title || "",
    episode: anime.episode || "",
    url: anime.url || "",
    imageUrl: anime.images.jpg.image_url || "",
  }));

  return (
    <div className="flex flex-col p-3 gap-6 mb-10 text-primary-800">
      <h2 className="text-xl font-bold bg-gradient-to-r from-primary-300 to-primary-600 bg-clip-text text-transparent">
        {data.title}
      </h2>
      <div className="grid grid-cols-2 gap-5 ">
        <Image
          src={data.images.webp.large_image_url}
          alt={data.title}
          width={330}
          height={350}
          className="max-h-80 object-cover rounded-lg"
        />
        <div className="flex flex-col my-2 text-md text-primary-800 gap-1">
          <div>
            <p className="text-medium flex items-center gap-2">
              <FaRegStar />
              {data.score}
            </p>
            <p>By : {formatLocaleString(data.scored_by) || ""} users</p>
            <p>Ranked #{data.rank}</p>
            <p>
              Episodes : {data.type} - {data.episodes}
            </p>
            <p>Studio : {mapAndJoin(data.studios, "name")}</p>
          </div>
          <div className="mt-5">
            <ModalMoreInfo
              title={`Title : ${data.title}`}
              type={`Type : ${data.type}`}
              episodes={`Episodes : ${data.episodes}`}
              status={`Status : ${data.status}`}
              aired={`Aired : ${data.aired.string}`}
              broadcast={`Broadcast : ${data.broadcast.string}`}
              producers={`Producers : ${mapAndJoin(data.producers, "name")}`}
              licensors={`Licensors : ${mapAndJoin(data.licensors, "name")}`}
              studios={`Studios : ${mapAndJoin(data.studios, "name")}`}
              source={`Source : ${data.source}`}
              genres={`Genres : ${mapAndJoin(data.genres, "name")}`}
              theme={`Themes : ${mapAndJoin(data.themes, "name")}`}
              demographics={`Demographics : ${mapAndJoin(
                data.demographics,
                "name"
              )}`}
              duration={`Duration : ${data.duration}`}
              rating={`Rating : ${data.rating}`}
            />
          </div>
        </div>
      </div>
      <Divider />
      <ScrollShadow className="w-full max-h-72">
        <div>
          <h2 className="text-lg text-primary-800">Synopsis :</h2>
          <p
            className="text-xs text-primary-800"
            style={{ whiteSpace: "pre-line", textIndent: "1em" }}
          >
            {data.synopsis}
          </p>
        </div>
      </ScrollShadow>
      <Divider />
      <div>
        <h2 className="text-lg">Background :</h2>
        {data.background === null ? (
          <p className="text-xs">Sorry no data found</p>
        ) : (
          <p className="text-xs">{data.background}</p>
        )}
      </div>
      <Divider />
      <div>
        <h1 className="text-lg">Episodes :</h1>
        <ScrollShadow className={`max-h-80 w-full`}>
          <div className="flex flex-col gap-2">
            {mappedDataEpisode.length > 0 ? (
              mappedDataEpisode.map((data) => (
                <SmallCard
                  key={data.malId}
                  episode={data.episode}
                  title={data.title}
                  imageAlt={data.title}
                  imageUrl={data.imageUrl}
                  link={data.url}
                  target="_blank"
                />
              ))
            ) : (
              <p>Data Episode Not Found</p>
            )}
          </div>
        </ScrollShadow>
      </div>
      <Divider />
      <div>
        <h2 className="p-2 text-lg">Characters :</h2>
        <ScrollShadow className="h-[300px]">
          <div className="grid grid-cols-3 gap-1">
            {dataCharacters.map((character) => (
              <Card key={character.mal_id}>
                <CardBody>
                  <Link href={`/character/anime/${character.mal_id}`}>
                    <Image
                      src={character.images.jpg.image_url}
                      alt={character.name}
                      width={100}
                      height={50}
                      className="object-cover max-w-[100px]"
                    />
                  </Link>
                </CardBody>
                <CardFooter className="text-xs flex items-center justify-start text-primary-800">
                  {character.name}
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
};

export default AnimeIdPage;
