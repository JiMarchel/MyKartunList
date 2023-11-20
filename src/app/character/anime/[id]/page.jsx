import ModalPicture from "@/components/ModalPicture";
import SmallCard from "@/components/SmallCard";
import { getDataResponse } from "@/components/util/get-anime";
import { Card, CardBody, Divider, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";

const CharacterAnimePage = async ({ params: { id } }) => {
  const { data } = await getDataResponse(`characters/${id}/full`);
  const { data: dataPictures } = await getDataResponse(
    `characters/${id}/pictures`
  );

  return (
    <div className="flex flex-col p-3 gap-6 mb-10 text-primary-800">
      <div className="grid grid-cols-2 gap-3">
        <Image
          src={data.images.webp.image_url}
          alt={data.name}
          width={200}
          height={200}
          className="max-h-52 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-3 text-sm">
          <h2>
            English Name : <span className="text-base">{data.name}</span>
          </h2>
          <h2>
            Japanese Name : <span className="text-base">{data.name_kanji}</span>
          </h2>
          <p>
            Favorites :{" "}
            <span className="text-base">{data.favorites.toLocaleString()}</span>
          </p>
        </div>
      </div>
      <Divider />
      <div>
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
      <div>
        <h2 className="text-xl mb-3">Voice actors :</h2>
        <ScrollShadow className={`max-h-80 w-full`}>
          <div className="flex flex-col gap-2">
            {data.voices.map((data, index) => (
              <SmallCard
                key={index}
                title={data.person.name}
                imageAlt={data.person.name}
                episode={data.language}
                imageUrl={data.person.images.jpg.image_url}
              />
            ))}
          </div>
        </ScrollShadow>
      </div>
      <Divider />
      <div>
        <h2 className="text-xl mb-3">Animeography :</h2>
        <ScrollShadow className={`max-h-80 w-full`}>
          <div className="flex flex-col gap-2">
            {data.anime.map((data, index) => (
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
      <Divider />
      <div>
        <h2 className="text-xl mb-3">Mangaography :</h2>
        <ScrollShadow className={`max-h-80 w-full`}>
          <div className="flex flex-col gap-2">
            {data.manga.map((data, index) => (
              <SmallCard
                key={index}
                title={data.manga.title}
                imageAlt={data.manga.title}
                episode={data.role}
                imageUrl={data.manga.images.jpg.image_url}
                link={`/manga/${data.manga.mal_id}`}
              />
            ))}
          </div>
        </ScrollShadow>
      </div>
      <div>
        <h2 className="text-xl mb-3">Pictures :</h2>
        <ScrollShadow className={`max-h-80 w-full`}>
          <div className="grid grid-cols-3 gap-3">
            {dataPictures.map((data, index) => (
              <Card key={index}>
                <CardBody>
                  <ModalPicture
                    imageSrc={data.jpg.image_url}
                    imageTitle={data.name}
                  />
                </CardBody>
              </Card>
            ))}
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
};

export default CharacterAnimePage;
