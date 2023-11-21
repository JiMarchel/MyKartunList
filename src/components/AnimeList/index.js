import { Card, CardFooter, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api, link }) => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 font-bold">
      {api.data?.map((anime, i) => {
        return (
          <Card key={i}>
            <Link href={`/${link}/${anime.mal_id}`} className="cursor-pointer">
              <Image
                src={
                  anime.images.webp.large_image_url ||
                  anime.images.webp.image_url
                }
                alt={anime.title || anime.name}
                width={350}
                height={350}
                className="w-full max-h-80 object-cover"
                priority={true}
              />
            </Link>
            <CardFooter className="overflow-visible py-2 ">
              <h1 className="text-sm md:text-lg text-primary-800">
                {anime.title || anime.name}
              </h1>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default AnimeList;
