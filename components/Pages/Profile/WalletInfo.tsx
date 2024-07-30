import React from "react";
import Image from "next/image";

const WalletInfo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-primary-light-gradient p-6 rounded-[33.16px] border border-primaryBorder text-white space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex flex-col items-center gap-4 w-full">
        <h3 className="font-content-lg font-bold uppercase">Your Wallet</h3>
        <div className="flex items-center justify-center w-full gap-5">
          <div className="relative w-[40px] h-[40px] rounded-full border-2 border-primaryBorder">
            <Image
              src="/dummy/dummy-singer.png"
              alt="Token Avatar"
              className="rounded-full"
              fill
              objectPosition="center"
            />
          </div>
          <p className="font-content-lg">FTD3322...43DFD</p>
        </div>
      </div>

      <div className="border-l border-primaryBorder h-0 md:h-20 w-full md:w-0"></div>

      <div className="flex flex-col items-center gap-4 w-full">
        <h3 className="font-content-lg font-bold uppercase">Wallet Balance</h3>
        <div className="flex items-center justify-center w-full gap-5">
          <div className="relative w-[40px] h-[40px] rounded-full border-2 border-primaryBorder">
            <Image
              src="/dummy/dummy-singer.png"
              alt="Token Avatar"
              className="rounded-full"
              fill
              objectPosition="center"
            />
          </div>
          <p className="font-content-lg">323,322 $flocka</p>
        </div>
      </div>

      <div className="border-l border-primaryBorder h-0 md:h-20 w-full md:w-0"></div>

      <div className="flex flex-col items-center gap-4 w-full">
        <h3 className="font-content-lg font-bold uppercase">total staked</h3>
        <div className="flex items-center justify-center w-full gap-5">
          <div className="relative w-[40px] h-[40px] rounded-full border-2 border-primaryBorder">
            <Image
              src="/dummy/dummy-singer.png"
              alt="Token Avatar"
              className="rounded-full"
              fill
              objectPosition="center"
            />
          </div>
          <p className="font-content-lg">23,322 $flocka</p>
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;
