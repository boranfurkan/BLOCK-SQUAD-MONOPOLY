"use client";
import React, { useRef, useCallback } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { PlayIcon } from "@/components/Icons/PlayIcon";
import { PauseIcon } from "@/components/Icons/PauseIcon";

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url }) => {
  const containerRef = useRef(null);

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: "rgb(255, 255, 255)",
    progressColor: "rgb(255, 0, 0)",
    url: url,
    cursorWidth: 0,
  });

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    wavesurfer && wavesurfer.setVolume(newVolume);
  };

  return (
    <div className="flex items-center bg-black rounded-lg w-full">
      <button onClick={onPlayPause} className="mr-4 text-white">
        {isPlaying ? (
          <PauseIcon width={24} height={24} />
        ) : (
          <PlayIcon width={24} height={24} />
        )}
      </button>
      <div ref={containerRef} className="flex-1 h-24"></div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        defaultValue="0.5"
        onChange={handleVolumeChange}
        className="ml-4"
        style={{ accentColor: "red" }}
      />
    </div>
  );
};

export default AudioPlayer;
