import { getDataResponse } from "@/components/util/get-anime";
import {
  Button,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

const DropdownSeaons = async () => {
  const { data } = await getDataResponse("seasons");

  return (
    <>
      {data.map((dataYear, i) => (
        <Popover key={i}>
          <PopoverTrigger>
            <Button variant="ghost" >{dataYear.year}</Button>
          </PopoverTrigger>
          <PopoverContent aria-label="Dynamic Actions">
            {dataYear.seasons.map((dataSeason, i) => (
              <Link key={i} href={`/seasons/${dataYear.year}/${dataSeason}`} className="py-2 px-1">
                {dataSeason}
              </Link>
            ))}
          </PopoverContent>
        </Popover>
      ))}
    </>
  );
};

export default DropdownSeaons;
