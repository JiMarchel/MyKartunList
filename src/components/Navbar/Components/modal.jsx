import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Link,
} from "@nextui-org/react";

export default function NavModal() {
  return (
    <div className="hidden md:flex gap-3 justify-center items-center ml-10">
      <Popover>
        <PopoverTrigger>
          <Button variant="ghost" color="primary">Anime</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2 flex flex-col gap-2">
            <Link className=" hover:underline" href="/top-anime">
              Top Anime
            </Link>
            <Link className=" hover:underline" href="/recommendations-anime">
              Recommend Anime
            </Link>
            <Link className=" hover:underline" href="/seasons">
              Seasonal Anime List
            </Link>
            <Link className=" hover:underline" href="/seasons/now">
              Anime Current Season
            </Link>
            <Link className=" hover:underline" href="/seasons/upcoming">
              Anime Upcoming Season
            </Link>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Button variant="ghost" color="primary">Manga</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2 flex flex-col gap-2">
            <Link className=" hover:underline" href="/top-manga">
              Top Manga
            </Link>
            <Link className=" hover:underline" href="/recommendations-manga">
              Recommend Manga
            </Link>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Button variant="ghost" color="primary">Characters</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2 flex flex-col gap-2">
            <Link className=" hover:underline" href="/top-characters">
              Top Characters
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
