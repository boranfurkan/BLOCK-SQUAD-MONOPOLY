import React from "react";
import Image from "next/image";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

const TokenInfo: React.FC = () => {
  return (
    <div className="bg-primary-light-gradient p-6 rounded-[33.16px] border border-primaryBorder text-white flex flex-col gap-12">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
        <div className="flex items-center space-x-4">
          <div className="relative w-[80px] h-[80px] rounded-full border-2 border-primaryBorder">
            <Image
              src="/dummy/dummy-singer.png"
              alt="Token Avatar"
              className="rounded-full"
              fill
              objectPosition="center"
            />
          </div>
          <div className="space-y-2">
            <p className="font-content-lg-2 font-bold">$FLOCKA</p>
            <p className="font-content-md-4">
              <span className="text-light-gray">Balance:</span> 233,232 $FLOCKA
            </p>
          </div>
        </div>
        <div className="text-center md:text-left font-content-md-4">
          <p className="text-lg text-light-gray">1.2M MARKET CAP</p>
          <p className="text-lg text-light-gray">$3,432 USD</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-primary-light-gradient p-4 rounded-full border border-primaryBorder flex items-center justify-between w-full md:w-1/3">
          <div className="relative w-[40px] h-[40px] rounded-full border-2 border-primaryBorder">
            <Image
              src="/dummy/dummy-singer.png"
              alt="Token Avatar"
              className="rounded-full"
              fill
              objectPosition="center"
            />
          </div>
          <p className="font-content-lg-2 font-bold">$FLOCKA</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-start-2 flex flex-col items-center bg-primary-light-gradient p-4 rounded-lg border gap-2 border-primaryBorder">
          <p className="font-content-md-4 font-bold">2121</p>
          <p className="font-content-md text-light-gray">CURRENT REWARDS</p>
        </div>
        <div className="flex flex-col items-center bg-primary-light-gradient p-4 rounded-lg gap-2 border border-primaryBorder">
          <p className="font-content-md-4 font-bold">2121</p>
          <p className="font-content-md text-light-gray">SHARE OF POOL</p>
        </div>
        <div className="flex flex-col items-center bg-primary-light-gradient p-4 gap-2 rounded-lg border border-primaryBorder">
          <p className="font-content-md-4 font-bold">2121</p>
          <p className="font-content-md text-light-gray">SHARE OF POOL</p>
        </div>
      </div>

      <div className="flex justify-center">
        <PrimaryButton className="px-6">Confirm</PrimaryButton>
      </div>
    </div>
  );
};

export default TokenInfo;
