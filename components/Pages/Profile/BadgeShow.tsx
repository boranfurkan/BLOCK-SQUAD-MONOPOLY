"use client";
import React from "react";
import Image from "next/image";

const dummyData = [
  {
    id: "1",
    badgeUrl: "/assets/badges/level-1.png",
  },
  {
    id: "2",
    badgeUrl: "/assets/badges/level-2.png",
  },
  {
    id: "3",
    badgeUrl: "/assets/badges/level-3.png",
  },
  {
    id: "4",
    badgeUrl: "/assets/badges/level-4.png",
  },
  {
    id: "5",
    badgeUrl: "/assets/badges/level-5.png",
  },
];

const BadgeShow = () => {
  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
      {dummyData.map((badge) => (
        <Image src={badge.badgeUrl} alt="Badge" width={396} height={396} />
      ))}
    </div>
  );
};

export default BadgeShow;
