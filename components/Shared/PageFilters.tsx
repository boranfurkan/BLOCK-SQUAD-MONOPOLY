"use client";
import SearchBar from "@/components/Shared/SearchBar";
import Dropdown from "@/components/UI/Dropdown";
import { CATEGORY_OPTIONS, SORT_OPTIONS, GENRE_OPTIONS } from "@/constants";
import React from "react";

interface PageFiltersProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
  handleCategoriesChange: (selectedCategories: string | string[]) => void;
  sortOption: string;
  handleSortChange: (selectedSort: string | string[]) => void;
  genreOption: string[];
  handleGenreChange: (selectedGenre: string | string[]) => void;
}

const PageFilters: React.FC<PageFiltersProps> = ({
  searchValue,
  setSearchValue,
  categories,
  handleCategoriesChange,
  sortOption,
  handleSortChange,
  genreOption,
  handleGenreChange,
}) => {
  return (
    <div className="flex items-center justify-end gap-3 flex-wrap">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Dropdown
        options={CATEGORY_OPTIONS}
        label="Category"
        onChange={handleCategoriesChange}
        selectionType="multiple"
        selectedOptions={categories}
      />
      <Dropdown
        options={SORT_OPTIONS}
        label="Sort By"
        onChange={handleSortChange}
        selectionType="single"
        selectedOptions={sortOption}
      />
      <Dropdown
        options={GENRE_OPTIONS}
        label="Genre"
        onChange={handleGenreChange}
        selectionType="multiple"
        selectedOptions={genreOption}
      />
    </div>
  );
};

export default PageFilters;
