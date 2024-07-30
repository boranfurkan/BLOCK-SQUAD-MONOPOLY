import clsx from "clsx";
import React from "react";

interface CustomProgressBarProps {
  progress: number;
  heigth?: number;
  className?: string;
}

const CustomProgressBar = ({
  progress,
  heigth,
  className,
}: CustomProgressBarProps) => {
  return (
    <div
      className={clsx("w-full rounded-[20px] bg-card-dark-bg p-0", className)}
      style={{ height: heigth ? `${heigth}px` : "14px" }}
    >
      <div
        className="w-full rounded-[20px] bg-[#2B2B2B]"
        style={{
          height: heigth ? `${heigth}px` : "14px",
        }}
      >
        <div
          className="rounded-[20px] transition-all duration-300 ease-in-out"
          style={{
            width: `${progress}%`,
            backgroundColor: "#F32425",
            height: heigth ? `${heigth}px` : "14px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CustomProgressBar;
