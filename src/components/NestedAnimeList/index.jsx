import {
    Card,
    CardFooter,
  } from "@nextui-org/react";
  import Image from "next/image";
  import Link from "next/link";
  
  const NestedAnimeList = ({ api, link }) => {
    return (
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 font-bold">
        {api.map((anime, i) => {
          return (
            <Card key={i}>
              <Link href={`/${link}/${anime.mal_id}`} className="cursor-pointer">
                <Image
                  src={anime.images.webp.large_image_url}
                  alt={anime.title}
                  width={350}
                  height={350}
                  className="w-full max-h-80 object-cover"
                  priority={true}
                />
              </Link>
              <CardFooter className="overflow-visible py-2 ">
                <h1 className="text-sm md:text-lg text-primary-800">
                  {anime.title}
                </h1>
                <p></p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    );
  };
  
  export default NestedAnimeList;
  