"use client";

import DropdownSeaons from "./components/Dropdown";

const SeasonsPage = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 m-4 md:m-8 lg:m-10">
      <DropdownSeaons />
    </div>
  );
};

export default SeasonsPage;
