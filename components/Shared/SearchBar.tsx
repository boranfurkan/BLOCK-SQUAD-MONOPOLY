import { cn } from "@nextui-org/theme";
import React from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import clsx from "clsx";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  className?: string;
}

const SearchBar = ({
  searchValue,
  setSearchValue,
  className,
}: SearchBarProps) => {
  return (
    <div className="relative max-md:!w-full">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <SearchIcon fill="#D92323" width={24} height={24} />
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={cn(
          "w-full px-4 pl-12 py-2 bg-dark-gray-2 text-white font-content-lg-armata text-left rounded-[25px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
          className
        )}
      />
    </div>
  );
};

export default SearchBar;
