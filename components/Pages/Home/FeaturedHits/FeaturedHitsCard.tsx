"use client";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryLink from "@/components/Buttons/PrimaryLink";

interface FeaturedHitsCardProps {
  id: string;
  imageUrl: string;
  songName: string;
  artistName: string;
}

const FeaturedHitsCard = ({
  id,
  imageUrl,
  artistName,
  songName,
}: FeaturedHitsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[434px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(!isHovered)}
    >
      <Image
        src={imageUrl}
        alt={artistName}
        width={434}
        height={434}
        className={`transition-all duration-300 border border-primaryBorder rounded-[26.23px] ${
          isHovered ? "brightness-50" : ""
        } sm:w-[300px] md:w-[350px] lg:w-[434px] w-full`}
      />
      <div
        className={`absolute inset-0 flex flex-col gap-3 items-center w-full justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-0.5 px-2">
          <h2 className="font-heading-2xl-anton text-center uppercase">
            {artistName}
          </h2>
          <h3 className="font-heading-lg text-center text-light-gray">
            {songName}
          </h3>
        </div>
        <PrimaryLink href={`/song/${id}`}>Listen Now</PrimaryLink>
      </div>
    </div>
  );
};

export default FeaturedHitsCard;
