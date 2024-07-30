"use client";
import React from "react";
import FeaturedHitsCard from "@/components/Pages/Home/FeaturedHits/FeaturedHitsCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/Carousel";

const dummyData = [
  {
    id: "1",
    imageUrl: "/dummy/album-cover.png",
    songName: "If You Don't Like To Party",
    artistName: "Waka Flocka",
  },
  {
    id: "2",
    imageUrl: "/dummy/album-cover2.png",
    songName: "Hard in Da Paint",
    artistName: "Waka Flocka",
  },
  {
    id: "3",
    imageUrl: "/dummy/album-cover3.png",
    songName: "No Hands",
    artistName: "Waka Flocka",
  },
  {
    id: "4",
    imageUrl: "/dummy/album-cover.png",
    songName: "If You Don't Like To Party",
    artistName: "Waka Flocka",
  },
  {
    id: "5",
    imageUrl: "/dummy/album-cover2.png",
    songName: "Hard in Da Paint",
    artistName: "Waka Flocka",
  },
  {
    id: "6",
    imageUrl: "/dummy/flocka.png",
    songName: "The Mix Tape",
    artistName: "Lebron Flocka James",
  },
  {
    id: "7",
    imageUrl: "/dummy/album-cover.png",
    songName: "If You Don't Like To Party",
    artistName: "Waka Flocka",
  },
  {
    id: "8",
    imageUrl: "/dummy/album-cover2.png",
    songName: "Hard in Da Paint",
    artistName: "Waka Flocka",
  },
  {
    id: "9",
    imageUrl: "/dummy/flocka.png",
    songName: "The Mix Tape",
    artistName: "Lebron Flocka James",
  },
];

const FeaturedHitsCarousel = () => {
  return (
    <Carousel opts={{ loop: true }} className="space-y-10">
      <CarouselContent className="flex gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10">
        {dummyData.map((data, index) => {
          return (
            <CarouselItem
              key={index}
              className="w-max max-h-[600px] basis-[max-content]"
            >
              <FeaturedHitsCard
                id={data.id}
                imageUrl={data.imageUrl}
                songName={data.songName}
                artistName={data.artistName}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default FeaturedHitsCarousel;
