import { getDataResponse } from "@/components/util/get-anime";
import Image from "next/image";
import { Divider, ScrollShadow, Link, Button } from "@nextui-org/react";

import React from "react";
import SmallCard from "@/components/SmallCard";

const VoiceActorsIdPage = async ({ params: { id } }) => {
  const { data } = await getDataResponse(`people/${id}`);
  const { data: dataVoice } = await getDataResponse(`people/${id}/voices`);

  const birthdayString = data.birthday;
  const birthdayDate = new Date(birthdayString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = birthdayDate.toLocaleDateString("id-ID", options);

  return (
    <div className="flex flex-col p-3 gap-6 mb-10 text-primary-800 xl:mx-32">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Image
          src={data.images.jpg.image_url}
          alt={data.name}
          width={200}
          height={200}
          className="h-auto w-auto object-cover rounded-lg mx-auto md:col-span-1"
        />
        <div className="flex flex-col gap-1 text-sm md:col-span-2">
          <h2>
            English Name : <span className="text-base">{data.name}</span>
          </h2>
          <h2>
            Given Name : <span className="text-base">{data.given_name}</span>
          </h2>
          <h2>
            Family Name : <span className="text-base">{data.family_name}</span>
          </h2>
          <h2>
            Birthday : <span className="text-base">{formattedDate}</span>
          </h2>
          <h2>
            Favorites :{" "}
            <span className="text-base">{data.favorites.toLocaleString()}</span>
          </h2>
          <Button
            variant="ghost"
            color="primary"
            className="my-2 max-w-sm"
            as={Link}
            target="_blank"
            isDisabled={data.website_url === null}
            href={data.website_url}
          >
            Personal Website
          </Button>
          <div className="hidden sm:block">
            <h2 className="text-xl mb-3">About :</h2>
            <ScrollShadow className="w-full max-h-28">
              <p
                className="text-xs text-primary-800"
                style={{ whiteSpace: "pre-line", textIndent: "1em" }}
              >
                {data.about}
              </p>
            </ScrollShadow>
          </div>
        </div>
      </div>
      <Divider className="sm:hidden" />
      <div className="sm:hidden">
        <h2 className="text-xl mb-3">About :</h2>
        <ScrollShadow className="w-full max-h-60">
          <p
            className="text-xs text-primary-800"
            style={{ whiteSpace: "pre-line", textIndent: "1em" }}
          >
            {data.about}
          </p>
        </ScrollShadow>
      </div>
      <Divider />

      <div className="md:grid md:grid-cols-2 gap-2 lg:gap-5">
        <div>
          <h2 className="text-xl mb-3">Anime & Role :</h2>
          <ScrollShadow className={`max-h-80 w-full`}>
            <div className="flex flex-col gap-2">
              {dataVoice.map((data, index) => (
                <SmallCard
                  key={index}
                  title={data.anime.title}
                  imageAlt={data.anime.title}
                  episode={data.role}
                  imageUrl={data.anime.images.jpg.image_url}
                  link={`/anime/${data.anime.mal_id}`}
                />
              ))}
            </div>
          </ScrollShadow>
        </div>
        <Divider className="md:hidden" />
        <div>
          <h2 className="text-xl mb-3">Character & Role :</h2>
          <ScrollShadow className={`max-h-80 w-full`}>
            <div className="flex flex-col gap-2">
              {dataVoice.map((data, index) => (
                <SmallCard
                  key={index}
                  title={data.character.name}
                  imageAlt={data.character.name}
                  episode={data.role}
                  imageUrl={data.character.images.jpg.image_url}
                  link={`/character/anime/${data.character.mal_id}`}
                />
              ))}
            </div>
          </ScrollShadow>
        </div>
      </div>
    </div>
  );
};

export default VoiceActorsIdPage;
