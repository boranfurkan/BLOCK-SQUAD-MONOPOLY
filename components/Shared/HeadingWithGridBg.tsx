"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GridBgRight from "../../public/assets/grid-bg-right.svg";
import GridBgLeft from "../../public/assets/grid-bg-left.svg";

interface HeadingWithGridBgProps {
  heading: string;
  align: "left" | "right";
}

const HeadingWithGridBg = ({ heading, align }: HeadingWithGridBgProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`relative flex ${
        align === "left" ? "justify-start" : "justify-end"
      } items-center`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative pt-16 z-10 ${
          align === "left"
            ? "pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20"
            : "pr-4 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20"
        } border-b-[1.5px] border-solid border-primaryBorder w-max pb-6`}
      >
        <h1
          className={`font-heading-4xl-anton uppercase ${
            align === "left" ? "text-left" : "text-right"
          }`}
        >
          {heading}
        </h1>
      </motion.div>
      <div
        className={`absolute top-0 z-0 ${
          align === "left" ? "left-0" : "right-0"
        } w-full h-full `}
      >
        <Image
          src={align === "left" ? GridBgLeft : GridBgRight}
          alt={`${align}-grid-bg`}
          objectFit="cover"
          className={`absolute top-0 ${
            align === "left" ? "left-0" : "right-0"
          }`}
        />
      </div>
    </div>
  );
};

export default HeadingWithGridBg;
