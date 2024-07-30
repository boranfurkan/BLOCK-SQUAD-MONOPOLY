"use client";
import PrimaryLink from "@/components/Buttons/PrimaryLink";
import SubmissionCard from "@/components/Cards/SubmissionCard";
import { Submission, Genre, Category } from "@/types";
import React from "react";

const dummyData: Submission[] = [
  {
    id: "1",
    creator: "Waka Flocka",
    name: "Hard in the Paint",
    thumbnailUri: "/dummy/album-cover.png",
    description: "Some dummy description for the song",
    genre: Genre.HipHop,
    category: Category.Musician,
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
    creator: "John Doe",
    name: "Soft Melody",
    thumbnailUri: "/dummy/album-cover.png",
    description: "A soft melody to soothe your soul",
    genre: Genre.Pop,
    category: Category.Producer,
    mediaUri:
      "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/07/03/USAT/74292817007-858448034.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp",
    mediaType: "image",
    timestamp: 1630612000000,
    pubkey: "HJHJSJH",
    positiveVotes: 8123,
    negativeVotes: 300,
  },
  {
    id: "3",
    creator: "Jane Smith",
    name: "Electric Dreams",
    thumbnailUri: "/dummy/album-cover.png",
    description: "A futuristic electronic track",
    genre: Genre.Electronic,
    category: Category.Songwriter,
    mediaUri: "https://www.youtube.com/watch?v=H5FW4BKV5Pk",
    mediaType: "video",
    timestamp: 1630712000000,
    pubkey: "KJLJLJL",
    positiveVotes: 9000,
    negativeVotes: 1000,
  },
  {
    id: "4",
    creator: "Alice Johnson",
    name: "Rock Anthem",
    thumbnailUri: "/dummy/album-cover.png",
    description: "A powerful rock anthem",
    genre: Genre.Rock,
    category: Category.Engineer,
    mediaUri: "https://www.example.com/media/rock-anthem.mp3",
    mediaType: "audio",
    timestamp: 1630812000000,
    pubkey: "MNOPQRS",
    positiveVotes: 12000,
    negativeVotes: 500,
  },
  {
    id: "5",
    creator: "Bob Brown",
    name: "Country Roads",
    thumbnailUri: "/dummy/album-cover.png",
    description: "A classic country song",
    genre: Genre.Country,
    category: Category.Artist,
    mediaUri: "https://www.example.com/media/country-roads.mp3",
    mediaType: "audio",
    timestamp: 1630912000000,
    pubkey: "TUVWXYZ",
    positiveVotes: 8000,
    negativeVotes: 200,
  },
  {
    id: "6",
    creator: "Charlie Black",
    name: "Jazz Nights",
    thumbnailUri: "/dummy/album-cover.png",
    description: "A smooth jazz track",
    genre: Genre.Jazz,
    category: Category.Vocalist,
    mediaUri: "https://www.example.com/media/jazz-nights.mp3",
    mediaType: "audio",
    timestamp: 1631012000000,
    pubkey: "ABCDE",
    positiveVotes: 7000,
    negativeVotes: 300,
  },
  {
    id: "7",
    creator: "Diana Green",
    name: "Metal Fury",
    thumbnailUri: "/dummy/album-cover.png",
    description: "An intense metal track",
    genre: Genre.Metal,
    category: Category.Instrumentalist,
    mediaUri: "https://www.example.com/media/metal-fury.mp3",
    mediaType: "audio",
    timestamp: 1631112000000,
    pubkey: "FGHIJ",
    positiveVotes: 5000,
    negativeVotes: 700,
  },
  {
    id: "8",
    creator: "Emily White",
    name: "Blues Riffs",
    thumbnailUri: "/dummy/album-cover.png",
    description: "A soulful blues track",
    genre: Genre.Blues,
    category: Category.Beatmaker,
    mediaUri: "https://www.example.com/media/blues-riffs.mp3",
    mediaType: "audio",
    timestamp: 1631212000000,
    pubkey: "KLMNO",
    positiveVotes: 9000,
    negativeVotes: 200,
  },
  {
    id: "9",
    creator: "Frank White",
    name: "HipHop Beats",
    thumbnailUri: "/dummy/album-cover.png",
    description: "Some hot hiphop beats",
    genre: Genre.HipHop,
    category: Category.Producer,
    mediaUri: "https://www.example.com/media/hiphop-beats.mp3",
    mediaType: "audio",
    timestamp: 1631312000000,
    pubkey: "PQRST",
    positiveVotes: 7000,
    negativeVotes: 300,
  },
  {
    id: "10",
    creator: "Grace Red",
    name: "Classical Symphony",
    thumbnailUri: "/dummy/album-cover.png",
    description: "A beautiful classical symphony",
    genre: Genre.Classical,
    category: Category.Composer,
    mediaUri: "https://www.example.com/media/classical-symphony.mp3",
    mediaType: "audio",
    timestamp: 1631412000000,
    pubkey: "UVWXYZ",
    positiveVotes: 8500,
    negativeVotes: 150,
  },
];

const SubmissionsShow = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <PrimaryLink href="/submissions/create">
        Create a new submission
      </PrimaryLink>
      <div className="flex flex-wrap items-center justify-center w-full gap-6 md:gap-12 lg:gap-16">
        {dummyData.map((data) => (
          <SubmissionCard key={data.id} version="redirect" submission={data} />
        ))}
      </div>
    </div>
  );
};

export default SubmissionsShow;
