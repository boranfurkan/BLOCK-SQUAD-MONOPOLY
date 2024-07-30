"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";

const HeroCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      useKeyboardArrows={false}
      showIndicators
      infiniteLoop
      autoPlay
      stopOnHover
      emulateTouch
      swipeable={false}
      className="h-[75vh] w-full"
      interval={60000}
      transitionTime={1500}
    >
      <CarouselItem
        songTitle="Pick up a bag of"
        id={1}
        artist="$FLOCKA"
        imageSrc="/dummy/hero-2.png"
        uri="https://jup.ag/swap/SOL-FLOCKA"
        textColor="white"
        buttonContent="Buy Now"
      />
            <CarouselItem
        songTitle="Block Squad Monopoly"
        id={1}
        artist="Coming Soon"
        imageSrc="/dummy/hero-3.png"
        uri="null"
        textColor="white"
        buttonContent={null}
      />
      <CarouselItem
        songTitle="threw em' out"
        id={1}
        artist="Jasiah x Waka Flocka"
        imageSrc="/dummy/dummy-hero.png"
        uri=""
        textColor="black"
        buttonContent="Listen Now"
      />
    </Carousel>
  );
};

export default HeroCarousel;
