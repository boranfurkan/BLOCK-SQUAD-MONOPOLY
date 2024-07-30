"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

interface ProfilePictureProps {
  selectedImage: string | null;
  setSelectedImage: (image: string) => void;
}

const ProfilePicture = ({
  selectedImage,
  setSelectedImage,
}: ProfilePictureProps) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="relative">
        <div className="w-36 h-36 relative rounded-full flex items-center justify-center border-2 border-primaryBorder">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="Profile"
              className="rounded-full"
              fill
              objectPosition="center"
            />
          ) : (
            <Image
              src="/path-to-your-logo.png"
              alt="Default Profile"
              className="rounded-full"
              fill
              objectPosition="center"
            />
          )}
        </div>
      </div>
      <label
        htmlFor="file-upload"
        className="cursor-pointer underline text-center"
      >
        Upload Photo
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfilePicture;
