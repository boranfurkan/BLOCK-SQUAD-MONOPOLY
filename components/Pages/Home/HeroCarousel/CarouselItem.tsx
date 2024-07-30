import React from "react";
import Image from "next/image";
import PrimaryLink from "@/components/Buttons/PrimaryLink";

interface CarouselItemProps {
  id: number;
  imageSrc: string;
  songTitle: string;
  artist: string;
  uri: string;
  textColor: string;
  buttonContent: string | null;
}

const CarouselItem = ({
  id,
  imageSrc,
  songTitle,
  artist,
  uri,
  textColor,
  buttonContent
}: CarouselItemProps) => {
  return (
    <div className="relative w-full h-full ">
      <Image
        fill
        className="object-center object-cover pointer-events-none"
        src={imageSrc}
        alt={songTitle}
      />
  <div className={`relative z-1 text-${textColor} flex items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20`}>
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="font-heading-4xl-anton uppercase">{songTitle}</h1>
          <h2 className="font-heading-lg uppercase">{artist}</h2>
          {buttonContent ? <PrimaryLink buttonContent={buttonContent} href={uri}>{buttonContent}</PrimaryLink> : null }
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
