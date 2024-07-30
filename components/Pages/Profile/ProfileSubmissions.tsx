import React from "react";
import PrimaryLink from "@/components/Buttons/PrimaryLink";
import { Submission } from "@/types";
import SubmissionCard from "@/components/Cards/SubmissionCard";

const dummyData: Submission[] = [
  {
    id: "1",
    creator: "Waka Flocka",
    name: "Hard in the Paint",
    thumbnailUri: "/dummy/album-cover.png",
    description: "Some dummy description for the song",
    genre: 0,
    category: 0,
    mediaUri:
      "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    mediaType: "audio",
    timestamp: 1630512000000,
    pubkey: "GJHJHJH",
    positiveVotes: 12121,
    negativeVotes: 12121,
  },
  {
    id: "2",
    creator: "Waka Flocka",
    name: "Hard in the Paint",
    thumbnailUri: "/dummy/album-cover.png",
    description: "Some dummy description for the song",
    genre: 0,
    category: 0,
    mediaUri:
      "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    mediaType: "audio",
    timestamp: 1630512000000,
    pubkey: "GJHJHJH",
    positiveVotes: 12121,
    negativeVotes: 12121,
  },
  {
    id: "3",
    creator: "Waka Flocka",
    name: "Hard in the Paint",
    thumbnailUri: "/dummy/album-cover.png",
    description: "Some dummy description for the song",
    genre: 0,
    category: 0,
    mediaUri:
      "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    mediaType: "audio",
    timestamp: 1630512000000,
    pubkey: "GJHJHJH",
    positiveVotes: 12121,
    negativeVotes: 12121,
  },
];

const ProfileSubmissions = () => {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <div className="flex flex-wrap items-center justify-center w-full gap-6 md:gap-12 lg:gap-16">
        {dummyData.map((data) => (
          <SubmissionCard key={data.id} version="stats" submission={data} />
        ))}
      </div>
      <PrimaryLink href="/discover" className="px-6">
        view all
      </PrimaryLink>
    </div>
  );
};

export default ProfileSubmissions;
