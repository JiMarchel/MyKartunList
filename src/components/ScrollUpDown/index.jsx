import { Link } from "@nextui-org/react";
import Image from "next/image";

const ScrollUpDown = () => {
  return (
    <div className="relative md:hidden">
      <div className="flex flex-col z-30 right-0 top-1/2 fixed">
        <span className="text-tiny text-center text-primary font-bold bg-black rounded-lg">Anime</span>
        <Link href="#top-anime">
          <Image
            src="/anime.jpg"
            width={100}
            height={100}
            alt="anime"
            className="h-14 w-14 rounded-full"
          />
        </Link>
        <Link href="#top-manga">
          <Image
            src="/manga.jpg"
            width={100}
            height={100}
            alt="anime"
            className="h-14 w-14 rounded-full"
          />
        </Link>
        <span className="text-tiny text-center text-primary font-bold bg-black rounded-lg">Manga</span>
      </div>
    </div>
  );
};

export default ScrollUpDown;
