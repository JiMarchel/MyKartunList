import { Card, CardBody, Link } from "@nextui-org/react";
import Image from "next/image";

const SmallCard = ({
  imageUrl,
  imageAlt,
  title,
  episode,
  link,
  target = ""
}) => {
  return (
    <Card>
      <CardBody className="grid grid-cols-3 gap-5">
        <div className="col-span-1">
          <Link href={link} target={target}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={100}
              height={100}
              className="h-auto w-auto object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="col-span-2 text-xs">
          <Link href={link} target={target}>
            <p className="text-primary-800">{title}</p>
          </Link>
          <p className="text-gray-400">{episode}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default SmallCard;
