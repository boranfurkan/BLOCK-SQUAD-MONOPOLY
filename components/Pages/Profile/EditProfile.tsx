"use client";
import React, { useState, ChangeEvent } from "react";
import ProfilePicture from "./ProfilePicture";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

const EditProfile: React.FC = () => {
  const [name, setName] = useState<string>("John Doe");
  const [bio, setBio] = useState<string>("I am a singer");
  const [selectedImage, setSelectedImage] = useState<string | null>(
    "/dummy/dummy-singer.png"
  );

  return (
    <div className="flex flex-col md:grid md:grid-cols-4 gap-10">
      <div className="md:col-span-1">
        <ProfilePicture
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <div className="md:col-span-3 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <label
              htmlFor="name"
              className="font-content-md-4 text-white min-w-[140px] text-left md:text-right"
            >
              Username:
            </label>
            <input
              type="text"
              id="name"
              className="border border-[#101010] p-2 w-full bg-[#171717] font-content-md-2-armata rounded-[16.03px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <label
              htmlFor="bio"
              className="font-content-md-4 text-white min-w-[140px] text-left md:text-right"
            >
              Bio:
            </label>
            <textarea
              id="bio"
              className="border border-[#101010] p-2 w-full bg-[#171717] font-content-md-2-armata rounded-[16.03px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={bio}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setBio(e.target.value)
              }
              rows={10}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center md:justify-start md:col-start-2 md:col-end-4">
        <PrimaryButton className="w-full">Save Changes</PrimaryButton>
      </div>
    </div>
  );
};

export default EditProfile;
