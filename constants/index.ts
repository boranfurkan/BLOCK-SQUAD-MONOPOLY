import { Category, Genre } from "@/types";

const enumCategoryOptions = Object.entries(Category)
  .filter(([key, value]) => !isNaN(Number(value)))
  .map(([key, value]) => ({
    value: String(value),
    label: String(key),
  }));

const enumGenreOptions = Object.entries(Genre)
  .filter(([key, value]) => !isNaN(Number(value)))
  .map(([key, value]) => ({
    value: String(value),
    label: String(key),
  }));

export const CATEGORY_OPTIONS = [
  { value: "all", label: "All" },
  ...enumCategoryOptions,
];

export const SORT_OPTIONS = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "mostVotes",
    label: "Most Votes",
  },
  {
    value: "leastVotes",
    label: "Least Votes",
  },
  {
    value: "mostRecent",
    label: "Most Recent",
  },
  {
    value: "leastRecent",
    label: "Least Recent",
  },
  {
    value: "aToZ",
    label: "A - Z",
  },
  {
    value: "zToA",
    label: "Z - A",
  },
];

export const GENRE_OPTIONS = [
  {
    value: "all",
    label: "All",
  },
  ...enumGenreOptions,
];
