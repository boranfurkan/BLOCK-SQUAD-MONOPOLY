"use client";
import React, { useState } from "react";
import Image from "next/image";
import { InstagramIcon } from "@/components/Icons/InstagramIcon";
import { TwitterIcon } from "@/components/Icons/TwitterIcon";
import { SpotifyIcon } from "@/components/Icons/SpotifyIcon";
import Link from "next/link";
import { FeaturedArtist } from "@/types";

const FeaturedArtistsCard = ({
  id,
  artistAccount,
  spotify,
  twitter,
  instagram,
  avatarUri,
}: FeaturedArtist) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(!isHovered)}
    >
      <Image
        src={avatarUri}
        alt={artistAccount}
        width={344}
        height={424}
        className={`transition-all duration-300 border border-primaryBorder rounded-[26.23px] ${
          isHovered ? "brightness-50" : ""
        } w-full sm:w-[300px] md:w-[350px] lg:w-[344px]`}
      />
      <div
        className={`absolute inset-0 flex flex-col gap-3 items-center w-full justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="font-heading-3xl-anton text-center">{artistAccount}</h2>
        <div className="flex space-x-4">
          <Link href={instagram} target="_blank">
            <InstagramIcon width={30} height={30} fill="#F32425" />
          </Link>
          <Link href={twitter} target="_blank">
            <TwitterIcon width={30} height={30} fill="#F32425" />
          </Link>
          <Link href={spotify} target="_blank">
            <SpotifyIcon width={30} height={30} fill="#F32425" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtistsCard;
