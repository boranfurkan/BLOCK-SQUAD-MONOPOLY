"use client";
import PaddingContainer from "@/components/Containers/PaddingContainer";
import SectionContainer from "@/components/Containers/SectionContainer";
import PageFilters from "@/components/Shared/PageFilters";
import VotingsShow from "@/components/Pages/Voting/VotingsShow";
import HeadingWithGridBg from "@/components/Shared/HeadingWithGridBg";
import React, { useState } from "react";

const Page = () => {
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("none");
  const [genreOption, setGenreOption] = useState<string[]>([]);

  const handleCategoriesChange = (selectedCategories: string | string[]) => {
    if (selectedCategories.includes("all")) {
      setCategories(["all"]);
    } else if (Array.isArray(selectedCategories)) {
      setCategories(selectedCategories);
    }
  };

  const handleSortChange = (selectedSort: string | string[]) => {
    setSortOption(selectedSort as string);
  };

  const handleGenreChange = (selectedGenre: string | string[]) => {
    if (selectedGenre.includes("all")) {
      setGenreOption(["all"]);
    } else if (Array.isArray(selectedGenre)) {
      setGenreOption(selectedGenre);
    }
  };

  return (
    <SectionContainer className="gap-16">
      <SectionContainer id="voting" className="gap-4">
        <HeadingWithGridBg heading="Voting" align="left" />
        <PaddingContainer className="relative z-[10] space-y-10">
          <PageFilters
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            categories={categories}
            handleCategoriesChange={handleCategoriesChange}
            sortOption={sortOption}
            handleSortChange={handleSortChange}
            genreOption={genreOption}
            handleGenreChange={handleGenreChange}
          />
          <VotingsShow
            search={searchValue}
            sortBy={sortOption}
            category={categories}
            genre={genreOption}
          />
        </PaddingContainer>
      </SectionContainer>
    </SectionContainer>
  );
};

export default Page;
