// SubmissionCard.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HearthIcon } from "@/components/Icons/HearthIcon";
import { Submission } from "@/types";
import CustomProgressBar from "../UI/ProgressBar";
import { calculateProgress } from "@/utils";
import { HearthCrackIcon } from "../Icons/HeartCrackIcon";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PrimaryLink from "../Buttons/PrimaryLink";

interface SubmissionCardProps {
  version: "stats" | "buttons" | "redirect";
  submission: Submission;
}

const SubmissionCard = ({
  version,
  submission: {
    id,
    creator,
    name,
    thumbnailUri,
    mediaUri,
    mediaType,
    positiveVotes,
    negativeVotes,
  },
}: SubmissionCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-start gap-5 w-full sm:w-auto"
    >
      <Image
        src={thumbnailUri}
        width={384}
        height={384}
        alt="Featured Card"
        className="w-full sm:w-[300px] md:w-[350px] lg:w-[384px] rounded-[26.65px] border border-primaryBorder"
      />
      <div className="flex flex-col uppercase gap-1 text-center sm:max-w-[300px] md:max-w-[350px] lg:max-w-[384px] overflow-x-auto no-scrollbar">
        <h4 className="font-heading-3xl-anton text-white whitespace-nowrap">
          {name}
        </h4>
        <h5 className="font-content-lg text-light-gray">{creator}</h5>
      </div>
      {version === "stats" && (
        <div className="flex flex-col gap-1 items-center">
          <div className="flex items-center justify-start gap-1.5 w-full">
            <HearthIcon />
            <span className="text-white font-content-md-4">
              <span className="text-primary">{positiveVotes}</span> upvotes
            </span>
          </div>
          <div className="flex items-center justify-start gap-1.5 w-full">
            <HearthCrackIcon />
            <span className="text-white font-content-md-4">
              <span className="text-primary">{negativeVotes}</span> upvotes
            </span>
          </div>
        </div>
      )}
      {version === "buttons" && (
        <div className="flex flex-col gap-5 w-full items-center">
          <PrimaryLink href={`/c/${id}`}>View Submission</PrimaryLink>
          <div className="flex flex-col gap-3 items-center w-full">
            <CustomProgressBar
              progress={calculateProgress(positiveVotes || 0, 20000)}
              className="!w-[80%]"
            />
            <p className="font-content-md">
              <span className="text-primary">{positiveVotes}</span> out of{" "}
              <span className="text-primary">1000</span> upvotes
            </p>
          </div>
        </div>
      )}
      {version === "redirect" && (
        <div className="flex flex-col gap-4">
          <PrimaryLink href={`/c/${id}`}>View Submission</PrimaryLink>
          <div className="flex flex-col gap-1 items-center">
            <div className="flex items-center justify-start gap-1.5 w-full">
              <HearthIcon />
              <span className="text-white font-content-md-4">
                <span className="text-primary">{positiveVotes}</span> upvotes
              </span>
            </div>
            <div className="flex items-center justify-start gap-1.5 w-full">
              <HearthCrackIcon />
              <span className="text-white font-content-md-4">
                <span className="text-primary">{negativeVotes}</span> upvotes
              </span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SubmissionCard;
