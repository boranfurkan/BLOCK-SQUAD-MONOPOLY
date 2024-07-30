"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Submission } from "@/types";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { HearthIcon } from "@/components/Icons/HearthIcon";
import { HearthCrackIcon } from "@/components/Icons/HeartCrackIcon";
import AudioPlayer from "@/components/Shared/AudioPlayer";
import MediaModal from "@/components/Modals/MediaModal";

const dummyData: Submission = {
  id: "1",
  creator: "Waka Flocka",
  name: "Hard in the Paint",
  thumbnailUri: "/dummy/album-cover.png",
  description: "Some dummy description for the song",
  genre: 0,
  category: 0,
  mediaUri: "/dummy/dummy-song.mp3",
  mediaType: "audio",
  timestamp: 1630512000000,
  pubkey: "GJHJHJH",
  positiveVotes: 12121,
  negativeVotes: 12121,
};

const ContentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="w-full md:w-max flex justify-center md:block">
        <div className="sm:w-[300px] md:w-[350px] lg:w-[384px] flex flex-col items-center gap-4">
          <Image
            src={dummyData.thumbnailUri}
            width={384}
            height={384}
            alt="Featured Card"
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[384px] rounded-[26.65px] border border-primaryBorder"
          />
          <PrimaryButton>Upvote</PrimaryButton>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full items-center md:items-start justify-center">
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col gap-2 md:border-r border-primaryBorder pr-0 md:pr-10 max-sm:text-center">
            <h3 className="font-heading-4xl-anton">{dummyData.name}</h3>
            <h5 className="font-heading-lg-2 text-light-gray">
              {dummyData.creator}
            </h5>
          </div>
          <div className="flex flex-col gap-1 items-center md:items-start">
            <div className="flex items-center justify-start gap-1.5 w-full">
              <HearthIcon />
              <span className="text-white font-content-md-4">
                <span className="text-primary">{dummyData.positiveVotes}</span>{" "}
                upvotes
              </span>
            </div>
            <div className="flex items-center justify-start gap-1.5 w-full">
              <HearthCrackIcon />
              <span className="text-white font-content-md-4">
                <span className="text-primary">{dummyData.negativeVotes}</span>{" "}
                downvotes
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start w-full">
          {dummyData.mediaType === "audio" ? (
            <AudioPlayer url={dummyData.mediaUri} />
          ) : (
            <PrimaryButton onClick={handleModalOpen}>
              {dummyData.mediaType === "image" ? "View Image" : "View Video"}
            </PrimaryButton>
          )}
        </div>
      </div>
      <MediaModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        mediaUri={dummyData.mediaUri}
        mediaType={dummyData.mediaType}
        creator={dummyData.creator}
        name={dummyData.name}
      />
    </div>
  );
};

export default ContentPage;
