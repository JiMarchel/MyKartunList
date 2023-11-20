import { FaRegStar } from "react-icons/fa";

import ModalMoreInfo from "@/components/Modal";
import {
  getDataResponse,
} from "@/components/util/get-anime";
import { formatLocaleString, mapAndJoin } from "@/components/util/mapAndJoin";
import {
  Image,
  Divider,
  ScrollShadow,
  Card,
  CardBody,
} from "@nextui-org/react";
import ModalPicture from "@/components/ModalPicture";

const MangaIdPage = async ({ params: { id } }) => {
  const { data } = await getDataResponse(`manga/${id}`);
  const { data: dataPictures } = await getDataResponse(`manga/${id}/pictures`);

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
            <p>By : {formatLocaleString(data.scored_by || "Unknown")} users</p>
            <p>Ranked #{data.rank}</p>
            <p>
              Chapters : {data.type} - {data.chapters}
            </p>
            <p>Serializations : {mapAndJoin(data.serializations, "name")}</p>
          </div>
          <div className="mt-5">
            <ModalMoreInfo
              title={`Title : ${data.title}`}
              type={`Type : ${data.type}`}
              episodes={`Chapters : ${data.chapters}`}
              status={`Status : ${data.status}`}
              aired={`Published : ${data.published.string}`}
              genres={`Genres : ${mapAndJoin(data.genres, "name")}`}
              theme={`Themes : ${mapAndJoin(data.themes, "name")}`}
              demographics={`Demographics : ${mapAndJoin(
                data.demographics,
                "name"
              )}`}
              studios={`Serializations : ${mapAndJoin(
                data.serializations,
                "name"
              )}`}
              producers={`Authors : ${mapAndJoin(data.authors, "name")}`}
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
        <h2 className="text-xl mb-3">Pictures :</h2>
        <ScrollShadow className={`max-h-80 w-full`}>
          <div className="grid grid-cols-3 gap-3">
            {dataPictures.map((data, index) => (
              <Card key={index}>
                <CardBody>
                  <ModalPicture
                    imageSrc={data.webp.large_image_url}
                    imageTitle={data.title}
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

export default MangaIdPage;
