"use client";
import React, { useState, useEffect } from "react";
import FeaturedArtistsCard from "./FeaturedArtistCard";
import NavigationLeft from "@/components/Buttons/NavigationLeft";
import NavigationRight from "@/components/Buttons/NavigationRight";

const dummyData = [
  {
    id: "2",
    artistAccount: "WAKA FLOCKA",
    spotify: "https://open.spotify.com/artist/6f4XkbvYlXMH0QgVRzW0sM",
    twitter: "https://twitter.com/wakaflocka",
    instagram: "https://www.instagram.com/wakaflocka",
    avatarUri: "/dummy/dummy-singer.png",
  },
];

const FeatureArtistdShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleCount, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + visibleCount;
      return newIndex >= dummyData.length ? prevIndex : newIndex;
    });
  };

  const visibleData = dummyData.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div className="flex items-center justify-between gap-3">
      <NavigationLeft onClick={handlePrevClick} disabled={currentIndex === 0} />
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {visibleData.map((data) => (
            <FeaturedArtistsCard
              key={data.id}
              id={data.id}
              artistAccount={data.artistAccount}
              spotify={data.spotify}
              twitter={data.twitter}
              instagram={data.instagram}
              avatarUri={data.avatarUri}
            />
          ))}
        </div>
      </div>
      <NavigationRight
        onClick={handleNextClick}
        disabled={currentIndex + visibleCount >= dummyData.length}
      />
    </div>
  );
};

export default FeatureArtistdShow;
