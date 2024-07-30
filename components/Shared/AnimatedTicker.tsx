"use client";
import { cn } from "@nextui-org/theme";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedTickerProps {
  className?: string;
}

const AnimatedTicker: React.FC<AnimatedTickerProps> = ({ className }) => {
  const [width, setWidth] = useState(0);
  const tickerRef = useRef<HTMLDivElement>(null);
  const tickerContentRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 1;

  const tickerItems = [...Array(20)].map((_, index) => (
    <span key={index} className="font-content-xl text-white uppercase mx-2">
      buy $flocka
    </span>
  ));

  useEffect(() => {
    if (tickerContentRef.current) {
      setWidth(tickerContentRef.current.scrollWidth);
      const clonedItems = [...tickerItems, ...tickerItems];
      tickerContentRef.current.innerHTML = "";
      clonedItems.forEach((item) => {
        const element = document.createElement("span");
        element.className = item.props.className;
        element.innerText = item.props.children;
        tickerContentRef.current?.appendChild(element);
      });
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const scrollTicker = () => {
      if (tickerRef.current && tickerContentRef.current) {
        const currentScroll = tickerRef.current.scrollLeft;
        const maxScroll =
          tickerRef.current.scrollWidth - tickerRef.current.clientWidth;

        if (currentScroll >= maxScroll) {
          tickerRef.current.scrollLeft = 0;
        } else {
          tickerRef.current.scrollLeft = currentScroll + scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(scrollTicker);
    };

    animationFrameId = requestAnimationFrame(scrollTicker);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap bg-primary py-3",
        className
      )}
      ref={tickerRef}
    >
      <div ref={tickerContentRef} style={{ display: "flex" }}></div>
    </div>
  );
};

export default AnimatedTicker;
