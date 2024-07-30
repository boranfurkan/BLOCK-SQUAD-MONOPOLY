import React from "react";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import { ButtonProps } from "@nextui-org/button";

const PrimaryButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ButtonProps) => {
  return (
    <Button
      className={clsx(
        "bg-primary rounded-[57px] font-content-md-2 p-3 text-white",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
