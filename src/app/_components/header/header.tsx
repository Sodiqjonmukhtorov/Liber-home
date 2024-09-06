import React from "react";
import Logo from "../../_assets/logo";
import { ArrowDownIcon } from "@/app/_assets/arrow-down-icon";
import { SearchIcon } from "@/app/_assets/search-icon";
import { HeaderMenuIcon } from "@/app/_assets/header-menu-icon";
import { UzbFlag } from "@/app/_assets/uzb-flag";
import { LangArrow } from "@/app/_assets/lang-arrow";

export const Header = () => {
  return (
    <div className="p-5 container flex items-center justify-between">
<a href="/">
      <Logo />
      </a>
      <div className="flex items-center gap-2">
        <div className="flex cursor-pointer items-center justify-center border rounded-l-md p-3 gap-4 ml-8">
          <HeaderMenuIcon />
          <p>Рукнлар</p>
          <ArrowDownIcon />
        </div>
        <div className="flex items-center">
          <input
            className="border p-3 outline-none pr-[200px]"
            type="text"
            placeholder="Қидириш"
          />
          <div className="border p-3 cursor-pointer rounded-r-md">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border rounded-md p-3">
          <UzbFlag />
          <p>Ўз</p>
          <LangArrow />
        </div>
        <button className="bg-blue-500 border rounded-md p-3 text-white">
          Кириш
        </button>
      </div>
    </div>
  );
};
