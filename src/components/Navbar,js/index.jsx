"use client";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import InputSearch, { SearchIcon } from "../InputSearch";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const navList = [
    {
      name: "Top Anime",
      path: "/top-anime",
    },
    {
      name: "Recommend Anime",
      path: "/recommendations-anime",
    },
    {
      name: "Seasonal Anime List",
      path: "/seasons",
    },
    {
      name: "Anime Current Season",
      path: "/seasons/now",
    },
    {
      name: "Anime Upcoming Season",
      path: "/seasons/upcoming",
    },
    {
      name: "Top Manga",
      path: "/top-manga",
    },
    {
      name: "Recommend Manga",
      path: "/recommendations-manga",
    },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=""
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link
            href={"/"}
            className="font-bold text-2xl bg-gradient-to-r to-primary-300 from-primary-600 bg-clip-text text-transparent "
          >
            MyKartunList
          </Link>
        </NavbarItem>
        <NavbarContent justify="end" className="items-center">
          <InputSearch />
        </NavbarContent>
      </NavbarContent>
      <NavbarMenu>
        {navList.map((item, i) => (
          <NavbarMenuItem key={i}>
            <Link
              className={`text-primary-800 hover:underline ${
                pathName === item.path ? "underline text-primary-600" : ""
              }`}
              href={item.path}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
